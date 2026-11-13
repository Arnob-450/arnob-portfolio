"use client";

import { useState, useEffect } from "react";

/**
 * useActiveSection
 * Tracks which section is currently visible in the viewport.
 * Used by the Navbar to highlight the active nav link.
 *
 * @param {string[]} sectionIds - Array of section element IDs to observe.
 * @returns {string} The ID of the currently active/visible section.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
}
