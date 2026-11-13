/**
 * AboutSection.jsx
 * Professional About Me section.
 * Contains personal intro, verified educational background, and web development interests.
 */

import personal from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to my background, education, and passions in software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Interests Card */}
          <Card className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                <h3 className="text-xl font-bold text-zinc-100">
                  Background &amp; Passions
                </h3>
              </div>

              <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                {personal.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Interests Badges */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                Primary Development Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Development",
                  "MERN Architecture",
                  "Responsive UI/UX",
                  "RESTful APIs",
                  "Software Engineering Best Practices",
                  "Modern Next.js & React",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-md border border-zinc-700/60 bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Key Facts & Academic Overview */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Education Card */}
            <Card className="flex-1 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                    Academic Background
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100 mt-1">
                    {personal.education.degree}
                  </h3>
                  <p className="text-sm font-medium text-zinc-300 mt-0.5">
                    {personal.education.university}
                  </p>
                </div>
                <span className="rounded-full bg-violet-500/10 border border-violet-500/30 p-2.5 text-violet-400 text-lg">
                  🎓
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Current Status: <strong className="text-zinc-200">{personal.education.semester}</strong></span>
              </div>
            </Card>

            {/* Location & Contact Details */}
            <Card className="flex-1 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Location &amp; Communication
                  </span>
                  <h3 className="text-base font-semibold text-zinc-200 mt-1">
                    {personal.contact.location}
                  </h3>
                  <a
                    href={`mailto:${personal.contact.email}`}
                    className="inline-block text-sm text-cyan-400 hover:text-cyan-300 mt-1 transition-colors break-all"
                  >
                    {personal.contact.email}
                  </a>
                </div>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 p-2.5 text-cyan-400 text-lg">
                  📍
                </span>
              </div>
            </Card>

            {/* Career Objective Summary */}
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900/60 border-zinc-800">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                Career Goal
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Aspiring to contribute as an effective full-stack software engineer, building robust, scalable web products while collaborating closely with experienced development teams.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
