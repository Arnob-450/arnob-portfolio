"use client";

/**
 * ProjectsSection.jsx
 * Displays all four verified projects with optional category filter.
 * Responsive grid layout (1 col mobile, 2 cols tablet/desktop).
 */

import { useState } from "react";
import projects, { projectCategories } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of web applications and tools built during my software engineering studies and self-directed practice."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                  isActive
                    ? "bg-violet-500 text-white shadow-md shadow-violet-500/20"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Helper Note for User */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          <p>
            Project screenshots and repository links can be placed in{" "}
            <code className="text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
              public/images/projects/
            </code>{" "}
            and updated in{" "}
            <code className="text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
              src/data/projects.js
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}
