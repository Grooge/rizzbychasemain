import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { engineerVariant as content } from "@/content/variants/engineer";
import { Terminal, ArrowRight, Check, EyeOff, GitCompare, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function EngineerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-navy-dark" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[80px]" />

        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <Badge variant="pulse" className="font-mono">
                <Terminal className="w-3 h-3" />
                {content.hero.badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.1]">
                {content.hero.headline}{" "}
                <span className="text-warm-gray">{content.hero.subheadline}</span>
              </h1>

              <p className="text-lg text-warm-gray-light max-w-xl">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="xl" glow rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {content.hero.primaryCta}
                </Button>
                <Button variant="outline" size="xl">
                  {content.hero.secondaryCta}
                </Button>
              </div>

              {/* Tech-style indicators */}
              <div className="flex items-center gap-4 text-sm font-mono text-warm-gray-light pt-4">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Code Review</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Refactoring</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Deployment</span>
                </div>
              </div>
            </div>

            {/* Hero Visual - Code Editor Style */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-navy-light shadow-2xl">
                {/* Window Controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-xs font-mono text-warm-gray">profile_optimization.js</span>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                    alt="Confident professional in tech office"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                  {/* Overlay with terminal output */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent">
                    <div className="font-mono text-sm space-y-1">
                      <div className="text-green-400">&gt; System Status: <span className="text-cream">Optimized</span></div>
                      <div className="text-green-400">&gt; Matches: <span className="text-cream">+340% increase</span></div>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-amber w-[90%]" />
                        </div>
                        <span className="text-xs text-warm-gray">98% Match Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <Section background="dark">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-amber font-mono text-sm mb-4">
            <Terminal className="w-4 h-4" />
            <span>ERROR LOG</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">The Optimization Problem</h2>
          <p className="text-warm-gray-light text-lg max-w-2xl">
            Your technical stack is flawless, but your social presentation layer is throwing exceptions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.problems.map((problem, index) => {
            const icons = [Terminal, EyeOff, GitCompare];
            const Icon = icons[index];
            const colors = ["red", "orange", "yellow"];
            const color = colors[index];

            return (
              <Card key={index} variant="outlined" hover className={`border-${color}-500/20 hover:border-${color}-500/50`}>
                <div className={`w-12 h-12 rounded-lg bg-${color}-500/10 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${color}-500`} />
                </div>
                <h3 className="text-xl font-bold text-cream mb-2 font-mono">{problem.title}</h3>
                <p className="text-warm-gray-light text-sm mb-4">{problem.description}</p>
                <div className={`py-2 px-3 bg-${color}-950/30 border border-${color}-500/20 rounded text-xs font-mono text-${color}-400 w-fit`}>
                  {problem.code}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Solution Section - Before/After */}
      <Section background="default">
        <SectionHeader>
          <Badge variant="success" className="mb-4">Patch Available</Badge>
          <SectionTitle>{content.solution.title}</SectionTitle>
        </SectionHeader>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10">
              <span className="text-red-400 text-xs font-mono font-bold">{content.solution.beforeLabel}</span>
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop"
                alt="Before transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono">
                <span>✗</span>
                <span>Poor Lighting Conditions</span>
              </div>
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono mt-1">
                <span>✗</span>
                <span>Unstructured Composition</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber shadow-[0_0_40px_rgba(217,119,6,0.15)] transform lg:scale-105 z-10">
            <div className="absolute top-4 left-4 z-10 bg-amber text-navy-dark px-3 py-1 rounded font-bold shadow-lg">
              <span className="text-xs font-mono">{content.solution.afterLabel}</span>
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop"
                alt="After transformation"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <div className="space-y-2">
                {content.solution.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="bg-green-500 text-black text-[10px] font-bold px-1.5 rounded">PASSED</span>
                    <span className="text-cream text-sm font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="dark">
        <SectionHeader>
          <SectionTitle>{content.howItWorks.title}</SectionTitle>
          <SectionSubtitle>{content.howItWorks.subtitle}</SectionSubtitle>
        </SectionHeader>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {content.howItWorks.steps.map((step, index) => (
              <Card key={index} variant="default" className="text-center hover:border-amber/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-navy-dark border border-white/10 flex items-center justify-center mx-auto mb-6 relative">
                  {index === 1 ? (
                    <div className="w-full h-full rounded-full bg-amber flex items-center justify-center text-navy-dark">
                      <span className="text-2xl">⚡</span>
                    </div>
                  ) : (
                    <span className="text-2xl">{index === 0 ? "🔍" : "🚀"}</span>
                  )}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs font-mono border border-white/20">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-cream mb-2">{step.title}</h3>
                <p className="text-warm-gray-light text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Pricing />

      {/* Guarantee */}
      <Section background="dark" spacing="md">
        <Container size="sm">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-navy-light rounded-full flex items-center justify-center border border-white/10 mb-6 text-amber">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-cream mb-2">{content.guarantee.title}</h3>
            <p className="text-warm-gray-light">{content.guarantee.description}</p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
