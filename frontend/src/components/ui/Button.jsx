"use client";

/**
 * Button.jsx
 * Reusable button component with primary, secondary, and ghost variants.
 */

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-violet-500 text-white hover:bg-violet-600 focus-visible:ring-violet-500",
  secondary:
    "bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 focus-visible:ring-cyan-400",
  ghost:
    "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800 focus-visible:ring-zinc-400",
};

const sizes = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

/**
 * @param {object} props
 * @param {"primary"|"secondary"|"ghost"} [props.variant="primary"]
 * @param {"sm"|"md"|"lg"} [props.size="md"]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
