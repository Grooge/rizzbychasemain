"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <Section background="gradient" spacing="xl">
      <div className="text-center max-w-3xl mx-auto">
        {/* Decorative elements */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-amber/20 rounded-full blur-[80px]" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 relative">
          Ready to transform your{" "}
          <span className="gradient-text">dating life?</span>
        </h2>

        <p className="text-warm-gray-light text-xl mb-10 max-w-2xl mx-auto">
          Join 2,000+ men who stopped struggling with bad photos
          and started getting the matches they deserve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="xl" glow rightIcon={<ArrowRight className="w-5 h-5" />}>
            Fix My Dating Profile
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-warm-gray">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% Money-Back Guarantee
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            48-Hour Turnaround
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure Checkout
          </span>
        </div>
      </div>
    </Section>
  );
}
