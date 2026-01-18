"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type ReactElement } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glow?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      glow = false,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-amber text-navy-dark hover:bg-amber-light active:bg-amber-dark",
      secondary:
        "bg-navy-light text-cream hover:bg-navy active:bg-navy-dark",
      outline:
        "border-2 border-amber text-amber hover:bg-amber hover:text-navy-dark",
      ghost:
        "text-cream hover:bg-white/10 active:bg-white/20",
      link:
        "text-amber underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm gap-2",
      md: "h-11 px-6 text-sm gap-2",
      lg: "h-12 px-8 text-base gap-2",
      xl: "h-14 px-10 text-lg gap-3",
    };

    const glowStyles = glow
      ? "shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
      : "";

    const Comp = asChild ? Slot : "button";

    const buttonContent = isLoading ? (
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ) : (
      <>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    return (
      <Comp
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "link" && sizes[size],
          glowStyles,
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {asChild ? children : buttonContent}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
