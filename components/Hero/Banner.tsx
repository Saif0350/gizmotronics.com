import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section
      id="home-section"
      className="relative z-0 w-full h-[100svh] md:h-[70vh] lg:h-[100svh] overflow-hidden parallax-section"
    >
      <div className="relative h-full w-full">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/video/video1.webm" type="video/webm" />
          <source src="/assets/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Banner Content */}
        <div className="absolute inset-0 templateContainer flex items-end pb-10 lg:pb-16">
          <div className="relative z-10 space-y-4 text-white">
            <span className="block tracking-wider text-xs lg:text-sm uppercase font-medium">
              Expert Mobile & Device Repair Services
            </span>

            <h1 className="text-[2.2rem] font-medium md:text-[2.2rem] lg:text-[2.8rem] tracking-wide leading-tight uppercase">
              Bringing Your Devices <br />
              Back to Life
            </h1>

            <Link
              href="#services-section"
              className="inline-block hover:opacity-90 bg-gradient-to-r tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black transition-opacity"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
