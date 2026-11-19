"use client";

/**
 * CertificationsSection.jsx
 * Fully responsive certifications showcase:
 * - Mobile: 1 full-width card per row
 * - Tablet: 2 spacious cards per row (sm:grid-cols-2)
 * - Desktop: 3 cards per row (lg:grid-cols-3)
 * - Fluid heading and clean section spacing
 */

import certifications from "@/data/certifications";
import CertificateCard from "./CertificateCard";

export default function CertificationsSection() {
  const hasCertificates = Array.isArray(certifications) && certifications.length > 0;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 mb-3">
          <span>🏆</span>
          <span>Certifications &amp; Achievements</span>
        </span>
        <h2 className="fluid-section-heading font-extrabold text-white tracking-tight">
          Verified Credentials &amp; Recognitions
        </h2>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0">
          Official academic achievements, seminar recognitions, and technical certifications.
        </p>
      </div>

      {/* Responsive Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      {hasCertificates ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full">
          {certifications.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#141725] p-8 sm:p-12 text-center max-w-xl mx-auto">
          <p className="text-sm text-slate-400">
            Verified academic credentials and technical certificates are being curated.
          </p>
        </div>
      )}
    </div>
  );
}
