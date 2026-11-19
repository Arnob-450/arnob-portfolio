/**
 * CertificationsSection.jsx
 * Professional Certifications & Achievements section.
 * Renders verified credentials, Olympiad participations, and seminar awards.
 */

import certifications from "@/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificateCard from "./CertificateCard";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-label="Certifications & Achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Certifications & Achievements"
          subtitle="Verified technical credentials, academic competitions, and professional development recognitions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
