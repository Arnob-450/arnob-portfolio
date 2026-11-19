"use client";

/**
 * ExperienceSection.jsx
 * Fully responsive Experience & Practice section:
 * - Full-width stacked cards on mobile and desktop
 * - Left accent border with timeline badge
 * - Readable accomplishment bullet points
 */

import experienceList from "@/data/experience";

export default function ExperienceSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 mb-3">
          💼 Practice &amp; Experience
        </span>
        <h2 className="fluid-section-heading font-extrabold text-white tracking-tight">
          Experience &amp; Project Practice
        </h2>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0">
          Verified academic coursework, self-directed engineering, and collaborative team practice.
        </p>
      </div>

      {/* Full-width Stacked Cards */}
      <div className="space-y-4 sm:space-y-6 w-full">
        {experienceList.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border border-white/10 border-l-4 border-l-cyan-400 bg-[#141725]/85 p-5 sm:p-7 backdrop-blur-xl shadow-xl hover:border-cyan-400/40 hover:bg-[#181C2E]/90 transition-all duration-300 overflow-hidden w-full"
          >
            {/* Header: Category Type & Timeline Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5 sm:mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {item.type}
              </span>

              <span className="inline-flex items-center rounded-full border border-white/10 bg-[#10121B] px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium text-slate-300">
                {item.timeline}
              </span>
            </div>

            {/* Role Title & Organization */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
              {item.role}
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-violet-300 mt-1">
              {item.organization}
            </p>

            {/* Description */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
              {item.description}
            </p>

            {/* Key Accomplishments Points */}
            {item.points && item.points.length > 0 && (
              <ul className="mt-4 space-y-2 pt-3.5 border-t border-white/5">
                {item.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
