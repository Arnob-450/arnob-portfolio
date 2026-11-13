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
        "rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
