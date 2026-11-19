"use client";

/**
 * CertificationsSection.jsx
 * Independent Full-Width Section:
 * - Header: "Certifications & Achievements" badge, title, and descriptive subtitle.
 * - Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop with comfortable proportions.
 */

import certifications from "@/data/certifications";
import CertificateCard from "./CertificateCard";

export default function CertificationsSection() {
  const hasCertificates = Array.isArray(certifications) && certifications.length > 0;

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300 mb-3">
          <span>🏆</span>
          <span>Certifications &amp; Achievements</span>
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Verified Credentials &amp; Recognitions
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
          Official academic achievements, seminar recognitions, and technical certifications.
        </p>
      </div>

      {/* Responsive Cards Grid */}
      {hasCertificates ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-[#141725] p-12 text-center max-w-xl mx-auto">
          <p className="text-sm text-slate-400">
            Verified academic credentials and technical certificates are being curated.
          </p>
        </div>
      )}
    </div>
  );
}
