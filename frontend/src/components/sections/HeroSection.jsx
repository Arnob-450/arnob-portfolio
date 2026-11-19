"use client";

/**
 * HeroSection.jsx
 * Fully responsive hero with optimized mobile & desktop visual hierarchy:
 * - Mobile (< lg): Stacked in user-specified order:
 *   1. Welcome badge
 *   2. Main heading: "Hi, I'm Tawhid Khan Arnob |"
 *   3. Professional title: "Aspiring Full Stack Web Developer"
 *   4. Profile photograph (centered, 150-180px, circular crop, violet glow)
 *   5. Short introduction
 *   6. CTA buttons ("Explore My Work" and "Contact Me")
 *   7. GitHub and LinkedIn social chips
 * - Desktop (>= lg): Preserved spacious 2-column layout (7:5 split with text on left, full portrait on right)
 * - Fluid clamp typography to eliminate wrapping issues
 * - WCAG compliant touch targets (>=44px)
 */

import personal from "@/data/personal";
import ProfileImage from "@/components/ui/ProfileImage";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-0 sm:min-h-[85vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden w-full"
    >
      {/* Background Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute -top-24 left-1/4 h-[320px] w-[320px] sm:h-[480px] sm:w-[480px] rounded-full bg-violet-600/18 blur-[90px] sm:blur-[130px] animate-pulse-glow" />
        <div
          className="absolute top-1/4 right-1/4 h-[280px] w-[280px] sm:h-[420px] sm:w-[420px] rounded-full bg-cyan-500/14 blur-[80px] sm:blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Main Content Column (Mobile full-width / Desktop 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up w-full">
            {/* 1. Welcome Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs text-slate-300 shadow-sm backdrop-blur-md mb-2.5 sm:mb-3 lg:mb-5 hover:border-violet-500/40 transition-colors">
              <span>👋</span>
              <span>
                Welcome to my <strong className="text-violet-400 font-semibold">portfolio</strong>
              </span>
            </div>

            {/* 2. Main Heading with Blinking Cursor & Fluid Size clamp() */}
            <h1 className="fluid-hero-heading font-extrabold tracking-tight text-white w-full">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tawhid Khan Arnob
              </span>
              <span className="animate-blink text-cyan-400 font-light ml-1">|</span>
            </h1>

            {/* 3. Professional Title */}
            <h2 className="mt-1.5 sm:mt-2 lg:mt-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Aspiring Full Stack Web Developer
            </h2>

            {/* 4. Mobile Profile Image (Visible on mobile/tablet screens < lg, hidden on desktop) */}
            <div className="block lg:hidden my-4 sm:my-5 w-full flex justify-center">
              <ProfileImage isMobile={true} priority={true} />
            </div>

            {/* 5. Short Introduction */}
            <p className="mt-2 sm:mt-3 lg:mt-5 text-[13px] sm:text-base lg:text-lg leading-relaxed text-[#A1A1AA] max-w-xl mx-auto lg:mx-0">
              I am a 7th-semester Software Engineering student at Daffodil International University with a passion for modern web architecture. I craft responsive, scalable applications with React, Next.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* 6. Primary and Contact CTAs */}
            <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 lg:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 px-6 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <span>→</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#141725] hover:bg-white/5 hover:border-violet-500/50 px-6 sm:px-7 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>✉</span>
                <span>Contact Me</span>
              </button>
            </div>

            {/* 7. GitHub and LinkedIn Social Links */}
            <div className="mt-3.5 sm:mt-5 lg:mt-7 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tawhid Khan Arnob's GitHub profile"
                className="min-h-[40px] inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141725] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
              >
                <svg className="h-4 w-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
                <span className="text-slate-500 font-mono text-[10px]">↗</span>
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tawhid Khan Arnob's LinkedIn profile"
                className="min-h-[40px] inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141725] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
                <span className="text-slate-500 font-mono text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Desktop Right Column: Profile Portrait (Hidden on mobile/tablet < lg) */}
          <div
            className="hidden lg:flex lg:col-span-5 justify-end animate-fade-in-up w-full mx-auto lg:mx-0 mt-0"
            style={{ animationDelay: "0.2s" }}
          >
            <ProfileImage isMobile={false} priority={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
