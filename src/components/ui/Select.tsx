"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "default" | "filled";
  selectSize?: "sm" | "md" | "lg";
  error?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant = "default",
      selectSize = "md",
      error = false,
      options,
      placeholder,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "w-full rounded-lg border bg-navy-light text-cream transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer";

    const variants = {
      default: "border-white/10 hover:border-white/20",
      filled: "border-transparent bg-navy hover:bg-navy-light",
    };

    const sizes = {
      sm: "h-9 px-3 pr-9 text-sm",
      md: "h-11 px-4 pr-10 text-base",
      lg: "h-14 px-5 pr-12 text-lg",
    };

    const errorStyles = error
      ? "border-red-500 focus-visible:ring-red-500"
      : "";

    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[selectSize],
            errorStyles,
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-navy">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray pointer-events-none" />
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
