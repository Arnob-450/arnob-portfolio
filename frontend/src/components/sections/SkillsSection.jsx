/**
 * SkillsSection.jsx
 * Categorized Technical Skills display.
 * Honest presentation: no fake percentages or progress bars.
 */

import skillCategories from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function SkillsSection() {
  const getCategoryColor = (id) => {
    switch (id) {
      case "frontend":
        return {
          pill: "bg-violet-500/10 border-violet-500/30 text-violet-300",
          tag: "border-violet-500/20 text-violet-400 bg-violet-500/5",
          dot: "bg-violet-400",
        };
      case "backend":
        return {
          pill: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
          tag: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",
          dot: "bg-cyan-400",
        };
      case "database":
        return {
          pill: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
          tag: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
          dot: "bg-emerald-400",
        };
      default:
        return {
          pill: "bg-zinc-800 border-zinc-700 text-zinc-300",
          tag: "border-zinc-700 text-zinc-400 bg-zinc-800/40",
          dot: "bg-zinc-400",
        };
    }
  };

  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/60 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Core programming languages, frameworks, and database tools I use to build web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const colors = getCategoryColor(category.id);

            return (
              <Card
                key={category.id}
                className="flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${colors.pill}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
                      {category.title}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-950/50 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200"
                      >
                        <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded border ${colors.tag}`}>
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
                  <span>Stack: Modern Web</span>
                  <span className="text-zinc-600 font-mono">Verified Skills</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
