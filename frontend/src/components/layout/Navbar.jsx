"use client";

/**
 * Navbar.jsx
 * Responsive sticky navbar with active section observer and mobile menu:
 * - Desktop: Pill navigation with active section indicator and Download CV button
 * - Mobile: Hamburger toggle with accessible touch target (>=44px)
 * - Mobile Drawer: Smooth slide-down, active state, closes on selection or Escape key
 * - Locks background body scrolling when mobile drawer is open
 */

import { useState, useEffect } from "react";
import navLinks from "@/data/navigation";
import DownloadCVButton from "@/components/ui/DownloadCVButton";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection, cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(15);
  const activeSection = useActiveSection(sectionIds);

  // Close menu and prevent scroll lock on unmount or navigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    scrollToSection(id);
    setMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 w-full",
        scrolled || menuOpen
          ? "bg-[#08090D]/95 backdrop-blur-md border-b border-[#232634] shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 w-full"
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
            .filter((link) =>
              ["home", "about", "skills", "certifications", "projects", "contact"].includes(link.id)
            )
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
          className="flex lg:hidden flex-col justify-center items-center w-11 h-11 min-w-[44px] min-h-[44px] gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 cursor-pointer"
        >
          <span
            className={cn(
              "block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
              menuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-b border-zinc-800 bg-[#08090D]/98 backdrop-blur-2xl px-4 py-5 shadow-2xl animate-fade-in max-h-[calc(100dvh-65px)] overflow-y-auto"
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
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-colors min-h-[44px]",
                      isActive
                        ? "bg-violet-500/15 text-violet-300 font-semibold border border-violet-500/30"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-4 border-t border-zinc-800/80 flex justify-center">
            <DownloadCVButton variant="secondary" size="md" className="w-full py-3 min-h-[44px]" />
          </div>
        </div>
      )}
    </header>
  );
}
