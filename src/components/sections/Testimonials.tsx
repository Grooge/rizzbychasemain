"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, viewportSettings } from "@/lib/animations";
import { Star, Quote } from "lucide-react";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

export function Testimonials() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  return (
    <Section background="dark" id="testimonials">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        <SectionHeader>
          <SectionLabel>Testimonials</SectionLabel>
          <SectionTitle>Real Men, Real Results</SectionTitle>
          <SectionSubtitle>
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
          </SectionSubtitle>
        </SectionHeader>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              variant="glass"
              hover
              className="relative overflow-hidden h-full"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-amber text-amber" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-navy-light">
                  {/* Placeholder avatar - replace with actual */}
                  <Image
                    src={`https://i.pravatar.cc/100?u=${testimonial.id}`}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-cream font-semibold">{testimonial.name}</p>
                  <p className="text-warm-gray text-sm">{testimonial.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-bold">{testimonial.matchIncrease}</p>
                  <p className="text-warm-gray text-xs">matches</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Social Proof Bar */}
      <motion.div
        className="mt-16 p-6 rounded-xl bg-navy-light/50 border border-white/5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-4xl font-bold text-amber mb-1">4.9/5</p>
            <div className="flex justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber text-amber" />
              ))}
            </div>
            <p className="text-warm-gray text-sm">Average Rating</p>
          </motion.div>
          <div className="w-px h-16 bg-white/10 hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-4xl font-bold text-cream mb-1">500+</p>
            <p className="text-warm-gray text-sm">5-Star Reviews</p>
          </motion.div>
          <div className="w-px h-16 bg-white/10 hidden md:block" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-4xl font-bold text-cream mb-1">2,000+</p>
            <p className="text-warm-gray text-sm">Satisfied Clients</p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
