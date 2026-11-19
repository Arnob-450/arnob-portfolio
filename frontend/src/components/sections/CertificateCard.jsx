"use client";

/**
 * CertificateCard.jsx
 * Fully responsive certificate card designed mobile-first:
 * - Clean top header strip for credential type badge and issue date (never covers preview text)
 * - Preview container uses object-contain so certificates are never cropped or distorted
 * - Readable typography and metadata
 * - Large, touch-friendly View (↗) and Download (↓) action buttons (>=44px touch target)
 */

import { useState } from "react";
import Image from "next/image";

export default function CertificateCard({ cert }) {
  const [imageError, setImageError] = useState(false);
  const previewSrc = cert.previewImage || cert.image;
  const hasImage = previewSrc && !imageError;
  const fileName = cert.pdf?.split("/").pop() || "certificate.pdf";

  return (
    <div className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/10 bg-[#141725] hover:border-violet-500/40 hover:bg-[#181C2E] hover:shadow-2xl hover:shadow-violet-600/10 transition-all duration-300 overflow-hidden w-full">
      <div>
        {/* Top Metadata Header Strip - Keeps Preview Clean & Unobstructed */}
        <div className="flex items-center justify-between gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#0D101E] border-b border-white/5">
          {cert.credentialType ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span>{cert.credentialType}</span>
            </span>
          ) : (
            <span className="text-[10px] font-medium text-slate-400">Verified Certificate</span>
          )}

          {cert.issueDate && (
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
              {cert.issueDate}
            </span>
          )}
        </div>

        {/* Certificate Document Preview Area (object-contain preserves original proportions) */}
        <div className="relative aspect-[4/3] xs:aspect-[16/10] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/10] w-full bg-[#0A0D18] flex items-center justify-center p-2 sm:p-3 overflow-hidden border-b border-white/5">
          {hasImage ? (
            <div className="relative w-full h-full">
              <Image
                src={previewSrc}
                alt={`${cert.title} official certificate document`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.02]"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#141725] to-[#0A0D18]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 mb-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-400">PDF Document</span>
            </div>
          )}
        </div>

        {/* Card Text Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-300 transition-colors leading-snug">
            {cert.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm font-semibold text-cyan-400">
            {cert.organization}
          </p>

          {cert.credentialId && (
            <p className="mt-1 text-[11px] text-slate-500 font-mono break-all">
              ID: {cert.credentialId}
            </p>
          )}

          {cert.description && (
            <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
              {cert.description}
            </p>
          )}
        </div>
      </div>

      {/* Dual Touch-Friendly Action Buttons */}
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-3 border-t border-white/5 mt-2">
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.title} certificate PDF in new tab`}
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-md shadow-violet-600/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
        >
          <span>View Certificate</span>
          <span className="text-[11px]">↗</span>
        </a>

        <a
          href={cert.pdf}
          download={fileName}
          aria-label={`Download ${cert.title} certificate PDF`}
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          <span className="text-[11px]">↓</span>
          <span>Download PDF</span>
        </a>
      </div>
    </div>
  );
}
