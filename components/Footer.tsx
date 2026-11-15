"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  UsersRound,
  Camera,
} from "lucide-react";
import { CompactContainer } from "./ui/compact-container";
import { Logo } from "./Logo";

const socialLinks = [
  {
    icon: Camera,
    href: "YOUR_INSTAGRAM_URL",
    label: "Instagram",
  },
  {
    icon: UsersRound,
    href: "YOUR_FACEBOOK_URL",
    label: "Facebook",
  },
];
const contact = {
  phone: "+44 020 8343 8850",
  phoneLink: "+442083438850",
  email: "Gizmotronics247@gmail.com",
  whatsapp: "447909270786",
};

const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hi Gizmo-Tronics, I'd like to make an enquiry.",
)}`;

const links = [
  {
    heading: "QUICK LINKS",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "OUR SERVICES",
    items: [
      { label: "Screen Repairs", href: "/services" },
      { label: "Battery Replacement", href: "/services" },
      { label: "Device Diagnostics", href: "/services" },
      { label: "Charging Port Repairs", href: "/services" },
      { label: "Phone Accessories", href: "/services" },
    ],
  },
  {
    heading: "WE CAN HELP",
    items: [
      { label: "iPhone Repairs", href: "/services" },
      { label: "Samsung Repairs", href: "/services" },
      { label: "Laptop Repairs", href: "/services" },
      { label: "Get in Touch", href: "/contact" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/jobs/")) {
    return null;
  }

  return (
    <footer
      className="
        relative isolate w-full
        overflow-hidden
        rounded-t-[2.5rem]
        md:rounded-t-[3.5rem]
        lg:rounded-t-[4rem]
        bg-[#141414] text-white
      "
    >
      {/* Rounded Golden Top Border */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-[3px]
          bg-gradient-to-r
          from-darkGolden via-lightGolden to-darkGolden
        "
      />

      {/* Decorative Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <CompactContainer
        className="
          relative z-10
          pt-16 pb-16
          md:pt-20 md:pb-16
          lg:pt-24 lg:pb-20
        "
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand Information */}
          <div className="space-y-6 md:col-span-2">
            <Logo />

            <p className="max-w-sm text-[15px] font-light leading-7 text-white/75">
              Your trusted destination for professional mobile phone repairs,
              device diagnostics, accessories, and reliable technical support.
              Bringing your devices back to life with expert care.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    group flex h-11 w-11 items-center justify-center
                    rounded-full border border-white/20 bg-white/5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-lightGolden hover:bg-lightGolden
                  "
                >
                  <social.icon
                    className="
                      h-4 w-4 text-white
                      transition-colors duration-300
                      group-hover:text-black
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {links.map((group) => (
            <div key={group.heading} className="space-y-6">
              <h3 className="text-sm font-semibold tracking-[0.12em] text-lightGolden">
                {group.heading}
              </h3>

              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="
                        group inline-flex items-center gap-2
                        text-sm font-light tracking-wide
                        text-white/75
                        transition-colors duration-300
                        hover:text-lightGolden
                      "
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={13}
                        className="
                          shrink-0 translate-y-1 opacity-0
                          transition-all duration-300
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div
          className="
            mt-14 grid grid-cols-1 gap-6
            border-t border-white/15 pt-9
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <Link
            href="https://www.google.com/maps/search/?api=1&query=Gizmotronics%2C%20326%20Ballards%20Ln%2C%20London%20N12%200EY"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-lightGolden"
          >
            <MapPin size={19} className="shrink-0 text-lightGolden" />
            <span>Visit Our Store</span>
          </Link>

          <Link
            href={whatsappUrl}
            className="group flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-lightGolden"
          >
            <Phone size={19} className="shrink-0 text-lightGolden" />
            <span>Contact Our Team</span>
          </Link>

          <Link href={whatsappUrl}>
            <Mail size={19} className="shrink-0 text-lightGolden" />
            <span>Send an Enquiry</span>
          </Link>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            mt-12 flex flex-col items-center
            justify-center gap-5
            border-t border-white/15 pt-8
            lg:flex-row
          "
        >
          <p className="text-center text-xs font-light leading-6 tracking-wide text-white/70">
            © 2026 Gizmo-Tronics. All rights reserved.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href="/privacy-policy"
              className="text-xs font-medium text-white/70 transition-colors hover:text-lightGolden"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-xs font-medium text-white/70 transition-colors hover:text-lightGolden"
            >
              Terms & Conditions
            </Link>
          </div> */}
        </div>
      </CompactContainer>
    </footer>
  );
}
