"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  data: {
    image?: string;
    name?: string;
    slug?: string;
  };
}

export default function ServiceCard({ data }: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);

  const imageSrc = data.image?.trim();
  const hasImage = Boolean(imageSrc) && !imageError;

  const content = (
    <>
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-white">
        {hasImage ? (
          <>
            <Image
              src={imageSrc!}
              alt={data.name || "Mobile repair service"}
              fill
              sizes="(max-width: 640px) 260px, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </>
        ) : (
          <div className="h-full w-full animate-pulse bg-white" />
        )}
      </div>

      <h3 className="min-h-6 text-[0.95rem] font-medium uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-lightGolden">
        {data.name || "Service"}
      </h3>
    </>
  );

  const className =
    "group relative block w-[260px] shrink-0 space-y-3 sm:w-[300px]";

  if (!data.slug) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={`/services/${data.slug}`} className={className}>
      {content}
    </Link>
  );
}
