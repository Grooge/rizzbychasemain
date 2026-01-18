"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

// Placeholder data - replace with real before/after pairs
const transformations = [
  {
    id: 1,
    before: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      caption: "Bathroom selfie, harsh lighting",
    },
    after: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      caption: "Natural light, confident pose",
    },
    stats: "+420% matches",
  },
  {
    id: 2,
    before: {
      src: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=500&fit=crop",
      caption: "Blurry group crop",
    },
    after: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      caption: "Clear, engaging portrait",
    },
    stats: "+380% matches",
  },
  {
    id: 3,
    before: {
      src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop",
      caption: "Dark, unflattering angle",
    },
    after: {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      caption: "Professional quality candid",
    },
    stats: "+290% matches",
  },
];

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <Section background="darker" id="results">
      <SectionHeader>
        <SectionLabel>Real Results</SectionLabel>
        <SectionTitle>See the Transformation</SectionTitle>
        <SectionSubtitle>
          These are real clients who went from struggling to thriving.
          Drag the slider to see the difference.
        </SectionSubtitle>
      </SectionHeader>

      {/* Main Comparison Slider */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Before Image */}
          <div className="absolute inset-0">
            <Image
              src={transformations[activeIndex].before.src}
              alt="Before transformation"
              fill
              className="object-cover grayscale opacity-70"
            />
            <div className="absolute top-4 left-4 z-20">
              <Badge className="bg-red-500/90 text-white border-0">Before</Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-cream text-sm">{transformations[activeIndex].before.caption}</p>
            </div>
          </div>

          {/* After Image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={transformations[activeIndex].after.src}
              alt="After transformation"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 z-20">
              <Badge variant="amber" className="bg-amber text-navy-dark border-0">After</Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-sm p-3 rounded-lg border-l-4 border-amber">
              <p className="text-cream text-sm">{transformations[activeIndex].after.caption}</p>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-30 cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* Invisible Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
          />

          {/* Stats Badge */}
          <div className="absolute top-4 right-4 z-20 bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
            {transformations[activeIndex].stats}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-4">
        {transformations.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              setSliderPosition(50);
            }}
            className={cn(
              "relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all",
              activeIndex === index
                ? "border-amber scale-105"
                : "border-white/10 opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={item.after.src}
              alt={`Transformation ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-4xl font-bold text-amber mb-2">2,000+</p>
          <p className="text-warm-gray text-sm">Men Transformed</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-cream mb-2">347%</p>
          <p className="text-warm-gray text-sm">Avg. Match Increase</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-cream mb-2">48hr</p>
          <p className="text-warm-gray text-sm">Average Turnaround</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-green-500 mb-2">99.8%</p>
          <p className="text-warm-gray text-sm">Satisfaction Rate</p>
        </div>
      </div>
    </Section>
  );
}
