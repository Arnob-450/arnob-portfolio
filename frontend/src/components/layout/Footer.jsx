"use client";

/**
 * Footer.jsx
 * Comprehensive footer with branding, navigation anchors, social placeholders, and copyright.
 */

import personal from "@/data/personal";
import navLinks from "@/data/navigation";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const currentYear = 2026;

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 text-zinc-400"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="inline-flex items-center gap-1 text-lg font-bold text-zinc-100 hover:text-white transition-colors"
            >
              <span className="text-violet-400">&lt;</span>
              <span>{personal.name}</span>
              <span className="text-cyan-400 font-mono"> /</span>
              <span className="text-violet-400">&gt;</span>
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              {personal.title} studying Software Engineering at Daffodil International University. Dedicated to creating responsive, high-performance web solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-zinc-200 mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-zinc-200 mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors"
              >
                <span>GitHub Profile</span>
                <span className="text-zinc-600 font-mono text-[10px]">↗</span>
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <span className="text-zinc-600 font-mono text-[10px]">↗</span>
              </a>
              <a
                href={`mailto:${personal.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-zinc-200 transition-colors break-all"
              >
                <span>{personal.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-zinc-300 font-medium">{personal.name}</span>.
            All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-violet-400 font-medium">Next.js 16</span>
            <span>&amp;</span>
            <span className="text-cyan-400 font-medium">Tailwind CSS v4</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
