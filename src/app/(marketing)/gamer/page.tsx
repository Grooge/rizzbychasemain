import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { gamerVariant as content } from "@/content/variants/gamer";
import { Gamepad2, ArrowRight, TrendingUp, Zap, Clock, ImageOff, CameraOff, EyeOff, Star } from "lucide-react";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function GamerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-navy-dark" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[128px]" />

        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <Badge variant="pulse">
                <Gamepad2 className="w-3 h-3" />
                {content.hero.badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight">
                {content.hero.headline}{" "}
                <span className="gradient-text">{content.hero.subheadline}</span>
              </h1>

              <p className="text-lg text-warm-gray-light max-w-2xl mx-auto lg:mx-0">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button size="xl" glow rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {content.hero.primaryCta}
                </Button>
                <Button variant="outline" size="xl" leftIcon={<span className="text-amber">▶</span>}>
                  {content.hero.secondaryCta}
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-warm-gray pt-4">
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  <span>Privacy First</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  <span>No Cringe Filters</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - Gaming HUD Style */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div className="relative bg-navy-light border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Status Bar */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded px-3 py-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-green-400">STATUS: ONLINE</span>
                </div>

                <div className="relative aspect-[4/5] lg:aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                    alt="Confident gamer"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* HUD Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-cream font-bold text-lg">Level 99 Profile</div>
                        <div className="text-warm-gray text-sm">Charisma Build Maxed</div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                        ))}
                      </div>
                    </div>
                    {/* XP Bar */}
                    <div className="mt-3 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-amber w-[90%] rounded-full shadow-[0_0_10px_rgba(217,119,6,0.8)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section - HUD Style */}
      <Section background="dark" spacing="sm">
        <div className="grid md:grid-cols-3 gap-6">
          {content.stats.map((stat, i) => {
            const icons = [TrendingUp, Zap, Clock];
            const Icon = icons[i];
            return (
              <Card key={i} variant="default" hover className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-navy-dark text-amber group-hover:text-cream group-hover:bg-amber transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-warm-gray text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-cream">{stat.value}</h3>
                    <span className="text-green-500 text-xs font-bold">{stat.badge}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Problem Section */}
      <Section background="default" id="how-it-works">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4 leading-tight">
              Stuck in the <span className="text-amber">Tutorial?</span>
            </h2>
            <p className="text-warm-gray-light text-lg">
              Why low-effort photos are keeping you in zero-match lobbies. Stop grinding with starter gear.
            </p>
          </div>
          <div className="md:w-1/2 flex items-end justify-end">
            <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-red-500" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.problems.map((problem, i) => {
            const icons = [ImageOff, CameraOff, EyeOff];
            const Icon = icons[i];
            return (
              <Card key={i} variant="outlined" hover className="border-red-500/20 hover:border-red-500/50 group">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">{problem.title}</h3>
                <p className="text-warm-gray-light text-sm">{problem.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="dark" id="results">
        <SectionHeader>
          <SectionLabel>{content.solution.label}</SectionLabel>
          <SectionTitle>{content.solution.title}</SectionTitle>
          <SectionSubtitle>{content.solution.subtitle}</SectionSubtitle>
        </SectionHeader>

        <div className="grid lg:grid-cols-3 gap-8">
          {content.solution.features.map((feature, i) => (
            <div key={i} className="group cursor-default">
              <div className="aspect-[4/5] w-full rounded-xl overflow-hidden mb-6 relative border border-white/10 group-hover:border-amber/50 transition-colors">
                <Image
                  src={`https://images.unsplash.com/photo-150700321116${i}-0a1dd7228f2d?w=400&h=500&fit=crop`}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs font-mono text-amber border border-amber/30">
                  {feature.badge}
                </div>
              </div>
              <h3 className="text-xl font-bold text-cream mb-1">{feature.title}</h3>
              <p className="text-warm-gray-light text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Pricing />

      {/* Final CTA */}
      <Section background="dark" spacing="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-cream mb-6">{content.finalCta.title}</h2>
            <p className="text-warm-gray-light text-lg mb-8 max-w-2xl mx-auto">
              {content.finalCta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" glow>
                Fix My Dating Profile
              </Button>
              <p className="text-xs text-warm-gray">{content.finalCta.guarantee}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
