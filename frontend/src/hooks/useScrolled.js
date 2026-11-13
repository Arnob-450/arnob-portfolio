"use client";

import { useState, useEffect } from "react";

/**
 * useScrolled
 * Returns true once the user has scrolled past a threshold (default: 10px).
 * Used by the Navbar to change its background on scroll.
 *
 * @param {number} threshold - Scroll distance in px before returning true.
 * @returns {boolean}
 */
export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
