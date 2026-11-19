"use client";

/**
 * ProjectsSection.jsx
 * Fully responsive Featured Projects section:
 * - Mobile: 1 full-width card per row
 * - Tablet & Desktop: 2-column spacious grid (sm:grid-cols-2)
 * - Fluid typography and comfortable spacing
 */

import projects from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 mb-3">
          My Projects
        </span>
        <h2 className="fluid-section-heading font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0">
          A showcase of practical web applications and tools engineered for performance, clean architecture, and responsive user experiences.
        </p>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 cols on tablet & desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
