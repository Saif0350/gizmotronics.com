"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedImage from "../ui/AnimatedImage";
import { CompactContainer } from "../ui/compact-container";

const HomeAboutSection = () => {
  return (
    <section className="relative z-10 w-full bg-background">
      <CompactContainer className="min-h-screen h-auto flex flex-col justify-center">
        <div className="w-full py-10 md:py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Image */}
          <div className="relative lg:col-span-5 min-h-[350px] lg:min-h-[550px] overflow-hidden rounded-lg">
            <AnimatedImage
              src="/assets/images/gizmo.jpg"
              alt="Gizmo-Tronics device repair services"
              width={800}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="block h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-accent/20 pointer-events-none" />
          </div>

          {/* Right Content */}
          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="lg:col-span-7 flex flex-col justify-center lg:py-10"
          >
            {/* Section Label */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase text-foreground tracking-wider">
                ABOUT US
              </span>

              <div className="mt-4 w-12 h-px bg-white" />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl md:text-3xl lg:text-5xl font-semibold text-balance tracking-tight leading-[1.1]"
              style={{ color: "var(--text)" }}
            >
              A more thoughtful
              <span> approach to legal search</span>
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-7">
              <p className="paraStyle !max-w-full">
                Farrow & Farrow is a boutique legal search firm partnering with
                leading international and regional law firms, as well as
                in-house legal teams.
              </p>

              <p className="paraStyle !max-w-full">
                We focus on long-term relationships rather than transactions,
                introducing exceptional lawyers to firms where they can build
                meaningful and successful careers.
              </p>

              <p className="paraStyle !max-w-full">
                With experience across the UK & Middle East, we understand the
                importance of cultural fit, commercial awareness and long-term
                progression.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about-us"
                className="group inline-flex items-center bg-gradient-to-r tracking-wide from-darkGolden to-lightGolden gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all"
              >
                Our Approach
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex border border-white items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all"
              >
                Speak With Us
              </Link>
            </div>
          </div>
        </div>
      </CompactContainer>
    </section>
  );
};

export default HomeAboutSection;
