"use client";

/**
 * AboutSection.jsx
 * Independent Full-Width Section:
 * - Section header with badge and title.
 * - Left: Glowing developer workstation illustration.
 * - Right: In-depth biography, academic context, and primary development interests.
 */

import personal from "@/data/personal";

export default function AboutSection() {
  const interests = [
    "Full Stack Architecture",
    "MERN Stack (React, Node, Express, Mongo)",
    "Next.js App Router",
    "Scalable REST APIs",
    "Clean Code & Performance",
    "Responsive UI/UX",
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300 mb-3">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Turning Ideas into Digital Reality
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
          A dedicated software engineering student with an appetite for crafting modern, high-performance web applications.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="rounded-3xl border border-white/10 bg-[#141725] p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-600/15 blur-[100px]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Developer Laptop Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1E30] to-[#0A0D18] border border-white/10 p-5 flex flex-col items-center justify-center shadow-inner group">
              {/* Screen Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-violet-600/20 blur-xl group-hover:bg-violet-600/30 transition-colors duration-500"
              />

              {/* Laptop Screen Frame */}
              <div className="relative w-full aspect-[16/10] rounded-xl bg-[#08090D] border border-violet-500/40 shadow-2xl flex flex-col items-center justify-center p-4 overflow-hidden">
                {/* Screen Top Bar */}
                <div className="absolute top-2.5 left-3 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Glowing Code Symbol */}
                <div className="flex items-center justify-center text-4xl sm:text-5xl font-extrabold font-mono tracking-wider bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  &lt;/&gt;
                </div>

                {/* Simulated Terminal Lines */}
                <div className="mt-3 flex flex-col gap-1.5 w-4/5 opacity-40">
                  <div className="h-1 w-full bg-violet-400 rounded-full" />
                  <div className="h-1 w-2/3 bg-cyan-400 rounded-full" />
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="w-[88%] h-3 mt-2 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-b-md shadow-md" />
              <div className="w-[32%] h-1 bg-zinc-600 rounded-b-sm" />
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Hello! I&apos;m Tawhid Khan Arnob
            </h3>

            <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
              I am currently in my <strong>7th semester of BSc in Software Engineering</strong> at <strong>Daffodil International University</strong>. My core passion lies in translating creative architectural concepts into resilient, modern web products.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
              Over the course of my university studies and intensive project development, I have focused heavily on JavaScript and TypeScript ecosystems, building full-stack platforms with <strong>React, Next.js, Node.js, Express.js, and MongoDB</strong>.
            </p>

            {/* Core Development Interests */}
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Core Development Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-white/10 bg-[#10121B] px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:border-violet-500/40 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
