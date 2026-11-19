"use client";

/**
 * SkillsSection.jsx
 * Full-width animated technology showcase with zero page overflow:
 * - Dual-row infinite scrolling ticker with recognizable icons
 * - Edge fade masks to create an endless loop aesthetic
 * - Sized proportionally for mobile touch screens
 * - Pauses on hover/touch, respects reduced motion
 */

const row1Skills = [
  {
    name: "JavaScript",
    tag: "Language",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-yellow-400 text-black font-extrabold text-[11px] sm:text-xs font-mono shadow-md">
        JS
      </div>
    ),
  },
  {
    name: "TypeScript",
    tag: "Language",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-blue-600 text-white font-extrabold text-[11px] sm:text-xs font-mono shadow-md">
        TS
      </div>
    ),
  },
  {
    name: "React",
    tag: "Frontend",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shadow-md">
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5 animate-spin"
          style={{ animationDuration: "14s" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>
    ),
  },
  {
    name: "Next.js",
    tag: "Framework",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-black border border-white/20 text-white font-bold text-xs sm:text-sm shadow-md">
        <span className="font-mono">N</span>
      </div>
    ),
  },
  {
    name: "Node.js",
    tag: "Backend",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold text-[10px] sm:text-xs shadow-md">
        <span className="font-mono">JS</span>
      </div>
    ),
  },
  {
    name: "Express.js",
    tag: "Backend",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 font-bold text-[10px] sm:text-xs shadow-md">
        <span className="font-mono">ex</span>
      </div>
    ),
  },
];

const row2Skills = [
  {
    name: "MongoDB",
    tag: "Database",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 shadow-md">
        <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C11.5 5 8 9 8 13.5C8 17.5 10 20.5 12 22C14 20.5 16 17.5 16 13.5C16 9 12.5 5 12 2Z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    tag: "Styling",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shadow-md">
        <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 6C9 6 7.5 7.5 7.5 10.5C8.5 9 9.5 8.5 10.5 9C11.64 9.57 12.46 10.82 13.38 12.22C14.88 14.51 16.64 17.2 21 17.2C24 17.2 25.5 15.7 25.5 12.7C24.5 14.2 23.5 14.7 22.5 14.2C21.36 13.63 20.54 12.38 19.62 10.98C18.12 8.69 16.36 6 12 6ZM3 15C0 15 -1.5 16.5 -1.5 19.5C-0.5 18 0.5 17.5 1.5 18C2.64 18.57 3.46 19.82 4.38 21.22C5.88 23.51 7.64 26.2 12 26.2C15 26.2 16.5 24.7 16.5 21.7C15.5 23.2 14.5 23.7 13.5 23.2C12.36 22.63 11.54 21.38 10.62 19.98C9.12 17.69 7.36 15 3 15Z"
            transform="scale(0.7) translate(0, -2)"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Git & GitHub",
    tag: "Version Control",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400 shadow-md">
        <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.6 10.59L10.59 2.6a1.99 1.99 0 0 1 2.82 0l8 8a1.99 1.99 0 0 1 0 2.82l-8 8a1.99 1.99 0 0 1-2.82 0l-7.99-8a1.99 1.99 0 0 1 0-2.83zm13.12 1.41a1.5 1.5 0 0 0-1.07-.44c-.45 0-.85.2-1.12.52l-2.06-2.06c.22-.3.35-.67.35-1.07 0-.97-.78-1.75-1.75-1.75S8.32 8.03 8.32 9c0 .76.48 1.4 1.16 1.64v3.72a1.76 1.76 0 0 0-1.16 1.64c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.4-.13-.77-.35-1.07l2.06-2.06c.27.32.67.52 1.12.52.97 0 1.75-.78 1.75-1.75a1.73 1.73 0 0 0-.68-1.44z" />
        </svg>
      </div>
    ),
  },
  {
    name: "RESTful APIs",
    tag: "Architecture",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-violet-950/80 border border-violet-500/40 text-violet-300 font-bold text-[10px] sm:text-xs shadow-md">
        API
      </div>
    ),
  },
  {
    name: "HTML5",
    tag: "Frontend",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-orange-950/80 border border-orange-500/40 text-orange-400 font-bold text-[10px] sm:text-xs shadow-md">
        &lt;/&gt;
      </div>
    ),
  },
  {
    name: "CSS3",
    tag: "Styling",
    icon: (
      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-blue-950/80 border border-blue-500/40 text-blue-400 font-bold text-[10px] sm:text-xs shadow-md">
        #
      </div>
    ),
  },
];

export default function SkillsSection() {
  const track1 = [...row1Skills, ...row1Skills, ...row1Skills];
  const track2 = [...row2Skills, ...row2Skills, ...row2Skills];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 mb-3">
          TECH STACK
        </span>
        <h2 className="fluid-section-heading font-extrabold text-white tracking-tight">
          Technologies I Work With
        </h2>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0">
          Core programming languages, frameworks, libraries, and database management systems powering my web applications.
        </p>
      </div>

      {/* Ticker Container with Soft Edge Masks */}
      <div className="ticker-container relative w-full overflow-hidden py-2 sm:py-4">
        {/* Soft Left & Right Edge Gradient Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-8 xs:w-12 sm:w-28 bg-gradient-to-r from-[#08090D] via-[#08090D]/80 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-8 xs:w-12 sm:w-28 bg-gradient-to-l from-[#08090D] via-[#08090D]/80 to-transparent z-10"
        />

        {/* Row 1 — Moving Right to Left */}
        <div className="ticker-track-left gap-3 sm:gap-5 mb-3 sm:mb-5">
          {track1.map((skill, index) => (
            <div
              key={`row1-${skill.name}-${index}`}
              className="flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-[#141725] px-3.5 py-2 sm:px-4.5 sm:py-3 shadow-xl hover:border-violet-500/50 hover:bg-[#1A1E30] hover:scale-105 transition-all duration-200 cursor-default shrink-0 min-w-[150px] xs:min-w-[170px] sm:min-w-[195px]"
            >
              {skill.icon}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-cyan-400">
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — Moving in Opposite Direction */}
        <div className="ticker-track-right gap-3 sm:gap-5">
          {track2.map((skill, index) => (
            <div
              key={`row2-${skill.name}-${index}`}
              className="flex items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/10 bg-[#141725] px-3.5 py-2 sm:px-4.5 sm:py-3 shadow-xl hover:border-cyan-500/50 hover:bg-[#1A1E30] hover:scale-105 transition-all duration-200 cursor-default shrink-0 min-w-[150px] xs:min-w-[170px] sm:min-w-[195px]"
            >
              {skill.icon}
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-violet-400">
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
