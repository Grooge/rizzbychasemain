import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";
import { Container, type ContainerProps } from "./Container";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "default" | "dark" | "darker" | "gradient";
  spacing?: "sm" | "md" | "lg" | "xl";
  containerSize?: ContainerProps["size"];
  fullWidth?: boolean;
}

export function Section({
  className,
  background = "default",
  spacing = "lg",
  containerSize = "lg",
  fullWidth = false,
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    default: "bg-navy-dark",
    dark: "bg-navy",
    darker: "bg-[#0a0f1a]",
    gradient: "bg-gradient-to-b from-navy-dark to-navy",
  };

  const spacings = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-32",
  };

  return (
    <section
      className={cn(backgrounds[background], spacings[spacing], className)}
      {...props}
    >
      {fullWidth ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}

export function SectionHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-center max-w-3xl mx-auto mb-12 md:mb-16", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-warm-gray-light text-lg md:text-xl", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function SectionLabel({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-3",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
