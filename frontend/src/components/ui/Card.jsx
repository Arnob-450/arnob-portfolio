/**
 * Card.jsx
 * Reusable card container with the dark theme surface color.
 */

import { cn } from "@/lib/utils";

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-[#141725] p-6 sm:p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-[#181C2E]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
