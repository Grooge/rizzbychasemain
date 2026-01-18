"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes, useEffect, useRef } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "filled";
  error?: boolean;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = "default",
      error = false,
      autoResize = false,
      minRows = 4,
      maxRows = 10,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    const baseStyles =
      "w-full rounded-lg border bg-navy-light text-cream placeholder:text-warm-gray transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark disabled:opacity-50 disabled:cursor-not-allowed resize-none px-4 py-3 text-base";

    const variants = {
      default: "border-white/10 hover:border-white/20",
      filled: "border-transparent bg-navy hover:bg-navy-light",
    };

    const errorStyles = error
      ? "border-red-500 focus-visible:ring-red-500"
      : "";

    // Auto-resize functionality
    useEffect(() => {
      if (!autoResize || !textareaRef.current) return;

      const textarea = textareaRef.current;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 24;
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows * lineHeight;

      const adjustHeight = () => {
        textarea.style.height = "auto";
        const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
        textarea.style.height = `${newHeight}px`;
      };

      textarea.addEventListener("input", adjustHeight);
      adjustHeight(); // Initial adjustment

      return () => textarea.removeEventListener("input", adjustHeight);
    }, [autoResize, minRows, maxRows, textareaRef]);

    return (
      <textarea
        ref={textareaRef}
        rows={minRows}
        className={cn(
          baseStyles,
          variants[variant],
          errorStyles,
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
