"use client";

/**
 * ProfileImage.jsx
 * Profile picture component using Next.js Image with graceful fallback.
 * Loads /images/profile/arnob.jpg with responsive sizing and subtle glowing border.
 */

import { useState } from "react";
import Image from "next/image";
import personal from "@/data/personal";
import { cn } from "@/lib/utils";

export default function ProfileImage({ className }) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = personal.profileImage?.path || "/images/profile/arnob.jpg";
  const imageAlt = personal.profileImage?.alt || `${personal.name} profile photo`;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Subtle outer violet & cyan atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-600/30 via-violet-500/20 to-cyan-400/20 blur-xl opacity-75 animate-pulse"
      />

      {/* Outer border container */}
      <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full p-1.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl">
        {/* Inner container */}
        <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-violet-500/40 bg-zinc-900">
          {!hasError ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              priority
              className="object-cover object-[center_65%] transition-transform duration-500 hover:scale-105"
              onError={() => setHasError(true)}
            />
          ) : (
            /* Fallback avatar when image fails or is missing */
            <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-900 p-6 text-center text-zinc-400">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-2xl font-bold mb-3">
                TA
              </div>
              <p className="text-sm font-medium text-zinc-200">{personal.name}</p>
              <p className="text-xs text-zinc-500 mt-1">Photo placeholder</p>
            </div>
          )}
        </div>

        {/* Small floating status pill */}
        <div className="absolute bottom-3 right-6 flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/95 px-3 py-1 text-xs text-zinc-300 shadow-lg backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Software Engineering</span>
        </div>
      </div>
    </div>
  );
}
