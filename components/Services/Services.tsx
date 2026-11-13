"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { services } from "../lib/services";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardSection = cardSectionRef.current;
    const section = sectionRef.current;
    const viewport = viewportRef.current;

    if (!cardSection || !section || !viewport) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () =>
        Math.max(0, cardSection.scrollWidth - viewport.clientWidth);

      gsap.to(cardSection, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${getScrollDistance()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-black templateContainer">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-[1.6rem] gradientHeading text-center lg:text-4xl font-medium tracking-wide "
        >
          Services We Offer
        </h2>

        {/* Cards Viewport */}
        <div ref={viewportRef} className="relative w-full overflow-hidden">
          {/* Horizontal Card Section */}
          <div ref={cardSectionRef} className="relative flex w-max gap-5">
            {services.map((item, i) => (
              <div key={item.slug || i} className="shrink-0">
                <ServiceCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
