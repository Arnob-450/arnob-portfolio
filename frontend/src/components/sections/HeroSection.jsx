"use client";

/**
 * HeroSection.jsx
 * Spacious, premium desktop two-column hero:
 * - Left: Welcome badge, "Hi, I'm Arnob|" heading with gradient,
 *   "Aspiring Full Stack Web Developer" subtitle, verified bio, and dual CTA buttons.
 * - Right: Profile portrait cutout with cosmic ambient glow, orbital lines, and floating tech card.
 */

import personal from "@/data/personal";
import ProfileImage from "@/components/ui/ProfileImage";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Radial Glow Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute -top-28 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/18 blur-[130px] animate-pulse-glow" />
        <div
          className="absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/14 blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Greeting, Name, Title, Intro, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            {/* Welcome Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 shadow-sm backdrop-blur-md mb-6 hover:border-violet-500/40 transition-colors">
              <span>👋</span>
              <span>Welcome to my <strong className="text-violet-400 font-semibold">portfolio</strong></span>
            </div>

            {/* Main Heading with Blinking Cursor */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tawhid Khan Arnob
              </span>
              <span className="animate-blink text-cyan-400 font-light ml-1">|</span>
            </h1>

            {/* Professional Title */}
            <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Aspiring Full Stack Web Developer
            </h2>

            {/* Short Introduction */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-[#A1A1AA] max-w-xl">
              I am a 7th-semester Software Engineering student at Daffodil International University with a passion for modern web architecture. I craft responsive, scalable applications with React, Next.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* CTA Buttons: "Explore My Work →" & "✉ Contact Me" */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <span>→</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#141725] hover:bg-white/5 hover:border-violet-500/50 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>✉</span>
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Quick Pills */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tawhid Khan Arnob's GitHub profile"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141725] px-3.5 py-1.5 text-xs text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
              >
                <svg className="h-3.5 w-3.5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
                <span className="text-slate-500 font-mono text-[10px]">↗</span>
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tawhid Khan Arnob's LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141725] px-3.5 py-1.5 text-xs text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <svg className="h-3.5 w-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
                <span className="text-slate-500 font-mono text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Portrait Cutout with Glow & Floating Tech Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
}
