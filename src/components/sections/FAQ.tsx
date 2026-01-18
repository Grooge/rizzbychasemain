"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants, type Easing } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportSettings } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];
const easeInOut: Easing = [0.42, 0, 0.58, 1];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: easeOut,
      },
    }),
  };

  return (
    <Section background="default" id="faq">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        <SectionHeader>
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Common Questions</SectionTitle>
          <SectionSubtitle>
            Everything you need to know before getting started.
          </SectionSubtitle>
        </SectionHeader>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={itemVariants}
              className={cn(
                "rounded-xl border transition-all duration-300",
                openIndex === index
                  ? "bg-navy-light border-amber/30"
                  : "bg-navy-light/50 border-white/10 hover:border-white/20"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-cream font-semibold pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <ChevronDown className="w-5 h-5 text-amber shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: easeInOut }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-warm-gray-light leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportSettings}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-warm-gray mb-4">Still have questions?</p>
          <motion.a
            href="mailto:chase@rizzbychase.com"
            className="inline-flex items-center gap-2 text-amber font-semibold hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Chase directly
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
}
