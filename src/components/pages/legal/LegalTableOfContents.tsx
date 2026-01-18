"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface TOCItem {
  id: string;
  title: string;
}

export interface LegalTableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export function LegalTableOfContents({ items, className }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile: Collapsible */}
      <div className={cn("lg:hidden", className)}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-navy-light rounded-lg border border-white/10 text-cream font-medium"
        >
          <span>Table of Contents</span>
          <ChevronDown
            className={cn(
              "w-5 h-5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <nav className="p-4 space-y-2 bg-navy-light/50 rounded-b-lg border-x border-b border-white/10">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left text-sm py-2 px-3 rounded-md transition-colors",
                  activeId === item.id
                    ? "bg-amber/10 text-amber"
                    : "text-warm-gray hover:text-cream hover:bg-white/5"
                )}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Desktop: Sticky Sidebar */}
      <nav className={cn("hidden lg:block sticky top-24", className)}>
        <div className="p-4 bg-navy-light/50 rounded-lg border border-white/10">
          <h3 className="text-sm font-semibold text-cream mb-4 uppercase tracking-wider">
            Contents
          </h3>
          <div className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative block w-full text-left text-sm py-2 px-3 rounded-md transition-all duration-200",
                  activeId === item.id
                    ? "text-amber bg-amber/10"
                    : "text-warm-gray hover:text-cream hover:bg-white/5"
                )}
              >
                {activeId === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
