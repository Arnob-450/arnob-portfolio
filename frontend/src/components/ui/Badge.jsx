/**
 * Badge.jsx
 * Small tag/badge for skill names or project tech stacks.
 */

import { cn } from "@/lib/utils";

/**
 * @param {object} props
 * @param {"purple"|"cyan"|"zinc"} [props.color="purple"]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Badge({ color = "purple", className, children }) {
  const colorMap = {
    purple: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    cyan:   "bg-cyan-400/15 text-cyan-300 border-cyan-400/30",
    zinc:   "bg-zinc-700/50 text-zinc-300 border-zinc-600/50",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  );
}
