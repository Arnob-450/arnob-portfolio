/**
 * SectionHeading.jsx
 * Consistent section title + optional subtitle used by every page section.
 */

import { cn } from "@/lib/utils";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {"left"|"center"} [props.align="center"]
 * @param {string} [props.className]
 */
export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
        <span className="ml-1 text-violet-500">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* decorative underline */}
      <div
        className={cn(
          "mt-4 h-0.5 w-16 rounded bg-gradient-to-r from-violet-500 to-cyan-400",
          align === "center" ? "mx-auto" : "ml-0"
        )}
      />
    </div>
  );
}
