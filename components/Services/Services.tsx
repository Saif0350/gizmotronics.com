"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, MoveRight } from "lucide-react";
import { Pacifico } from "next/font/google";

import ServiceCard from "./ServiceCard";
import { services } from "../lib/services";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [activeService, setActiveService] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    const cardSection = cardSectionRef.current;
    const viewport = viewportRef.current;
    const progress = progressRef.current;

    if (!section || !cardSection || !viewport || !progress) {
      return;
    }

    const getScrollDistance = () =>
      Math.max(0, cardSection.scrollWidth - viewport.clientWidth);

    const ctx = gsap.context(() => {
      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.fromTo(
        ".services-heading",
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".service-item",
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        },
      );

      const distance = getScrollDistance();

      if (distance <= 0) {
        gsap.set(progress, { scaleX: 1 });
        return;
      }

      gsap.to(cardSection, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(progress, {
              scaleX: self.progress,
            });

            const index = Math.min(
              services.length,
              Math.floor(self.progress * services.length) + 1,
            );

            setActiveService(index);
          },
        },
      });
    }, section);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="templateContainer relative w-full overflow-hidden bg-black py-16 text-white md:py-20"
    >
      <div className="relative flex min-h-[85svh] w-full flex-col justify-center gap-10 overflow-hidden md:min-h-screen md:gap-14">
        {/* Heading */}
        <div className="relative flex flex-col gap-5">
          <div className="services-heading flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lightGolden" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-lightGolden">
              What We Do
            </span>

            <span className="h-px w-12 bg-lightGolden/30" />
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="services-heading">
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                Services{" "}
                <span
                  className={`${pacifico.className} font-normal text-lightGolden`}
                >
                  We Offer
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-xs leading-6 text-white/45 md:text-sm">
                From expert mobile repairs to everyday device essentials,
                explore everything we can help you with.
              </p>
            </div>

            <div className="services-heading flex items-center gap-3 text-white/40">
              <span className="text-[10px] uppercase tracking-[0.2em]">
                Scroll to explore
              </span>

              <MoveRight
                size={19}
                strokeWidth={1.2}
                className="text-lightGolden"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Cards */}
        <div ref={viewportRef} className="relative w-full overflow-hidden">
          <div
            ref={cardSectionRef}
            className="relative flex w-max gap-4 md:gap-6"
          >
            {services.map((item, i) => (
              <div key={item.slug || i} className="service-item shrink-0">
                <ServiceCard data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom progress */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-medium tabular-nums text-lightGolden md:text-xl">
                {String(activeService).padStart(2, "0")}
              </span>

              <span className="text-xs text-white/25">/</span>

              <span className="text-xs tabular-nums text-white/40">
                {String(services.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
              <span>Discover Our Services</span>

              <ArrowDownRight
                size={15}
                strokeWidth={1.3}
                className="text-lightGolden"
              />
            </div>
          </div>

          {/* Progress track */}
          <div className="relative h-px w-full overflow-hidden bg-white/15">
            <div
              ref={progressRef}
              className="absolute inset-0 origin-left bg-lightGolden"
            />
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-darkGolden/5 blur-[110px]" />
    </section>
  );
};

export default Services;
