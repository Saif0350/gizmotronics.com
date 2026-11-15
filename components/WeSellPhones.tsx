"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  TabletSmartphone,
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WeSellPhonesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sell-reveal",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".sell-device",
        { y: 50, scale: 0.9, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sell-display",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.to(".sell-orbit", {
        rotation: 360,
        duration: 35,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".sell-float", {
        y: -9,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#101010] py-20 text-white md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-darkGolden/10 blur-[130px]" />

      <div className="templateContainer relative z-10">
        {/* Section heading label */}
        <div className="sell-reveal mb-12 flex items-center gap-4">
          <span className="h-2 w-2 rounded-full bg-lightGolden" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-lightGolden">
            We Also Sell Phones
          </span>

          <span className="h-px flex-1 bg-white/10" />

          <span className="hidden text-[10px] tracking-widest text-white/30 sm:block">
            GIZMO-TRONICS / SHOP
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Left side */}
          <div className="relative z-10 max-w-xl lg:w-1/2">
            <div className="sell-reveal mb-6 inline-flex items-center gap-2 rounded-full border border-lightGolden/20 bg-lightGolden/5 px-4 py-2">
              <ShoppingBag
                size={13}
                strokeWidth={1.5}
                className="text-lightGolden"
              />

              <span className="text-[10px] uppercase tracking-[0.15em] text-lightGolden">
                Buy Your Next Smartphone
              </span>
            </div>

            <h2 className="sell-reveal text-[clamp(2.7rem,5.5vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.055em]">
              We repair.
              <br />
              <span className="font-light italic text-lightGolden">
                We also sell.
              </span>
            </h2>

            <p className="sell-reveal mt-7 max-w-md text-sm leading-7 text-white/50 md:text-base">
              Looking for your next phone? At Gizmo-Tronics, we don't just
              repair devices. We also sell iPhones and Android smartphones,
              helping you find the right phone for your needs and budget.
            </p>

            {/* Selling points */}
            <div className="sell-reveal mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {["iPhones", "Android Phones", "Helpful Advice"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs text-white/65"
                >
                  <BadgeCheck
                    size={15}
                    strokeWidth={1.5}
                    className="text-lightGolden"
                  />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="sell-reveal mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#contact-section"
                className="group inline-flex items-center gap-7 rounded-full bg-lightGolden px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-white"
              >
                Enquire About Phones
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <span className="text-xs text-white/35">
                Ask us what's available
              </span>
            </div>
          </div>

          {/* Right side - Icon composition */}
          <div className="sell-display relative flex min-h-[340px] items-center justify-center sm:min-h-[420px] lg:w-1/2">
            {/* Orbit decoration */}
            <div className="pointer-events-none absolute h-[290px] w-[290px] sm:h-[390px] sm:w-[390px]">
              <div className="sell-orbit absolute inset-0 rounded-full border border-dashed border-lightGolden/20" />

              <div className="absolute inset-8 rounded-full border border-white/5" />

              <div className="absolute inset-20 rounded-full bg-lightGolden/5 blur-3xl" />
            </div>

            {/* Phone illustrations */}
            <div className="relative flex items-center justify-center">
              {/* iPhone */}
              <div className="sell-device sell-float relative z-20 translate-x-4 sm:translate-x-6">
                <div className="relative flex h-[215px] w-[125px] -rotate-12 flex-col items-center justify-center overflow-hidden rounded-[30px] border border-white/25 bg-gradient-to-br from-[#303030] via-[#171717] to-[#090909] shadow-[15px_20px_55px_rgba(0,0,0,0.65)] sm:h-[280px] sm:w-[165px] sm:rounded-[38px]">
                  <span className="absolute left-1/2 top-3 h-3 w-12 -translate-x-1/2 rounded-full bg-black sm:top-4 sm:h-4 sm:w-16" />

                  <Smartphone
                    size={70}
                    strokeWidth={0.85}
                    className="text-lightGolden sm:h-24 sm:w-24"
                  />

                  <span className="mt-5 text-[11px] font-medium tracking-[0.2em] text-white/70 sm:text-xs">
                    iPHONE
                  </span>

                  <span className="absolute bottom-5 h-px w-10 bg-lightGolden/40" />
                </div>
              </div>

              {/* Android */}
              <div className="sell-device sell-float relative z-10 -translate-x-3 translate-y-6 sm:-translate-x-5">
                <div className="relative flex h-[215px] w-[125px] rotate-12 flex-col items-center justify-center overflow-hidden rounded-[30px] border border-lightGolden/35 bg-gradient-to-br from-[#3b3019] via-[#1c1a16] to-[#090909] shadow-[15px_20px_55px_rgba(0,0,0,0.65)] sm:h-[280px] sm:w-[165px] sm:rounded-[38px]">
                  <span className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-black sm:top-4" />

                  <TabletSmartphone
                    size={70}
                    strokeWidth={0.85}
                    className="text-lightGolden sm:h-24 sm:w-24"
                  />

                  <span className="mt-5 text-[11px] font-medium tracking-[0.2em] text-white/70 sm:text-xs">
                    ANDROID
                  </span>

                  <span className="absolute bottom-5 h-px w-10 bg-lightGolden/40" />
                </div>
              </div>
            </div>

            {/* Small floating detail */}
            <div className="sell-reveal absolute right-0 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-[#181818] px-4 py-2 shadow-xl sm:right-5">
              <Sparkles size={13} className="text-lightGolden" />

              <span className="text-[10px] tracking-wide text-white/70">
                Find Your Next Phone
              </span>
            </div>

            <div className="sell-reveal absolute bottom-4 left-0 flex items-center gap-2 sm:left-5">
              <span className="h-6 w-px bg-lightGolden/60" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                iOS & Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
