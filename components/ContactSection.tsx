"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contact = {
  phone: "+44 7700 900123",
  phoneLink: "+447700900123",
  email: "hello@gizmotronics.co.uk",
  whatsapp: "447700900123",
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        y: 25,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hi Gizmo-Tronics, I'd like to make an enquiry.",
  )}`;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-20 text-white md:py-28"
    >
      <div className="templateContainer relative">
        {/* Top Decorative Line */}
        <div className="contact-animate mb-12 flex items-center gap-4">
          <span className="h-[6px] w-[6px] rounded-full bg-lightGolden" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-lightGolden">
            Contact Gizmo-Tronics
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-lightGolden/40 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            01 / Connect
          </span>
        </div>

        {/* Heading */}
        <div className="contact-animate mb-12">
          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Have something{" "}
            <span className="font-light italic text-lightGolden">in mind?</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
            Repairs, accessories or selling your phone? Just reach out — we're
            here to help.
          </p>
        </div>

        {/* Contact Links */}
        <div className="contact-animate border-t border-white/15">
          {/* Phone Row */}
          <a
            href={`tel:${contact.phoneLink}`}
            className="group flex items-center justify-between gap-5 border-b border-white/15 py-7 transition-colors hover:border-lightGolden/50"
          >
            <div className="flex min-w-0 items-center gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-lightGolden transition-all duration-300 group-hover:border-lightGolden group-hover:bg-lightGolden group-hover:text-black">
                <Phone size={18} strokeWidth={1.5} />
              </span>

              <div className="min-w-0">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Call Us
                </p>

                <p className="text-base font-medium tracking-wide text-white transition-colors group-hover:text-lightGolden sm:text-xl">
                  {contact.phone}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lightGolden"
            />
          </a>

          {/* Email Row */}
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center justify-between gap-5 border-b border-white/15 py-7 transition-colors hover:border-lightGolden/50"
          >
            <div className="flex min-w-0 items-center gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-lightGolden transition-all duration-300 group-hover:border-lightGolden group-hover:bg-lightGolden group-hover:text-black">
                <Mail size={18} strokeWidth={1.5} />
              </span>

              <div className="min-w-0">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Email Us
                </p>

                <p className="break-all text-sm font-medium tracking-wide text-white transition-colors group-hover:text-lightGolden sm:text-xl">
                  {contact.email}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lightGolden"
            />
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div className="contact-animate mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {/* Animated Circular Accent */}
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-lightGolden/50 motion-reduce:animate-none" />
              <MessageCircle
                size={20}
                strokeWidth={1.6}
                className="text-lightGolden"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Prefer a quick message?
              </p>
              <p className="mt-1 text-xs text-white/40">
                Connect with us directly on WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-4 rounded-full border border-lightGolden/60 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-lightGolden transition-all duration-300 hover:bg-lightGolden hover:text-black sm:w-auto"
          >
            Chat on WhatsApp
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
