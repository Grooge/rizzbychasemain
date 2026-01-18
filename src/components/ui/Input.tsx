"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "filled";
  inputSize?: "sm" | "md" | "lg";
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "default",
      inputSize = "md",
      error = false,
      leftIcon,
      rightIcon,
      type = "text",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "w-full rounded-lg border bg-navy-light text-cream placeholder:text-warm-gray transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      default: "border-white/10 hover:border-white/20",
      filled: "border-transparent bg-navy hover:bg-navy-light",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 text-base",
      lg: "h-14 px-5 text-lg",
    };

    const errorStyles = error
      ? "border-red-500 focus-visible:ring-red-500"
      : "";

    const iconPadding = {
      left: leftIcon ? "pl-10" : "",
      right: rightIcon ? "pr-10" : "",
    };

    return (
      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-gray">
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[inputSize],
            errorStyles,
            iconPadding.left,
            iconPadding.right,
            className
          )}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
