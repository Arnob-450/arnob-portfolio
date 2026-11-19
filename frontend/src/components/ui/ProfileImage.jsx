"use client";

/**
 * ProfileImage.jsx
 * Professional, fully responsive profile portrait:
 * - Displays the verified photograph (/images/profile/arnob.jpg) in a balanced circular frame
 * - Sized approximately 150-180px on standard mobile screens (w-40 h-40 to xs:w-44 xs:h-44)
 * - Retains full desktop proportions (lg:w-80 lg:h-80 xl:w-92 xl:h-92)
 * - Subtle violet gradient ring with soft ambient glow behind the portrait
 * - Centered horizontally with aspect-ratio: 1/1 and object-fit: cover
 * - Live status badge with emerald pulse indicator
 */

import { useState } from "react";
import Image from "next/image";
import personal from "@/data/personal";
import { cn } from "@/lib/utils";

export default function ProfileImage({ className, isMobile = false, priority = true }) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = personal.profileImage?.path || "/images/profile/arnob.jpg";
  const imageAlt = personal.profileImage?.alt || `${personal.name} profile photo`;

  return (
    <div className={cn("relative flex items-center justify-center select-none", className)}>
      {/* Ambient background glow behind portrait */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute rounded-full bg-gradient-to-tr from-violet-600/35 via-purple-600/20 to-cyan-400/25 animate-pulse-glow",
          isMobile
            ? "-inset-2 blur-lg opacity-85"
            : "-inset-2 sm:-inset-4 blur-xl sm:blur-2xl opacity-90"
        )}
      />

      {/* Outer gradient border ring */}
      <div
        className={cn(
          "relative rounded-full p-1 bg-gradient-to-b from-violet-500/60 via-purple-500/30 to-cyan-400/50 shadow-2xl shadow-violet-950/50 aspect-square",
          isMobile
            ? "h-40 w-40 xs:h-44 xs:w-44"
            : "h-60 w-60 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-92 xl:w-92"
        )}
      >
        {/* Inner image container with circular crop and subtle violet border */}
        <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-violet-500/40 bg-[#08090D] aspect-square">
          {!hasError ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes={
                isMobile
                  ? "(max-width: 480px) 176px, 180px"
                  : "(max-width: 1024px) 288px, 368px"
              }
              priority={priority}
              className="object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-900 p-4 text-center text-zinc-400">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                TA
              </div>
              <p className="text-xs font-medium text-zinc-200">{personal.name}</p>
            </div>
          )}
        </div>

        {/* Status Pill Badge */}
        <div
          className={cn(
            "absolute flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0E101D]/95 text-zinc-200 shadow-xl backdrop-blur-md whitespace-nowrap",
            isMobile
              ? "-bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 text-[9px]"
              : "-bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-2 px-3 py-1 text-[10px] sm:text-xs"
          )}
        >
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Software Engineering</span>
        </div>
      </div>
    </div>
  );
}
