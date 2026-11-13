/**
 * utils.js
 * Shared utility helpers used across the frontend.
 */

/**
 * Conditionally join Tailwind class names.
 * Usage: cn("px-4", isActive && "bg-purple-500", "text-white")
 * @param  {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Scroll smoothly to a section by its ID.
 * @param {string} sectionId - The id attribute of the target element (without #).
 */
export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Returns a placeholder image URL when a project image is not available.
 * @returns {string}
 */
export function getPlaceholderImage() {
  return `https://placehold.co/600x400/18181B/8B5CF6?text=Project+Preview`;
}
