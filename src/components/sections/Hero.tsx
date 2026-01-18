"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SOCIAL_PROOF } from "@/lib/constants";
import { fadeInUp, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-navy-dark" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem}>
              <Badge variant="pulse">
                Now Accepting New Clients
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.1] tracking-tight"
              variants={staggerItem}
            >
              Dating photos that{" "}
              <span className="gradient-text">actually work</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-warm-gray-light max-w-xl leading-relaxed"
              variants={staggerItem}
            >
              Most men have terrible dating photos. Not because they&apos;re not attractive,
              but because their photos don&apos;t show who they really are. We fix that.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-2" variants={staggerItem}>
              <Button size="xl" glow rightIcon={<ArrowRight className="w-5 h-5" />}>
                Fix My Dating Profile
              </Button>
              <Button variant="outline" size="xl">
                See Results
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4"
              variants={staggerItem}
            >
              <div className="flex items-center gap-2 text-sm text-warm-gray-light">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-gray-light">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{SOCIAL_PROOF.clientsHelped} Men Transformed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy" />

              {/* Placeholder image - replace with actual */}
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face"
                alt="Confident man with professional dating profile photo"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />

              {/* Stats Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-navy-dark/90 backdrop-blur-md rounded-xl p-4 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-warm-gray text-xs uppercase tracking-wider mb-1">
                      Match Rate Increase
                    </p>
                    <p className="text-3xl font-bold text-amber">
                      +{SOCIAL_PROOF.matchIncrease}
                    </p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div>
                    <p className="text-warm-gray text-xs uppercase tracking-wider mb-1">
                      Satisfaction
                    </p>
                    <p className="text-3xl font-bold text-cream">
                      {SOCIAL_PROOF.satisfactionRate}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-amber text-navy-dark px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4, type: "spring" }}
            >
              <Sparkles className="w-4 h-4" />
              AI-Enhanced
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
