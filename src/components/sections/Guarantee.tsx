"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Shield, RefreshCw, ThumbsUp } from "lucide-react";

export function Guarantee() {
  return (
    <Section background="dark" spacing="md">
      <div className="relative">
        {/* Decorative glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-amber/10 rounded-full blur-[100px]" />
        </div>

        <Container size="md" className="relative z-10">
          <div className="text-center p-8 md:p-12 rounded-2xl border border-amber/20 bg-navy-light/50 backdrop-blur">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber/10 border border-amber/20 mb-6">
              <Shield className="w-10 h-10 text-amber" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
              100% Money-Back Guarantee
            </h2>

            <p className="text-warm-gray-light text-lg max-w-2xl mx-auto mb-8">
              If you don&apos;t see at least a <span className="text-amber font-semibold">3x increase</span> in
              your match rate within 30 days of uploading your new photos, we&apos;ll refund every penny.
              No questions asked.
            </p>

            {/* Guarantee Points */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-cream font-semibold">Risk-Free</p>
                  <p className="text-warm-gray text-sm">Full refund if not satisfied</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-cream font-semibold">Unlimited Revisions</p>
                  <p className="text-warm-gray text-sm">We iterate until you&apos;re happy</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-cream font-semibold">Authenticity Promise</p>
                  <p className="text-warm-gray text-sm">Photos that look naturally you</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
