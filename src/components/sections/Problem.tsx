"use client";

import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { PROBLEMS } from "@/lib/constants";
import { Sun, CameraOff, BookX } from "lucide-react";

const iconMap = {
  "sun-dim": Sun,
  "camera-off": CameraOff,
  "book-x": BookX,
};

export function Problem() {
  return (
    <Section background="dark" id="problem">
      <SectionHeader>
        <SectionLabel>The Problem</SectionLabel>
        <SectionTitle>Your Photos Are Holding You Back</SectionTitle>
        <SectionSubtitle>
          You&apos;re not getting matches because your photos don&apos;t show who you actually are.
          Here&apos;s what&apos;s going wrong.
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {PROBLEMS.map((problem, index) => {
          const Icon = iconMap[problem.icon as keyof typeof iconMap];
          return (
            <Card
              key={index}
              variant="outlined"
              hover
              className="group border-red-500/20 hover:border-red-500/40"
            >
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-cream mb-3">{problem.title}</h3>
              <p className="text-warm-gray-light leading-relaxed">{problem.description}</p>
            </Card>
          );
        })}
      </div>

      {/* Visual Comparison */}
      <div className="mt-16 p-8 rounded-2xl bg-navy-light/50 border border-white/5">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-cream mb-4">The Digital Disconnect</h3>
            <p className="text-warm-gray-light mb-6 leading-relaxed">
              You might be a 9 in real life, but if your photos make you look like a 5,
              that&apos;s how the algorithm treats you. Dating apps are a visual-first game,
              and most men are losing before they even start.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                <div>
                  <p className="text-cream font-medium">Bad photos = invisible to quality matches</p>
                  <p className="text-warm-gray text-sm">You&apos;re being filtered out before anyone sees your bio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                <div>
                  <p className="text-cream font-medium">Low match quality = wasted time</p>
                  <p className="text-warm-gray text-sm">Hours of swiping for underwhelming results</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                <div>
                  <p className="text-cream font-medium">No story = no connection</p>
                  <p className="text-warm-gray text-sm">Photos that don&apos;t show who you are or what you&apos;re about</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Gap Visualization */}
            <div className="bg-navy-dark rounded-xl p-6 border border-white/10">
              <div className="flex justify-between items-end mb-4">
                <span className="text-warm-gray text-sm">Value Gap Analysis</span>
                <span className="text-red-400 font-bold text-sm">-60% Lost Opportunity</span>
              </div>
              <div className="flex items-end justify-around h-48 gap-8">
                {/* Real Value Bar */}
                <div className="flex flex-col items-center gap-2 w-24">
                  <span className="text-amber font-bold text-sm">High</span>
                  <div className="w-full bg-gradient-to-t from-amber/20 to-amber rounded-t-lg h-40 relative">
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20" />
                  </div>
                  <span className="text-cream text-sm font-medium">Real Value</span>
                </div>
                {/* Photo Value Bar */}
                <div className="flex flex-col items-center gap-2 w-24">
                  <span className="text-red-400 font-bold text-sm">Low</span>
                  <div className="w-full bg-warm-gray/50 rounded-t-lg h-16 relative">
                    {/* Dotted line showing gap */}
                    <div className="absolute -top-24 left-1/2 h-24 border-l-2 border-dashed border-red-400/50" />
                  </div>
                  <span className="text-warm-gray text-sm">Photo Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
