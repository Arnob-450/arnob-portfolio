"use client";

/**
 * CertificateCard.jsx
 * Individual certificate card component with PDF preview, metadata,
 * credential ID display, and dual action buttons (View & Download).
 */

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function CertificateCard({ cert }) {
  const [imageError, setImageError] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const hasImage = cert.image && !imageError;
  const fileName = cert.pdf.split("/").pop() || "certificate.pdf";

  const handleDownloadClick = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <Card className="group flex flex-col justify-between overflow-hidden p-0 border-zinc-800 bg-zinc-900/90 hover:border-zinc-700 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300">
      <div>
        {/* Certificate Preview Thumbnail Banner */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
          {hasImage ? (
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={cert.image}
                alt={`${cert.title} certificate preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              {/* Subtle hover gradient overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ) : (
            /* Clean Document-Style Placeholder */
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-zinc-900 to-zinc-950">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Official Certificate Document
              </span>
              <span className="text-[11px] text-zinc-500 mt-1">PDF Available</span>
            </div>
          )}

          {/* Credential Type Badge Overlay */}
          {cert.credentialType && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-zinc-950/85 px-3 py-1 text-xs font-semibold text-violet-300 backdrop-blur-md shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span>{cert.credentialType}</span>
              </span>
            </div>
          )}

          {/* Issue Date Badge */}
          <div className="absolute top-3 right-3">
            <span className="rounded-md border border-zinc-700/80 bg-zinc-900/90 px-2.5 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
              {cert.issueDate}
            </span>
          </div>
        </div>

        {/* Certificate Card Body */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-violet-300 transition-colors leading-snug">
            {cert.title}
          </h3>

          {/* Issuing Organization */}
          <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-400">
            <svg
              className="h-4 w-4 shrink-0 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>{cert.organization}</span>
          </div>

          {/* Description */}
          {cert.description && (
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {cert.description}
            </p>
          )}

          {/* Credential ID if available */}
          {cert.credentialId && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
              <span className="text-zinc-400 font-semibold">ID:</span>
              <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-zinc-300 border border-zinc-700/60">
                {cert.credentialId}
              </span>
            </div>
          )}

          {/* Associated Skills / Topic Badges */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <Badge key={skill} color="zinc" className="text-[11px] py-0.5 px-2">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons: View Certificate & Download Certificate */}
      <div className="relative px-6 pb-6 pt-3 flex flex-wrap items-center gap-3 border-t border-zinc-800/70 mt-2">
        {/* View Certificate (opens PDF in new tab) */}
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${cert.title} certificate PDF in new tab`}
          className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-200"
        >
          {/* Eye / View Icon */}
          <svg
            className="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>View Certificate</span>
          <span className="text-zinc-500 font-mono text-[10px]">↗</span>
        </a>

        {/* Download Certificate */}
        <a
          href={cert.pdf}
          download={fileName}
          onClick={handleDownloadClick}
          aria-label={`Download ${cert.title} certificate PDF`}
          className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-lg border border-violet-500/40 bg-violet-600/20 px-3.5 py-2.5 text-xs font-semibold text-violet-200 hover:bg-violet-600/30 hover:border-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 transition-all duration-200"
        >
          {/* Download Icon */}
          <svg
            className="h-4 w-4 shrink-0"
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
          <span>Download PDF</span>
        </a>

        {/* Temporary download feedback pill */}
        {downloadNotice && (
          <span
            role="status"
            aria-live="polite"
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-cyan-400 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md shadow-lg animate-fade-in z-20"
          >
            Downloading {fileName}...
          </span>
        )}
      </div>
    </Card>
  );
}
