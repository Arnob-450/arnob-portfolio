"use client";

/**
 * ProjectCard.jsx
 * Individual project card featuring verified screenshots, tech stack badges,
 * and direct links to live demos and GitHub repositories.
 */

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = project.image && !imageError;

  return (
    <Card className="group flex flex-col justify-between overflow-hidden p-0 border-zinc-800 bg-zinc-900/90 hover:border-zinc-700 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300">
      <div>
        {/* Project Screenshot / Visual Preview Banner */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800">
          {hasImage ? (
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} live interface preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              {/* Subtle hover gradient overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-zinc-400">
                Screenshot Preview
              </span>
            </div>
          )}

          {project.featured && (
            <span className="absolute top-3 right-3 rounded-full bg-violet-600/90 border border-violet-400/40 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              Featured
            </span>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} color="zinc" className="text-[11px] py-0.5 px-2">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons: View Live & GitHub Repository */}
      <div className="px-6 pb-6 pt-3 flex flex-wrap items-center gap-3 border-t border-zinc-800/70 mt-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-200"
          >
            <span>View Live</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-600 italic">
            Demo coming soon
          </span>
        )}

        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/80 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-all duration-200"
          >
            <svg
              className="h-3.5 w-3.5 shrink-0 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Repository</span>
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-600 italic">
            Repo coming soon
          </span>
        )}
      </div>
    </Card>
  );
}
