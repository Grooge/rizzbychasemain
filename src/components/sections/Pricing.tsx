"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PRICING_TIERS } from "@/lib/constants";
import { formatPrice, cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Check, X, ArrowRight } from "lucide-react";

const easeOut: Easing = [0.25, 0.1, 0.25, 1];

export function Pricing() {
  const handleCheckout = async (priceId: string, tierId: string) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, variant: "homepage" }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: easeOut,
      },
    }),
  };

  return (
    <Section background="default" id="pricing">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        <SectionHeader>
          <SectionLabel>Pricing</SectionLabel>
          <SectionTitle>Invest in Your Dating Success</SectionTitle>
          <SectionSubtitle>
            Choose the package that fits your goals. All tiers include our 100% money-back guarantee.
          </SectionSubtitle>
        </SectionHeader>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
        {PRICING_TIERS.map((tier, i) => {
          const isPopular = tier.highlight;

          return (
            <motion.div
              key={tier.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                isPopular
                  ? "bg-navy-light border-2 border-amber shadow-[0_0_40px_rgba(217,119,6,0.15)] lg:scale-105 z-10"
                  : "bg-navy-light/50 border border-white/10 hover:border-white/20"
              )}
            >
              {/* Popular Badge */}
              {isPopular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Badge variant="amber" className="bg-amber text-navy-dark border-0 shadow-lg">
                    Most Popular
                  </Badge>
                </motion.div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-cream mb-2">{tier.name}</h3>
                <p className="text-warm-gray-light text-sm">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className={cn(
                  "font-bold",
                  isPopular ? "text-5xl text-amber" : "text-4xl text-cream"
                )}>
                  {formatPrice(tier.price)}
                </span>
                <span className="text-warm-gray ml-2">one-time</span>
              </div>

              {/* CTA Button */}
              <Button
                variant={isPopular ? "primary" : "outline"}
                size="lg"
                glow={isPopular}
                className="w-full mb-8"
                onClick={() => handleCheckout(tier.stripePriceId, tier.id)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {tier.cta}
              </Button>

              {/* Features */}
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider text-warm-gray font-semibold">
                  What&apos;s Included
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={cn(
                        "w-5 h-5 mt-0.5 shrink-0",
                        isPopular ? "text-amber" : "text-green-500"
                      )} />
                      <span className="text-cream text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.notIncluded && tier.notIncluded.length > 0 && (
                  <ul className="space-y-3 pt-4 border-t border-white/10">
                    {tier.notIncluded.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 mt-0.5 shrink-0 text-warm-gray" />
                        <span className="text-warm-gray text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Badges */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center items-center gap-8 text-warm-gray text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportSettings}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>100% Money-Back Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Secure Checkout via Stripe</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Instant Access After Payment</span>
        </div>
      </motion.div>
    </Section>
  );
}
