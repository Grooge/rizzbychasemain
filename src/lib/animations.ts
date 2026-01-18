// Framer Motion animation variants for consistent animations across the site
import type { Variants, Transition } from "framer-motion";

// Type for easing functions
type EasingName = "easeOut" | "easeIn" | "easeInOut" | "linear";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as EasingName },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as EasingName },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as EasingName },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as EasingName },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as EasingName },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as EasingName },
  },
};

// For before/after slider
export const sliderReveal: Variants = {
  hidden: { width: "50%" },
  visible: {
    width: "50%",
    transition: { duration: 0.8, ease: "easeInOut" as EasingName },
  },
};

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  margin: "-100px",
  amount: 0.2 as const,
};

// Parallax effect for images
export const parallaxImage: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as EasingName },
  },
};

// Scale in with spring physics (for icons/badges/success states)
export const scaleInSpring: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

// Slide in from bottom (for form success messages)
export const slideInBottom: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as EasingName },
  },
};

// Floating animation (for hero elements)
export const floatingAnimation: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as EasingName,
    },
  },
};

// Counter animation helper (for animating numbers)
export const counterTransition: Transition = {
  duration: 2,
  ease: "easeOut" as EasingName,
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as EasingName },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" as EasingName },
  },
};
