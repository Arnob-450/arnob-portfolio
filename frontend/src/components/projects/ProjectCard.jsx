"use client";

/**
 * ProjectCard.jsx
 * Spacious 2-Column Desktop Project Card:
 * - High-res screenshot banner with 16:9 aspect ratio and hover zoom.
 * - Prominent title and full, unconstrained description (no line-clamping).
 * - Verified technology stack tags.
 * - Bottom-aligned dual action buttons: "Live Demo ↗" and "GitHub".
 */

import { useState } from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = project.image && !imageError;
  const githubLink = project.githubUrl || project.repoUrl;

  return (
    <div className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#141725]/85 backdrop-blur-xl hover:border-violet-500/50 hover:bg-[#181C2E]/90 hover:shadow-2xl hover:shadow-violet-600/15 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full">
      <div>
        {/* Large Screenshot Visual Preview (16:9 Aspect Ratio) */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0A0D18] border-b border-white/5">
          {hasImage ? (
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#141725] to-[#0A0D18]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400 mb-2">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-400">Live Preview</span>
            </div>
          )}

          {/* Featured Tag */}
          {project.featured && (
            <span className="absolute top-3.5 right-3.5 rounded-full border border-violet-400/40 bg-violet-600/90 px-3.5 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              Featured Project
            </span>
          )}
        </div>

        {/* Card Content with Full Unclipped Readability */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
            {project.shortDescription}
          </p>

          {/* Technology Stack Pills */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/5 bg-[#10121B] px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Aligned at Bottom */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-3 flex flex-wrap items-center gap-3 border-t border-white/5 mt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-lg shadow-violet-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Live Demo</span>
            <span>↗</span>
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${project.title} on GitHub`}
            className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}
