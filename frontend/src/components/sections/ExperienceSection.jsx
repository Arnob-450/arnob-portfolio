"use client";

/**
 * ExperienceSection.jsx
 * Independent Full-Width Section for Experience & Practice:
 * - Compact, balanced card layout with subtle left-side accent border.
 * - Consistent header pairing category type and timeline.
 * - Prominent title, organization in violet, clear description, and key practice achievements.
 */

import experienceList from "@/data/experience";

export default function ExperienceSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-10 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300 mb-3">
          💼 Practice &amp; Experience
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Experience &amp; Project Practice
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
          Verified academic coursework, self-directed engineering, and collaborative team practice.
        </p>
      </div>

      {/* Compact, Well-Proportioned Experience Cards */}
      <div className="space-y-6">
        {experienceList.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border border-white/10 border-l-4 border-l-cyan-400 bg-[#141725]/85 p-6 sm:p-7 backdrop-blur-xl shadow-xl hover:border-cyan-400/40 hover:bg-[#181C2E]/90 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Header: Category Type & Timeline Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {item.type}
              </span>

              <span className="inline-flex items-center rounded-full border border-white/10 bg-[#10121B] px-3 py-1 text-xs font-medium text-slate-300">
                {item.timeline}
              </span>
            </div>

            {/* Role Title & Organization */}
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
              {item.role}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-violet-300 mt-1">
              {item.organization}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              {item.description}
            </p>

            {/* Key Accomplishments Points */}
            {item.points && item.points.length > 0 && (
              <ul className="mt-4 space-y-2 pt-4 border-t border-white/5">
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
