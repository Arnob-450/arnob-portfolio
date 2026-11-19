"use client";

/**
 * Navbar.jsx
 * Responsive sticky navbar with active section observer and mobile menu.
 */

import { useState } from "react";
import navLinks from "@/data/navigation";
import personal from "@/data/personal";
import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection, cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(15);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#08090D]/90 backdrop-blur-md border-b border-[#232634] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Personal Branding / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white transition-transform hover:scale-105"
        >
          <span className="flex items-center text-violet-400 font-mono text-base font-bold group-hover:text-cyan-400 transition-colors">
            &lt;/&gt;
          </span>
          <span className="text-white font-extrabold tracking-tight">Arnob</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 bg-[#0E101D]/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-xl shadow-lg shadow-black/30">
          {navLinks
            .filter((link) => ["home", "about", "skills", "certifications", "projects", "contact"].includes(link.id))
            .map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "text-white bg-violet-600/30 border border-violet-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
        </div>

        {/* Desktop Quick Download CV Action */}
        <div className="hidden sm:flex items-center gap-3">
          <DownloadCVButton
            variant="secondary"
            size="sm"
            className="rounded-full border-white/15 bg-white/5 hover:bg-violet-600/20 hover:border-violet-500/50 text-white text-xs px-4 py-2 font-medium transition-all shadow-sm hover:shadow-violet-500/20"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex lg:hidden flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <span
            className={cn(
              "block h-0.5 w-4 rounded-full bg-current transition-all duration-300",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-4 rounded-full bg-current transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-4 rounded-full bg-current transition-all duration-300",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-4 py-4 shadow-2xl animate-fade-in"
        >
          <ul className="flex flex-col gap-1.5" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-violet-500/15 text-violet-300 font-semibold"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex justify-center">
            <DownloadCVButton
              variant="secondary"
              size="md"
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
}
