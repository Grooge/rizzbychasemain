"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportSettings } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function LegalSection({ id, title, children, className }: LegalSectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={cn("scroll-mt-24", className)}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-cream mb-4">
        {title}
      </h2>
      <div className="text-warm-gray-light leading-relaxed space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

export interface LegalSubsectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function LegalSubsection({ title, children, className }: LegalSubsectionProps) {
  return (
    <div className={cn("mt-6", className)}>
      <h3 className="text-lg font-medium text-cream mb-2">
        {title}
      </h3>
      <div className="text-warm-gray-light leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export interface LegalListProps {
  items: string[];
  ordered?: boolean;
  className?: string;
}

export function LegalList({ items, ordered = false, className }: LegalListProps) {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag className={cn(
      "space-y-2 pl-5",
      ordered ? "list-decimal" : "list-disc",
      className
    )}>
      {items.map((item, index) => (
        <li key={index} className="text-warm-gray-light">
          {item}
        </li>
      ))}
    </ListTag>
  );
}
