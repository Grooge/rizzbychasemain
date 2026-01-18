"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "@/components/ui/FormField";
import { Select } from "@/components/ui/Select";
import {
  Mail,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  ArrowRight,
  Twitter,
  Instagram,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleInSpring,
  viewportSettings,
} from "@/lib/animations";
import {
  contactFormSchema,
  type ContactFormData,
  CONTACT_SUBJECTS,
} from "@/lib/validations/contact";
import Link from "next/link";
import { FAQS } from "@/lib/constants";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/rizzbychase",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rizzbychase",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@rizzbychase",
    icon: TikTokIcon,
  },
];

// Select a few relevant FAQs for the teaser
const faqTeaser = FAQS.slice(0, 3);

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: undefined,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // For now, use mailto as fallback
    const subject = data.subject
      ? CONTACT_SUBJECTS.find((s) => s.value === data.subject)?.label
      : "General Inquiry";
    const mailtoLink = `mailto:chase@rizzbychase.com?subject=${encodeURIComponent(
      `[Rizz by Chase] ${subject}: From ${data.name}`
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    window.location.href = mailtoLink;
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-20">
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
              <Mail className="w-10 h-10 text-amber" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6"
            >
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                Touch
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-warm-gray leading-relaxed"
            >
              Have questions about our service? Want to learn more before getting
              started? We&apos;re here to help.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form & Info Section */}
      <Section className="py-12 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
            >
              <div className="p-6 md:p-8 rounded-2xl bg-navy-light/50 border border-white/10">
                <h2 className="text-2xl font-bold text-cream mb-6">
                  Send us a message
                </h2>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={scaleInSpring}
                      className="py-12 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-cream mb-2">
                        Message Ready!
                      </h3>
                      <p className="text-warm-gray mb-6">
                        Your email client should open with your message. If it
                        didn&apos;t, you can email us directly at{" "}
                        <a
                          href="mailto:chase@rizzbychase.com"
                          className="text-amber hover:text-amber-light"
                        >
                          chase@rizzbychase.com
                        </a>
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Honeypot field - hidden from users */}
                      <input
                        type="text"
                        {...register("website")}
                        className="absolute -left-[9999px]"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <motion.div variants={staggerItem}>
                        <FormField
                          label="Name"
                          error={errors.name?.message}
                          required
                        >
                          <Input
                            {...register("name")}
                            placeholder="Your name"
                            error={!!errors.name}
                          />
                        </FormField>
                      </motion.div>

                      <motion.div variants={staggerItem}>
                        <FormField
                          label="Email"
                          error={errors.email?.message}
                          required
                        >
                          <Input
                            {...register("email")}
                            type="email"
                            placeholder="you@example.com"
                            error={!!errors.email}
                          />
                        </FormField>
                      </motion.div>

                      <motion.div variants={staggerItem}>
                        <FormField label="Subject" error={errors.subject?.message}>
                          <Select
                            {...register("subject")}
                            options={CONTACT_SUBJECTS.map((s) => ({
                              value: s.value,
                              label: s.label,
                            }))}
                            placeholder="Select a topic (optional)"
                          />
                        </FormField>
                      </motion.div>

                      <motion.div variants={staggerItem}>
                        <FormField
                          label="Message"
                          error={errors.message?.message}
                          required
                        >
                          <Textarea
                            {...register("message")}
                            placeholder="How can we help you?"
                            rows={5}
                            error={!!errors.message}
                          />
                        </FormField>
                      </motion.div>

                      <motion.div variants={staggerItem}>
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          isLoading={isSubmitting}
                          rightIcon={<Send className="w-5 h-5" />}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Email Card */}
              <motion.div
                variants={staggerItem}
                className="p-6 rounded-xl bg-navy-light/30 border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 border border-amber/20">
                    <Mail className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-cream mb-1">Email Us</h3>
                    <a
                      href="mailto:chase@rizzbychase.com"
                      className="text-amber hover:text-amber-light transition-colors text-lg"
                    >
                      chase@rizzbychase.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Response Time Card */}
              <motion.div
                variants={staggerItem}
                className="p-6 rounded-xl bg-navy-light/30 border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 border border-amber/20">
                    <Clock className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-cream mb-1">Response Time</h3>
                    <p className="text-warm-gray">
                      We typically respond within <span className="text-cream">24 hours</span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={staggerItem}
                className="p-6 rounded-xl bg-navy-light/30 border border-white/5"
              >
                <h3 className="font-bold text-cream mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy-light hover:bg-amber/10 border border-white/10 hover:border-amber/20 transition-all duration-200 group"
                    >
                      <social.icon className="w-5 h-5 text-warm-gray group-hover:text-amber transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Best For */}
              <motion.div
                variants={staggerItem}
                className="p-6 rounded-xl bg-gradient-to-br from-amber/5 to-transparent border border-amber/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber/10 border border-amber/20">
                    <MessageSquare className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-bold text-cream mb-3">Best For</h3>
                    <ul className="space-y-2 text-warm-gray">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                        Questions about our service
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                        Support with your order
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                        Partnership opportunities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                        Media and press inquiries
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ Teaser Section */}
      <Section className="py-16 md:py-24 bg-navy-light/30">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cream mb-4">
                Before You Reach Out...
              </h2>
              <p className="text-warm-gray">
                You might find your answer in our frequently asked questions
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {faqTeaser.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="p-6 rounded-xl bg-navy-light border border-white/10 hover:border-amber/20 transition-colors"
                >
                  <h3 className="font-bold text-cream mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-warm-gray text-sm line-clamp-3">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/#faq">
                  View All FAQs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
