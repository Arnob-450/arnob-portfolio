/**
 * EducationSection.jsx
 * Clean, structured display of educational background.
 * Honest and verified: Daffodil International University, BSc in Software Engineering, 7th semester.
 */

import educationList from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Education"
          subtitle="My academic foundation in software engineering and computer science principles."
        />

        <div className="max-w-4xl mx-auto">
          {educationList.map((edu) => (
            <Card
              key={edu.id}
              className="relative overflow-hidden border border-zinc-800 bg-zinc-900/90 p-6 sm:p-8 hover:border-violet-500/40 transition-all duration-300"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300 mb-3">
                    <span>🎓 Degree Program</span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-100">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-cyan-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                    {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {edu.description}
              </p>

              <div className="pt-6 border-t border-zinc-800">
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Academic Focus &amp; Coursework Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
