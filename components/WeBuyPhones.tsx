"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Banknote,
  BadgeCheck,
  ShieldCheck,
  Zap,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WeBuyPhones() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Main headline and content reveal
      gsap.from(".cash-reveal", {
        y: 65,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      // Benefits animation
      gsap.from(".cash-benefit", {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cash-benefits",
          start: "top 85%",
          once: true,
        },
      });

      // Brand animation
      gsap.from(".cash-brand", {
        y: 25,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cash-brands",
          start: "top 90%",
          once: true,
        },
      });

      // Phone parallax effect
      if (phoneRef.current) {
        gsap.to(phoneRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-black py-20 text-white md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-[10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        <div className="absolute -left-40 bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="templateContainer relative z-10">
        {/* Hero */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left Content */}
          <div className="relative z-20">
            <div className="cash-reveal mb-7 inline-flex items-center gap-3 border border-lightGolden/30 bg-lightGolden/10 px-5 py-2.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lightGolden" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lightGolden">
                Turn Your Old Phone Into Cash
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="cash-reveal text-[clamp(3.5rem,8vw,8.5rem)] font-black uppercase leading-[0.88] tracking-[-0.065em]">
                WE BUY
              </h2>

              <h2 className="cash-reveal text-[clamp(3.5rem,8vw,8.5rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] text-lightGolden">
                PHONES
              </h2>

              <div className="cash-reveal flex items-center gap-4">
                <span className="text-xl font-bold uppercase tracking-widest md:text-3xl">
                  FOR
                </span>

                <span className="inline-block bg-gradient-to-r from-darkGolden via-lightGolden to-darkGolden bg-clip-text pr-4 text-[clamp(3rem,7vw,7rem)] font-black uppercase italic leading-[1.1] tracking-[-0.04em] text-transparent">
                  CASH!
                </span>
              </div>
            </div>

            <p className="cash-reveal mt-8 max-w-lg text-base leading-8 text-white/65 md:text-lg">
              Got an old phone sitting around? Turn it into money. We offer
              competitive prices for used smartphones, with a simple and
              straightforward selling process.
            </p>

            <div className="cash-reveal mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-darkGolden to-lightGolden px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]"
              >
                Sell Your Phone
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <span className="flex items-center gap-2 text-sm text-white/55">
                <ShieldCheck size={17} className="text-lightGolden" />
                Trusted Device Buying
              </span>
            </div>
          </div>

          {/* Right Phone Showcase */}
          <div className="cash-reveal relative flex min-h-[390px] items-center justify-center sm:min-h-[480px] lg:min-h-[650px]">
            <div
              ref={phoneRef}
              className="relative flex h-full w-full items-center justify-center"
            >
              {/* Golden Glow */}
              <div className="absolute h-[300px] w-[300px] rounded-full bg-lightGolden/20 blur-[100px] sm:h-[400px] sm:w-[400px]" />

              {/* Decorative Rings */}
              <div className="absolute h-[300px] w-[300px] rounded-full border border-lightGolden/15 sm:h-[440px] sm:w-[440px]" />
              <div className="absolute h-[230px] w-[230px] rounded-full border border-lightGolden/20 sm:h-[350px] sm:w-[350px]" />

              {/* Phone Image */}
              <div className="relative z-10 h-[360px] w-full max-w-[440px] sm:h-[490px]">
                {!imageError ? (
                  <Image
                    src="/assets/phones-cash.png"
                    alt="Smartphones for cash trade-in"
                    fill
                    sizes="(max-width: 640px) 100vw, 440px"
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.65)]"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Smartphone
                      size={180}
                      strokeWidth={0.7}
                      className="text-lightGolden/40"
                    />
                  </div>
                )}
              </div>

              {/* Clockwise Orbit Around the Golden Circle */}
              <div className="pointer-events-none absolute z-20 h-[300px] w-[300px] animate-[spin_20s_linear_infinite] motion-reduce:animate-none sm:h-[440px] sm:w-[440px]">
                {/* Best Offers - Orbiting at Top */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  {/* Counter rotation keeps the card upright */}
                  <div className="animate-[spin_20s_linear_infinite_reverse] motion-reduce:animate-none">
                    <div className="rotate-[6deg] whitespace-nowrap border border-lightGolden/30 bg-[#171717]/95 px-5 py-4 shadow-2xl backdrop-blur-md">
                      <div className="flex items-center gap-2 text-lightGolden">
                        <Banknote size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest">
                          Great Value
                        </span>
                      </div>

                      <p className="mt-2 text-xl font-black uppercase text-white">
                        BEST OFFERS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fast Cash - Orbiting Opposite Best Offers */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  {/* Counter rotation keeps the badge upright */}
                  <div className="animate-[spin_20s_linear_infinite_reverse] motion-reduce:animate-none">
                    <div className="flex h-32 w-32 -rotate-12 flex-col items-center justify-center rounded-full border-2 border-lightGolden bg-[#111111] text-center shadow-[0_0_40px_rgba(212,175,55,0.2)] sm:h-40 sm:w-40">
                      <Zap size={24} className="mb-1 text-lightGolden" />

                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                        FAST
                      </span>

                      <span className="text-2xl font-black uppercase leading-none text-lightGolden sm:text-3xl">
                        CASH
                      </span>

                      <span className="mt-1 text-[9px] uppercase tracking-wider text-white/70">
                        Simple & Easy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
