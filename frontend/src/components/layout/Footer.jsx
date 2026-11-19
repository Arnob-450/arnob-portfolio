"use client";

/**
 * Footer.jsx
 * Fully responsive footer:
 * - Mobile: Stacked layout with touch-friendly navigation and social links
 * - Tablet: 2-column balanced grid
 * - Desktop: 3-column comprehensive layout
 * - Centered copyright and tech attribution
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
      className="border-t border-[#232634] bg-[#08090D] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 w-full"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-8 sm:pb-10 border-b border-[#232634]">
          {/* Brand & Bio Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-3 text-center sm:text-left">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:scale-105 transition-transform"
            >
              <span className="text-violet-400 font-mono text-base font-bold">&lt;/&gt;</span>
              <span className="font-extrabold text-white">Arnob</span>
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
              {personal.title} studying Software Engineering at Daffodil International University. Dedicated to creating responsive, high-performance web solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="sm:col-span-1 md:col-span-4 text-center sm:text-left">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-zinc-200 mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-violet-400 transition-colors py-1 inline-block min-h-[32px] flex items-center justify-center sm:justify-start"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="sm:col-span-1 md:col-span-3 text-center sm:text-left">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-zinc-200 mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2 text-xs items-center sm:items-start">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors min-h-[32px]"
              >
                <span>GitHub Profile</span>
                <span className="text-zinc-600 font-mono text-[10px]">↗</span>
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors min-h-[32px]"
              >
                <span>LinkedIn Profile</span>
                <span className="text-zinc-600 font-mono text-[10px]">↗</span>
              </a>
              <a
                href={`mailto:${personal.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-zinc-200 transition-colors break-all min-h-[32px]"
              >
                <span>{personal.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-zinc-300 font-medium">{personal.name}</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 justify-center">
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
