/**
 * ExperienceSection.jsx
 * Displays verified academic coursework and self-directed project development experience.
 * Avoids any fabricated employment history.
 */

import experienceList from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/60 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience &amp; Project Practice"
          subtitle="Honest student experience: academic software engineering coursework and self-directed project building."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceList.map((item, index) => (
            <Card
              key={item.id}
              className="relative p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-violet-300 mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <div>
                  <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300">
                    {item.timeline}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="pt-4 border-t border-zinc-800/80">
                <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                  Key Focus Areas
                </h4>
                <ul className="space-y-2">
                  {item.points.map((point, ptIdx) => (
                    <li
                      key={ptIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-violet-400 shrink-0" />
                      <span>{point}</span>
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
