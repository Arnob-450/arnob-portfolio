"use client";

/**
 * EducationSection.jsx
 * Independent Full-Width Section for Academic Foundation:
 * - Compact, balanced card layout with subtle left-side accent border.
 * - Consistent header with category and status badge.
 * - Prominent title, organization in cyan, readable description, and coursework tags.
 */

import educationList from "@/data/education";

export default function EducationSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-10 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300 mb-3">
          🎓 Academic Background
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
          Formal academic foundation in software engineering, algorithms, data structures, and system design principles.
        </p>
      </div>

      {/* Compact, Well-Proportioned Education Cards */}
      <div className="space-y-6">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="group relative rounded-2xl border border-white/10 border-l-4 border-l-violet-500 bg-[#141725]/85 p-6 sm:p-7 backdrop-blur-xl shadow-xl hover:border-violet-500/40 hover:bg-[#181C2E]/90 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Header: Category Label & Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Degree Program
              </span>

              <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 shadow-sm">
                {edu.status}
              </span>
            </div>

            {/* Title & Institution */}
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-200 transition-colors">
              {edu.degree}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
              {edu.institution}
            </p>

            {/* Readable Description */}
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              {edu.description}
            </p>

            {/* Coursework Tags */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="mt-5 pt-4 border-t border-white/5">
                <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                  Academic Highlights &amp; Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-lg border border-white/5 bg-[#10121B] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
