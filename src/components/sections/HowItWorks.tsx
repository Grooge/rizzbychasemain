"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { fadeInUp, viewportSettings } from "@/lib/animations";
import { Upload, Images, Sparkles, RefreshCw, Rocket } from "lucide-react";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

const iconMap = {
  upload: Upload,
  gallery: Images,
  sparkles: Sparkles,
  refresh: RefreshCw,
  rocket: Rocket,
};

export function HowItWorks() {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  return (
    <Section background="default" id="how-it-works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        <SectionHeader>
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>From Upload to Transformation</SectionTitle>
          <SectionSubtitle>
            A simple 5-step process that takes your existing photos and turns them into
            match-generating machines.
          </SectionSubtitle>
        </SectionHeader>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <motion.div
          className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            const isMiddle = index === 2;

            return (
              <motion.div
                key={step.number}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <motion.div
                  className={`
                    relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                    transition-all duration-300
                    ${isMiddle
                      ? "bg-amber text-navy-dark shadow-[0_0_30px_rgba(217,119,6,0.3)]"
                      : "bg-navy-light text-amber border border-white/10 group-hover:border-amber/50"
                    }
                  `}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-7 h-7" />
                  {/* Step number badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-cream text-xs font-bold flex items-center justify-center border border-white/10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-cream mb-2">{step.title}</h3>
                <p className="text-warm-gray-light text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (Mobile/Tablet) */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <motion.div
                    className="lg:hidden mt-6 text-white/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-warm-gray-light mb-6">
          Average time from upload to final photos: <span className="text-amber font-semibold">48 hours</span>
        </p>
        <motion.a
          href="#pricing"
          className="inline-flex items-center gap-2 text-amber font-semibold hover:underline"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View Pricing
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </motion.div>
    </Section>
  );
}
