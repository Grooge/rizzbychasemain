import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "amber" | "success" | "outline" | "pulse";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider";

  const variants = {
    default: "bg-navy-light text-cream border border-white/10",
    amber: "bg-amber/10 text-amber border border-amber/20",
    success: "bg-green-500/10 text-green-400 border border-green-500/20",
    outline: "border border-amber text-amber",
    pulse: "bg-amber/10 text-amber border border-amber/20",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {variant === "pulse" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
        </span>
      )}
      {children}
    </span>
  );
}
