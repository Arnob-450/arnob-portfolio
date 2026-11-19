"use client";

/**
 * CertificateCard.jsx
 * Professional certificate card with spacious layout:
 * - Natural 16:10 preview thumbnail with hover zoom.
 * - Credential badge and issue date.
 * - Title and issuing organization in cyan.
 * - Dual action buttons: "View ↗" and "↓ Download".
 */

import { useState } from "react";
import Image from "next/image";

export default function CertificateCard({ cert }) {
  const [imageError, setImageError] = useState(false);
  const previewSrc = cert.previewImage || cert.image;
  const hasImage = previewSrc && !imageError;
  const fileName = cert.pdf?.split("/").pop() || "certificate.pdf";

  return (
    <div className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#141725] hover:border-violet-500/40 hover:bg-[#181C2E] hover:shadow-2xl hover:shadow-violet-600/10 transition-all duration-300 overflow-hidden">
      <div>
        {/* Certificate Preview Thumbnail Banner */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D18] border-b border-white/5">
          {hasImage ? (
            <Image
              src={previewSrc}
              alt={`${cert.title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#141725] to-[#0A0D18]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 mb-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-400">PDF Certificate</span>
            </div>
          )}

          {/* Credential Type Badge Overlay */}
          {cert.credentialType && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-[#08090D]/90 px-3 py-1 text-[11px] font-semibold text-violet-300 backdrop-blur-md shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{cert.credentialType}</span>
              </span>
            </div>
          )}

          {/* Issue Date Badge */}
          <div className="absolute top-3 right-3">
            <span className="rounded-md border border-white/10 bg-[#08090D]/90 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md">
              {cert.issueDate}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-300 transition-colors leading-snug line-clamp-2">
            {cert.title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm font-semibold text-cyan-400">
            {cert.organization}
          </p>

          {cert.credentialId && (
            <p className="mt-1 text-[11px] text-slate-500 font-mono">
              {cert.credentialId}
            </p>
          )}

          {cert.description && (
            <p className="mt-2 text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed">
              {cert.description}
            </p>
          )}
        </div>
      </div>

      {/* Dual Action Buttons: "View ↗" & "↓ Download" */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 flex items-center gap-3 border-t border-white/5 mt-2">
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.title} certificate PDF in new tab`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 text-xs font-semibold shadow-md shadow-violet-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span>View</span>
          <span className="text-[11px]">↗</span>
        </a>

        <a
          href={cert.pdf}
          download={fileName}
          aria-label={`Download ${cert.title} certificate PDF`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white px-4 py-2 text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <span className="text-[11px]">↓</span>
          <span>Download</span>
        </a>
      </div>
    </div>
  );
}
