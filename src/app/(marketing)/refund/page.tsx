"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare,
  Search,
  CreditCard,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleInSpring,
  viewportSettings,
} from "@/lib/animations";
import Link from "next/link";

const eligibleConditions = [
  {
    title: "Completed all revision rounds",
    description: "You've used all available revisions included in your package",
  },
  {
    title: "Still not satisfied with results",
    description: "Despite our best efforts across multiple iterations",
  },
  {
    title: "Request within 30 days",
    description: "From the delivery date of your final images",
  },
];

const notEligibleConditions = [
  {
    title: "Watermark removal requested",
    description:
      "Requesting watermark-free versions signifies acceptance of the work",
  },
  {
    title: "Incomplete revision process",
    description: "Must complete all available revision rounds first",
  },
  {
    title: "Request after 30 days",
    description: "Refund requests must be made within 30 days of final delivery",
  },
];

const refundSteps = [
  {
    step: 1,
    title: "Email Us",
    description: "Send your refund request to chase@rizzbychase.com",
    icon: Mail,
  },
  {
    step: 2,
    title: "We Review",
    description: "We'll verify eligibility within 24-48 hours",
    icon: Search,
  },
  {
    step: 3,
    title: "Refund Processed",
    description: "Funds returned within 5-10 business days",
    icon: CreditCard,
  },
];

const timelineItems = [
  { stage: "Request Received", time: "Day 1" },
  { stage: "Eligibility Review", time: "1-2 business days" },
  { stage: "Refund Initiated", time: "Upon approval" },
  { stage: "Funds Returned", time: "5-10 business days" },
];

export default function RefundPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={scaleInSpring}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/30 mb-8"
            >
              <ShieldCheck className="w-10 h-10 text-amber" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6"
            >
              Our Satisfaction{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                Guarantee
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-warm-gray leading-relaxed"
            >
              We&apos;re confident you&apos;ll love your results. If not, we&apos;ll make it
              right.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Main Guarantee Card */}
      <Section className="py-12">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-amber/20 overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">
                100% Money-Back Guarantee
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Complete all revision rounds. If you&apos;re still not satisfied with
                your photos, we&apos;ll refund every penny. No hoops, no hassle.
              </p>
              <p className="text-amber font-medium text-lg">
                That&apos;s how confident we are in our work.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Eligibility Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Eligible */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-cream">
                  Eligible for Refund
                </h3>
              </div>

              <div className="space-y-4">
                {eligibleConditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex gap-4 p-4 rounded-xl bg-navy-light/50 border border-white/5"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-cream">{condition.title}</p>
                      <p className="text-sm text-warm-gray mt-1">
                        {condition.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Not Eligible */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-cream">
                  Not Eligible
                </h3>
              </div>

              <div className="space-y-4">
                {notEligibleConditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex gap-4 p-4 rounded-xl bg-navy-light/50 border border-white/5"
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-cream">{condition.title}</p>
                      <p className="text-sm text-warm-gray mt-1">
                        {condition.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="mt-12 p-6 rounded-xl bg-amber/5 border border-amber/20"
          >
            <p className="text-center text-warm-gray">
              <span className="font-medium text-amber">Important:</span> All
              deliverables include watermarks until you accept the work. Requesting
              watermark-free versions signifies your acceptance and completes the
              transaction.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* How to Request Section */}
      <Section className="py-16 md:py-24 bg-navy-light/30">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-cream mb-4"
            >
              How to Request a Refund
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-warm-gray text-lg">
              Simple, straightforward, no runaround.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {refundSteps.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative text-center"
              >
                {/* Connector line */}
                {index < refundSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber/50 to-transparent" />
                )}

                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-navy-light border border-white/10 mb-6">
                  <item.icon className="w-10 h-10 text-amber" />
                </div>

                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber text-navy-dark font-bold text-sm mb-4">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-cream mb-2">{item.title}</h3>
                <p className="text-warm-gray">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="py-16 md:py-24">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber" />
                <span className="text-amber font-medium">Timeline</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cream">
                Refund Timeline
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative pl-8 border-l-2 border-amber/30"
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="relative pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-amber border-4 border-navy-dark" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-lg bg-navy-light/50 border border-white/5">
                    <span className="font-medium text-cream">{item.stage}</span>
                    <span className="text-sm text-amber">{item.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-center text-sm text-warm-gray"
            >
              * Processing times may vary depending on your bank or payment provider.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 md:py-24 bg-navy-light/30">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-amber" />
                <span className="text-amber font-medium">Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-cream">
                Refund FAQs
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="p-6 rounded-xl bg-navy-light border border-white/10">
                <h3 className="font-bold text-cream mb-2">
                  Why do you use watermarks?
                </h3>
                <p className="text-warm-gray">
                  Watermarks protect both parties. They allow you to review and
                  request changes to your photos before finalizing. Once you&apos;re
                  happy and request the watermark-free versions, you&apos;ve officially
                  accepted the work.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-navy-light border border-white/10">
                <h3 className="font-bold text-cream mb-2">
                  What if I&apos;m unhappy but haven&apos;t used all revisions?
                </h3>
                <p className="text-warm-gray">
                  Please complete all available revision rounds first. We want the
                  chance to get it right. Most clients are thrilled after revisions.
                  If you&apos;ve used all revisions and are still unsatisfied, you
                  qualify for a refund.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-navy-light border border-white/10">
                <h3 className="font-bold text-cream mb-2">
                  What information do I need to provide?
                </h3>
                <p className="text-warm-gray">
                  Email us at chase@rizzbychase.com with your order number, email
                  address used for purchase, and a brief explanation of why you&apos;re
                  requesting a refund. We&apos;ll take it from there.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-navy-light border border-white/10">
                <h3 className="font-bold text-cream mb-2">
                  Can I get a partial refund?
                </h3>
                <p className="text-warm-gray">
                  We offer full refunds only. If you&apos;ve completed the revision
                  process and aren&apos;t satisfied, you&apos;ll receive a complete refund of
                  your purchase amount.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section className="py-16 md:py-24">
        <Container size="sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">
              Questions About Refunds?
            </h2>
            <p className="text-warm-gray mb-8">
              We respond to all refund inquiries within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:chase@rizzbychase.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Page
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
