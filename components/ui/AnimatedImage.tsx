"use client";

import Image, { type ImageProps } from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedImageProps = ImageProps & {
  direction?: "left" | "right";
  containerClassName?: string;
  overlayClassName?: string;
};

const AnimatedImage = ({
  direction = "left",
  containerClassName,
  overlayClassName,
  className,
  ...imageProps
}: AnimatedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.3,
  });

  // Determine direction values
  const animateX = direction === "left" ? "-100%" : "100%";

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden ${
        containerClassName ?? ""
      }`}
    >
      <Image {...imageProps} className={`${className ?? ""}`} />

      {/* Overlay Reveal */}
      <motion.div
        initial={{ x: 0 }}
        animate={isInView ? { x: animateX } : { x: 0 }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={`absolute top-0 left-0 h-full w-full bg-[#fff7eb] ${
          overlayClassName ?? ""
        }`}
      />
    </div>
  );
};

export default AnimatedImage;
