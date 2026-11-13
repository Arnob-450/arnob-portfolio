"use client";

/**
 * HeroSection.jsx
 * Professional Hero section.
 * Desktop: Two-column layout with social profile links, introduction, and CTA buttons.
 * Right column: Profile picture with verified image and subtle ambient glow.
 */

import personal from "@/data/personal";
import Button from "@/components/ui/Button";
import DownloadCVButton from "@/components/ui/DownloadCVButton";
import ProfileImage from "@/components/ui/ProfileImage";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting, Name, Title, Intro, Socials, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Friendly Greeting Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-violet-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span>Hello, I&apos;m</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-50 leading-[1.15]">
              {personal.name}
            </h1>

            {/* Professional Title */}
            <p className="mt-3 text-lg sm:text-2xl font-semibold bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              {personal.title}
            </p>

            {/* Short Introduction */}
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl">
              {personal.bio}
            </p>

            {/* Social Profile Links in Hero */}
            <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tawhid Khan Arnob's GitHub profile"
                className="group flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 hover:text-white hover:border-violet-500/50 hover:bg-zinc-800/80 transition-all duration-200"
              >
                <svg className="h-4 w-4 text-violet-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
                <span className="text-zinc-600 font-mono text-[10px]">↗</span>
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tawhid Khan Arnob's LinkedIn profile"
                className="group flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300 hover:text-white hover:border-cyan-500/50 hover:bg-zinc-800/80 transition-all duration-200"
              >
                <svg className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
                <span className="text-zinc-600 font-mono text-[10px]">↗</span>
              </a>
            </div>

            {/* Education Quick Badge */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 border border-zinc-800 px-3 py-1 text-zinc-300 font-medium">
                🎓 {personal.education.degree}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 border border-zinc-800 px-3 py-1 text-zinc-400">
                🏫 {personal.education.university} ({personal.education.semester})
              </span>
            </div>

            {/* CTA Buttons: View My Work, Contact Me, Download CV */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>

              <DownloadCVButton
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  );
}
