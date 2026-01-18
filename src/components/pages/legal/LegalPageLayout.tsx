"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { LegalTableOfContents, type TOCItem } from "./LegalTableOfContents";

export interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  description?: string;
  tocItems: TOCItem[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  description,
  tocItems,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-navy-dark pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <Container size="xl">
        {/* Header */}
        <motion.header
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.p
            variants={staggerItem}
            className="text-amber text-sm font-medium uppercase tracking-wider mb-2"
          >
            Legal
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={staggerItem}
              className="text-warm-gray-light text-lg max-w-2xl mb-4"
            >
              {description}
            </motion.p>
          )}
          <motion.p
            variants={staggerItem}
            className="text-warm-gray text-sm"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </motion.header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {children}
          </motion.div>

          {/* Table of Contents */}
          <LegalTableOfContents items={tocItems} />
        </div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-warm-gray">
            Questions about this policy?{" "}
            <a
              href="mailto:chase@rizzbychase.com"
              className="text-amber hover:text-amber-light transition-colors"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
