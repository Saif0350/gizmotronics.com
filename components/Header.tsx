"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "#home-section" },
  { label: "About Us", href: "#about-section" },
  { label: "Services", href: "#services-section" },
  { label: "We Buy Phones", href: "#we-buy-phones" },
  { label: "Contact Us", href: "#contact-us-section" },
];

const Header = () => {
  const pathname = usePathname();

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(
        currentScrollY <= 100 || currentScrollY <= lastScrollY.current,
      );

      setHasScrolled(currentScrollY > 200);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    setMounted(true);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const media = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (media.matches) setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    media.addEventListener("change", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      media.removeEventListener("change", handleResize);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 z-[60] w-full
          border-0 py-4
          ${
            mounted
              ? "transition-[transform,background-color] duration-300 ease-in-out"
              : ""
          }
          ${isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full"}
          ${hasScrolled || isMenuOpen ? "bg-black" : "bg-transparent"}
        `}
      >
        <div className="templateContainer flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-16">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-[0.8rem] font-semibold uppercase
                    tracking-widest transition-colors duration-300
                    ${
                      isActive
                        ? "text-lightGolden"
                        : "text-white hover:text-lightGolden"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-slide-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative z-[70] md:hidden flex h-10 w-10 items-center justify-center text-white"
          >
            <span className="relative flex items-center justify-center">
              <Menu
                size={28}
                strokeWidth={1.7}
                className={`
                  absolute transition-all duration-300
                  ${
                    isMenuOpen
                      ? "rotate-90 scale-50 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }
                `}
              />

              <X
                size={28}
                strokeWidth={1.7}
                className={`
                  transition-all duration-300
                  ${
                    isMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-50 opacity-0"
                  }
                `}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-[50] bg-black/70
          backdrop-blur-sm md:hidden
          transition-opacity duration-500
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Sliding Mobile Navigation */}
      <aside
        id="mobile-slide-menu"
        aria-label="Mobile menu"
        inert={!isMenuOpen}
        className={`
          fixed top-0 left-0 z-[55]
          h-[100dvh] w-[85%] max-w-[400px]
          bg-[#101010] md:hidden
          shadow-2xl
          flex flex-col
          transition-transform duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Menu Header */}
        <div className="px-7 pt-28 pb-8">
          <span className="text-lightGolden text-xs font-medium tracking-[0.3em] uppercase">
            Navigation
          </span>

          <div className="mt-4 h-px w-full bg-white/15" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-7">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <div
                key={item.href}
                className={`
                  border-b border-white/10
                  transition-all duration-500
                  ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: isMenuOpen ? `${150 + index * 90}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between py-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/40">0{index + 1}</span>

                    <span
                      className={`
                        text-xl font-medium tracking-wide
                        transition-colors duration-300
                        ${
                          isActive
                            ? "text-lightGolden"
                            : "text-white group-hover:text-lightGolden"
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className={`
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      ${isActive ? "text-lightGolden" : "text-white/50"}
                    `}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Bottom Branding */}
        <div className="mt-auto px-7 pb-10">
          <div className="h-px w-full bg-white/15 mb-6" />

          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Gizmo-Tronics
          </p>

          <p className="mt-2 text-sm text-white/60">
            Expert Mobile & Device Repair Services
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;
