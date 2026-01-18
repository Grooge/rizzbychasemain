export const SITE_CONFIG = {
  name: "Rizz by Chase",
  tagline: "Dating Profile Photo Transformation",
  description:
    "Get dating photos that actually work. We help men get better dating results by creating natural, high-performing photos that reflect who you actually are.",
  url: "https://rizzbychase.com",
  email: "chase@rizzbychase.com",
};

export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 497,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || "",
    description: "Perfect for getting started with a quick refresh",
    features: [
      "3 final images",
      "2 revision rounds",
      "48-hour turnaround",
      "Basic scenario selection",
      "Email support",
    ],
    notIncluded: [
      "Unlimited revisions",
      "Strategy call",
      "Priority support",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    price: 1297,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "",
    description: "The complete transformation for serious results",
    features: [
      "6 final images",
      "Unlimited revisions (5 days)",
      "24-hour turnaround",
      "Full scenario catalog access",
      "30-min strategy call with Chase",
      "Bio optimization guide",
      "Priority email support",
    ],
    notIncluded: [],
    highlight: true,
    popular: true,
    cta: "Get Pro Access",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2497,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID || "",
    description: "White-glove service for maximum results",
    features: [
      "10 final images",
      "Full week of iterations",
      "Same-day initial delivery",
      "VIP scenario customization",
      "1-on-1 strategy session with Chase",
      "Complete profile rewrite",
      "Dating app account review",
      "Priority support via text",
      "Lifetime revision credits",
    ],
    notIncluded: [],
    highlight: false,
    cta: "Apply for Premium",
  },
] as const;

export const GUARANTEES = [
  {
    title: "100% Money-Back Guarantee",
    description:
      "If you don't see at least a 3x increase in your match rate within 30 days, we'll refund every penny. No questions asked.",
  },
  {
    title: "Unlimited Revisions",
    description:
      "We iterate until you're completely satisfied. Your photos need to feel authentically you.",
  },
  {
    title: "Authenticity Promise",
    description:
      "Every photo looks natural and real. No obvious AI artifacts, no uncanny valley.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Submit Your Photos",
    description:
      "Upload 5-10 of your existing photos. We'll analyze what's working and what's holding you back.",
    icon: "upload",
  },
  {
    number: 2,
    title: "Choose Your Scenarios",
    description:
      "Select from our catalog of lifestyle scenarios that match who you actually are.",
    icon: "gallery",
  },
  {
    number: 3,
    title: "AI + Human Expertise",
    description:
      "Our AI generates options, but Chase personally reviews and iterates until every photo is perfect.",
    icon: "sparkles",
  },
  {
    number: 4,
    title: "Review & Iterate",
    description:
      "You get unlimited revisions. We keep refining until you're 100% happy with the results.",
    icon: "refresh",
  },
  {
    number: 5,
    title: "Transform Your Profile",
    description:
      "Upload your new photos and watch your match rate soar. We guarantee results.",
    icon: "rocket",
  },
];

export const PROBLEMS = [
  {
    title: "Bad Lighting",
    description:
      "Harsh shadows, dim rooms, and unflattering angles make you look worse than you actually are.",
    icon: "sun-dim",
  },
  {
    title: "Boring Selfies",
    description:
      "Mirror selfies and static poses signal low effort and limited social life.",
    icon: "camera-off",
  },
  {
    title: "No Story",
    description:
      "Your photos don't show who you are, what you do, or what dating you would be like.",
    icon: "book-x",
  },
];

export const SOCIAL_PROOF = {
  matchIncrease: "347%",
  clientsHelped: "2,000+",
  satisfactionRate: "99.8%",
  averageTimeToResults: "48 hours",
};

export const FAQS = [
  {
    question: "How is this different from AI headshot generators?",
    answer:
      "Most AI tools create photos that look obviously fake. We combine AI with human expertise - Chase personally reviews every photo and iterates until it looks completely natural. The result is photos that look like a friend with a nice camera took them, not like AI generated them.",
  },
  {
    question: "Will the photos look like me?",
    answer:
      "Absolutely. We enhance your existing photos to show your best self, not create a different person. Every client says their final photos look like them 'on their best day.' We reject anything that doesn't look authentic.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most clients receive their first batch within 24-48 hours. Pro and Premium tiers include faster turnaround and more revision time.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "You get unlimited revisions within your package timeframe. If you're still not satisfied, we offer a full money-back guarantee. We've never had a client who wasn't happy after revisions.",
  },
  {
    question: "What photos should I submit?",
    answer:
      "We need 5-10 photos showing your face clearly from different angles. Good lighting helps but isn't required - part of our job is working with what you have. Selfies, candid shots, even old photos work.",
  },
  {
    question: "Which dating apps does this work for?",
    answer:
      "Our photos are optimized for all major dating apps including Hinge, Tinder, Bumble, and The League. The Pro and Premium tiers include app-specific guidance.",
  },
  {
    question: "Is this just for online dating?",
    answer:
      "While we optimize for dating apps, clients use their photos for LinkedIn, social media, and professional networking too. Great photos help everywhere.",
  },
  {
    question: "How do I know this isn't a scam?",
    answer:
      "We have hundreds of verified testimonials, before/after examples, and a 100% money-back guarantee. You can also see Chase's content on social media where he shares the process openly.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus R.",
    role: "Software Engineer",
    image: "/testimonials/marcus.jpg",
    quote:
      "I went from maybe 2 matches a week to 12+. The photos look exactly like me, just... better. Chase nailed the scenarios to match my actual lifestyle.",
    rating: 5,
    matchIncrease: "+650%",
  },
  {
    id: 2,
    name: "David K.",
    role: "Product Manager",
    image: "/testimonials/david.jpg",
    quote:
      "I was skeptical about AI photos looking fake. These are indistinguishable from professional shots. Best investment I've made in my dating life.",
    rating: 5,
    matchIncrease: "+420%",
  },
  {
    id: 3,
    name: "James L.",
    role: "Entrepreneur",
    image: "/testimonials/james.jpg",
    quote:
      "The Premium package was worth every penny. Chase's strategy session completely changed how I think about my profile. Dating a model now.",
    rating: 5,
    matchIncrease: "+380%",
  },
  {
    id: 4,
    name: "Alex T.",
    role: "Finance Analyst",
    image: "/testimonials/alex.jpg",
    quote:
      "Lost 40lbs but my old photos didn't reflect that. Rizz by Chase helped me show the new me. Match rate went through the roof.",
    rating: 5,
    matchIncrease: "+520%",
  },
  {
    id: 5,
    name: "Ryan M.",
    role: "Doctor",
    image: "/testimonials/ryan.jpg",
    quote:
      "No time for photoshoots between shifts. Got professional-quality photos without leaving my apartment. The travel scenarios look incredibly real.",
    rating: 5,
    matchIncrease: "+290%",
  },
  {
    id: 6,
    name: "Chris P.",
    role: "Consultant",
    image: "/testimonials/chris.jpg",
    quote:
      "I travel constantly for work, no time for dating photos. These photos captured the lifestyle I actually live. Quality of matches improved dramatically.",
    rating: 5,
    matchIncrease: "+340%",
  },
];
