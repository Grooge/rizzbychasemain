"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { FormField } from "@/components/ui/FormField";
import {
  Mail,
  Clock,
  CheckCircle,
  Send,
  MessageSquare,
  ArrowRight,
  ChevronDown,
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

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.website) {
      return;
    }

    // Simulate form submission / create mailto link
    const subject = encodeURIComponent(
      `[Rizz by Chase] ${data.subject ? CONTACT_SUBJECTS.find((s) => s.value === data.subject)?.label : "Contact Form"}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:chase@rizzbychase.com?subject=${subject}&body=${body}`;

    // Show success state
    setIsSubmitted(true);
    reset();
  };

  // Get first 3 FAQs for the teaser
  const faqTeaser = FAQS.slice(0, 3);

  return (
    <div className="min-h-screen bg-navy-dark pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <Container size="lg">
        {/* Hero */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={scaleInSpring} className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-amber" />
            </div>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg text-warm-gray-light max-w-xl mx-auto"
          >
            Have a question about our service? We&apos;d love to hear from you.
            Send us a message and we&apos;ll respond as soon as possible.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <div className="bg-navy-light/50 rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-cream mb-6">
                Send a Message
              </h2>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      variants={scaleInSpring}
                      initial="hidden"
                      animate="visible"
                      className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-cream mb-2">
                      Opening your email client...
                    </h3>
                    <p className="text-warm-gray mb-6">
                      Complete sending the email to reach us. We&apos;ll get back to
                      you within 24 hours.
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      label="Name"
                      htmlFor="name"
                      error={errors.name?.message}
                      required
                    >
                      <Input
                        id="name"
                        placeholder="Your name"
                        error={!!errors.name}
                        {...register("name")}
                      />
                    </FormField>

                    <FormField
                      label="Email"
                      htmlFor="email"
                      error={errors.email?.message}
                      required
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        error={!!errors.email}
                        {...register("email")}
                      />
                    </FormField>

                    <FormField
                      label="Subject"
                      htmlFor="subject"
                      helperText="Select the topic that best fits your inquiry"
                    >
                      <Select
                        id="subject"
                        placeholder="Select a subject"
                        options={CONTACT_SUBJECTS.map((s) => ({
                          value: s.value,
                          label: s.label,
                        }))}
                        {...register("subject")}
                      />
                    </FormField>

                    <FormField
                      label="Message"
                      htmlFor="message"
                      error={errors.message?.message}
                      required
                    >
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        error={!!errors.message}
                        minRows={5}
                        {...register("message")}
                      />
                    </FormField>

                    {/* Honeypot field */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-5 h-5" />}
                    >
                      Send Message
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Email Card */}
            <motion.div
              variants={staggerItem}
              className="bg-navy-light/50 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cream mb-1">
                    Email Us Directly
                  </h3>
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
              className="bg-navy-light/50 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cream mb-1">
                    Response Time
                  </h3>
                  <p className="text-warm-gray-light">
                    We typically respond within <span className="text-cream font-medium">24 hours</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              variants={staggerItem}
              className="bg-navy-light/50 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-cream mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/rizzbychase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-warm-gray hover:text-amber hover:bg-navy-light transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/rizzbychase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-warm-gray hover:text-amber hover:bg-navy-light transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@rizzbychase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-warm-gray hover:text-amber hover:bg-navy-light transition-all"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Best For Card */}
            <motion.div
              variants={staggerItem}
              className="bg-navy-light/50 rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-cream mb-4">
                Best Reasons to Reach Out
              </h3>
              <ul className="space-y-3 text-warm-gray-light">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Questions about our service
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Support with your order
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Partnership opportunities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Media and press inquiries
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Teaser Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-amber" />
              <span className="text-amber font-medium uppercase tracking-wider text-sm">
                Before You Reach Out
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            {faqTeaser.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy-light/50 rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-cream pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-warm-gray shrink-0 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-warm-gray-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/#faq">
                View All FAQs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.section>
      </Container>
    </div>
  );
}
