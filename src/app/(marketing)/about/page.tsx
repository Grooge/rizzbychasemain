"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  Heart,
  Target,
  Handshake,
  Zap,
  ArrowRight,
  Quote,
  CheckCircle,
} from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  scaleInSpring,
  viewportSettings,
} from "@/lib/animations";
import { SOCIAL_PROOF, TESTIMONIALS } from "@/lib/constants";

const stats = [
  { label: "Clients Helped", value: SOCIAL_PROOF.clientsHelped },
  { label: "Avg Match Increase", value: SOCIAL_PROOF.matchIncrease },
  { label: "Satisfaction Rate", value: SOCIAL_PROOF.satisfactionRate },
];

const values = [
  {
    icon: Heart,
    title: "Authenticity First",
    description:
      "Every photo looks like you. Not some AI-generated version of you. Just you, on your best day.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by your match rate, not by how many photos we deliver. Your results are our results.",
  },
  {
    icon: Handshake,
    title: "Your Win Is My Win",
    description:
      "I only succeed when you succeed. That's why we have unlimited revisions and a money-back guarantee.",
  },
  {
    icon: Zap,
    title: "No BS",
    description:
      "No overselling, no false promises. Just honest advice and real results. What you see is what you get.",
  },
];

const storyChapters = [
  {
    title: "The Struggle",
    content: `A few years ago, I was exactly where you might be now. Good job in tech, worked out regularly, friends told me I was "a catch." But my dating app results told a different story. Two, maybe three matches a week if I was lucky. And most of those went nowhere.

I tried everything. New bios, different prompts, buying Hinge roses. Nothing worked. I started to think maybe online dating just wasn't for me.`,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face",
    imageAlt: "Young professional man looking at phone",
  },
  {
    title: "The Discovery",
    content: `Then I started digging into the research. I analyzed thousands of successful profiles, studied dating app algorithms, and experimented relentlessly on my own profile.

The answer was staring me in the face the whole time: it was always about the photos. Not my bio. Not my prompts. The photos. 90% of guys are unknowingly sabotaging themselves with bad lighting, boring selfies, and photos that don't tell a story.

Once I figured out what actually worked, everything changed. My match rate went from 2-3 per week to 20+. And more importantly, the quality of matches improved dramatically.`,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop&crop=face",
    imageAlt: "Confident man smiling",
  },
  {
    title: "The Mission",
    content: `Friends started noticing. They asked what changed. When I showed them the before and after of my profile, they wanted the same transformation.

So I built a system. One that combines AI technology with human expertise to create photos that actually work. Not fake, not over-the-top—just you on your best day, in scenarios that match who you actually are.

Now I help other guys skip the months of trial and error and get the results they deserve. Because every guy deserves a fair shot at finding someone great.`,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=face",
    imageAlt: "Happy man outdoors",
  },
];

// Testimonial rotation interval (in ms) - 6 seconds for comfortable reading
const TESTIMONIAL_INTERVAL = 6000;

export default function AboutPage() {
  // Rotating testimonials state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, TESTIMONIAL_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef}>
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/10 border border-amber/20 text-amber text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                The guy behind Rizz by Chase
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6"
              >
                Hey, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                  Chase
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-warm-gray leading-relaxed mb-8"
              >
                I help men get better dating results through better photos. Not
                fake photos. Not obviously AI-generated photos. Real-looking
                photos that show who you actually are—just on your best day.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button asChild size="lg" glow>
                  <Link href="/#pricing">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#story">Read My Story</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative"
            >
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop&crop=face"
                  alt="Chase - Founder of Rizz by Chase"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 p-4 rounded-xl bg-navy-light/90 backdrop-blur-sm border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber/10">
                    <CheckCircle className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-cream">
                      {SOCIAL_PROOF.clientsHelped}
                    </p>
                    <p className="text-sm text-warm-gray">Clients helped</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>
      </div>

      {/* Stats Bar */}
      <Section className="py-8 bg-navy-light/50 border-y border-white/5">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber mb-1">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-warm-gray">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section id="story" className="py-20 md:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              My Story
            </h2>
            <p className="text-lg text-warm-gray">
              How I went from struggling with dating apps to helping thousands of
              guys get the results they deserve.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {storyChapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="inline-flex items-center gap-2 text-amber font-medium mb-4">
                    <span className="w-8 h-px bg-amber" />
                    Chapter {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-cream mb-6">
                    {chapter.title}
                  </h3>
                  <div className="prose prose-lg prose-invert">
                    {chapter.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-warm-gray leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={index % 2 === 0 ? slideInRight : slideInLeft}
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-amber/20" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Rotating Testimonials */}
      <Section className="py-16 md:py-24 bg-navy-light/30">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h3 className="text-lg text-warm-gray">What clients are saying</h3>
          </motion.div>

          <div className="relative h-[280px] md:h-[240px]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, y: -50, scale: 0.95, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: 50, scale: 0.95, rotateX: 15 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-navy-light to-navy border border-white/10 shadow-xl"
                style={{ transformPerspective: 1000 }}
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-amber/20" />

                <div className="relative h-full flex flex-col justify-between">
                  <p className="text-xl md:text-2xl text-cream font-medium leading-relaxed">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-14 h-14 rounded-full bg-navy-light border border-white/10 flex items-center justify-center text-amber font-bold text-lg">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-cream">{currentTestimonial.name}</p>
                      <p className="text-warm-gray">{currentTestimonial.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                        {currentTestimonial.matchIncrease} matches
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? "bg-amber w-6"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="py-20 md:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              What I Believe
            </h2>
            <p className="text-lg text-warm-gray">
              The principles that guide everything we do at Rizz by Chase.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group p-6 md:p-8 rounded-2xl bg-navy-light/50 border border-white/5 hover:border-amber/20 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber/10 border border-amber/20 group-hover:bg-amber/20 transition-colors">
                    <value.icon className="w-7 h-7 text-amber" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cream mb-2">
                      {value.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="py-20 md:py-32">
        <Container size="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-amber/10 to-transparent border border-amber/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Transform Your Profile?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-xl mx-auto">
              Join thousands of guys who&apos;ve already upgraded their dating game.
              Your future matches are waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" glow>
                <Link href="/#pricing">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
