"use client";

/**
 * ProjectsSection.jsx
 * Independent Full-Width Section for Featured Projects:
 * - Centered Section Header matching global design.
 * - Spacious 2-Column Responsive Grid on Desktop (1 Col on mobile, 2 Cols on tablet & desktop).
 * - Full unclipped descriptions, real screenshots, and verified links.
 */

import projects from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300 mb-3">
          My Projects
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
          A showcase of practical web applications and tools engineered for performance, clean architecture, and responsive user experiences.
        </p>
      </div>

      {/* Spacious 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
