"use client";

/**
 * DownloadCVButton.jsx
 * Reusable button for downloading the verified CV.
 * Links to /resume/Arnob-CV.pdf in the public directory.
 */

import { useState } from "react";
import personal from "@/data/personal";
import { cn } from "@/lib/utils";

export default function DownloadCVButton({
  variant = "secondary",
  size = "md",
  className,
}) {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const variants = {
    primary:
      "bg-violet-500 text-white hover:bg-violet-600 focus-visible:ring-violet-500 shadow-md shadow-violet-500/20",
    secondary:
      "border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 focus-visible:ring-cyan-400",
    ghost:
      "text-zinc-400 hover:text-white hover:bg-zinc-800 focus-visible:ring-zinc-400",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const cvPath = personal.resume?.path || "/resume/Arnob-CV.pdf";
  const fileName = personal.resume?.fileName || "Arnob-CV.pdf";

  const handleClick = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      <a
        href={cvPath}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Download CV of Tawhid Khan Arnob (PDF)"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
          variants[variant],
          sizes[size],
          className
        )}
      >
        {/* Download SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>Download CV</span>
      </a>

      {downloadNotice && (
        <span
          role="status"
          aria-live="polite"
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-cyan-400 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md shadow-lg animate-fade-in"
        >
          Downloading Arnob-CV.pdf...
        </span>
      )}
    </div>
  );
}
