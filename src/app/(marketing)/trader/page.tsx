import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { traderVariant as content } from "@/content/variants/trader";
import { TrendingUp, ArrowRight, Hourglass, EyeOff, BarChart3, Diamond, Zap, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function TraderPage() {
  return (
    <>
      {/* Ticker Tape */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-black/40 backdrop-blur-sm border-b border-white/5 py-1.5 overflow-hidden">
        <div className="inline-flex animate-marquee text-xs font-mono text-warm-gray">
          {/* First set of items */}
          <div className="flex shrink-0">
            <span className="flex items-center gap-1 px-4">MATCHES <span className="text-green-500">▲ 300%</span></span>
            <span className="flex items-center gap-1 px-4">RESPONSE_RATE <span className="text-green-500">▲ 12%</span></span>
            <span className="flex items-center gap-1 px-4">DATE_CONVERSION <span className="text-green-500">▲ 85%</span></span>
            <span className="flex items-center gap-1 px-4">TIME_WASTED <span className="text-red-500">▼ 95%</span></span>
            <span className="flex items-center gap-1 px-4">ROI <span className="text-green-500">▲ HIGH</span></span>
            <span className="flex items-center gap-1 px-4">SWIPE_EFFICIENCY <span className="text-green-500">▲ 250%</span></span>
            <span className="flex items-center gap-1 px-4">QUALITY_MATCHES <span className="text-green-500">▲ 180%</span></span>
            <span className="flex items-center gap-1 px-4">PROFILE_RANK <span className="text-amber">TOP 1%</span></span>
            <span className="flex items-center gap-1 px-4">TIME_TO_DATE <span className="text-green-500">▼ 70%</span></span>
            <span className="flex items-center gap-1 px-4">GHOST_RATE <span className="text-red-500">▼ 88%</span></span>
            <span className="flex items-center gap-1 px-4">CONFIDENCE <span className="text-green-500">▲ MAX</span></span>
            <span className="flex items-center gap-1 px-4">LIKE_RATIO <span className="text-green-500">▲ 420%</span></span>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0" aria-hidden="true">
            <span className="flex items-center gap-1 px-4">MATCHES <span className="text-green-500">▲ 300%</span></span>
            <span className="flex items-center gap-1 px-4">RESPONSE_RATE <span className="text-green-500">▲ 12%</span></span>
            <span className="flex items-center gap-1 px-4">DATE_CONVERSION <span className="text-green-500">▲ 85%</span></span>
            <span className="flex items-center gap-1 px-4">TIME_WASTED <span className="text-red-500">▼ 95%</span></span>
            <span className="flex items-center gap-1 px-4">ROI <span className="text-green-500">▲ HIGH</span></span>
            <span className="flex items-center gap-1 px-4">SWIPE_EFFICIENCY <span className="text-green-500">▲ 250%</span></span>
            <span className="flex items-center gap-1 px-4">QUALITY_MATCHES <span className="text-green-500">▲ 180%</span></span>
            <span className="flex items-center gap-1 px-4">PROFILE_RANK <span className="text-amber">TOP 1%</span></span>
            <span className="flex items-center gap-1 px-4">TIME_TO_DATE <span className="text-green-500">▼ 70%</span></span>
            <span className="flex items-center gap-1 px-4">GHOST_RATE <span className="text-red-500">▼ 88%</span></span>
            <span className="flex items-center gap-1 px-4">CONFIDENCE <span className="text-green-500">▲ MAX</span></span>
            <span className="flex items-center gap-1 px-4">LIKE_RATIO <span className="text-green-500">▲ 420%</span></span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-navy-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-amber/10 to-blue-900/10 opacity-30 blur-[100px]" />

        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <Badge variant="pulse">
                <TrendingUp className="w-3 h-3" />
                {content.hero.badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                <span className="text-cream">{content.hero.headline}</span>{" "}
                <span className="gradient-text">{content.hero.subheadline}</span>
              </h1>

              <p className="text-lg text-warm-gray-light max-w-xl">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="xl" glow rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {content.hero.primaryCta}
                </Button>
                <Button variant="ghost" size="xl" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {content.hero.secondaryCta}
                </Button>
              </div>
            </div>

            {/* Hero Visual - Dashboard Style */}
            <div className="relative">
              <div className="rounded-2xl bg-navy-light border border-white/10 shadow-2xl overflow-hidden p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                    alt="Confident professional"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />

                  {/* Floating Data Cards */}
                  <div className="absolute bottom-6 left-6 bg-navy-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-lg w-48">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-warm-gray uppercase font-mono">Engagement</span>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="text-2xl font-bold text-cream">Top 1%</div>
                    <div className="text-xs text-green-500 mt-1">+420% vs Market Avg</div>
                  </div>

                  <div className="absolute top-6 right-6 bg-navy-dark/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-amber flex items-center justify-center text-navy-dark">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-warm-gray">Profile Status</div>
                      <div className="text-sm font-bold text-cream">Optimized</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <Section background="dark" spacing="sm">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-cream flex items-center justify-center gap-2">
              {content.stats.matchesGenerated} <Check className="w-6 h-6 text-amber" />
            </p>
            <p className="text-warm-gray mt-2">Total Matches Generated</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-500">{content.stats.averageRoi}</p>
            <p className="text-warm-gray mt-2">Average ROI (Matches)</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cream">{content.stats.clientSatisfaction}</p>
            <p className="text-warm-gray mt-2">Client Satisfaction</p>
          </div>
        </div>
      </Section>

      {/* Problem Section */}
      <Section background="default" id="methodology">
        <SectionHeader>
          <SectionLabel>The ROI Mismatch</SectionLabel>
          <SectionTitle>Stop bad trades.</SectionTitle>
          <SectionSubtitle>
            Spending hours swiping with bad photos is a bad investment of your time.
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <Card variant="default" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp className="w-24 h-24 text-red-500 rotate-180" />
            </div>
            <h3 className="text-lg font-bold text-cream mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Current Market Performance (You)
            </h3>
            {/* Simulated Chart */}
            <div className="flex items-end gap-2 h-48 w-full pb-2 border-b border-warm-gray/20">
              {[60, 55, 50, 40, 30, 20].map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i < 3 ? "bg-warm-gray/50" : i === 3 ? "bg-red-500/80" : "bg-red-500"}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-warm-gray mt-2 font-mono">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            </div>
            <div className="mt-6 p-4 bg-red-900/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm font-medium flex items-center gap-2">
                ⚠️ Signal: Bearish Divergence detected in match quality.
              </p>
            </div>
          </Card>

          {/* Problems List */}
          <div className="space-y-8">
            {content.problems.map((problem, i) => {
              const icons = [Hourglass, EyeOff];
              const Icon = icons[i];
              return (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cream">{problem.title}</h4>
                    <p className="text-warm-gray-light mt-2">{problem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="dark" id="results">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>{content.solution.title}</SectionLabel>
            <SectionTitle className="text-left">{content.solution.subtitle}</SectionTitle>
          </div>
          <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
            See Case Studies
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.solution.features.map((feature, i) => {
            const icons = [BarChart3, Diamond, Zap];
            const Icon = icons[i];
            return (
              <Card key={i} variant="default" hover className="group">
                <div className="h-12 w-12 bg-navy-dark rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber group-hover:text-navy-dark transition-colors text-cream">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-3">{feature.title}</h3>
                <p className="text-warm-gray-light text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Before/After */}
        <div className="mt-16 bg-navy-dark rounded-2xl border border-white/5 p-2 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden opacity-60 grayscale">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=450&fit=crop"
                alt="Before"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-red-500/90 text-white px-4 py-1 rounded font-bold uppercase tracking-wider text-sm">
                  Before: Low Signal
                </span>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl shadow-amber/20 border border-amber/20">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
                alt="After"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded font-bold uppercase tracking-wider text-sm flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> After: High Signal
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Pricing />

      {/* Guarantee */}
      <Section background="dark" spacing="md">
        <Container size="md">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-navy-light rounded-full border border-amber/30 mb-6">
              <Shield className="w-8 h-8 text-amber" />
            </div>
            <h2 className="text-2xl font-bold text-cream mb-4">{content.guarantee.title}</h2>
            <p className="text-warm-gray-light max-w-2xl mx-auto">
              {content.guarantee.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
