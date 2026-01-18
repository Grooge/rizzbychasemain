import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { selfImproverVariant as content } from "@/content/variants/self-improver";
import { Zap, ArrowRight, TrendingUp, LinkIcon, Shirt, Smile, Mountain, Check } from "lucide-react";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function SelfImproverPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-navy-dark" />

        <Container size="xl" className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            {/* Hero Content */}
            <div className="flex-1 flex flex-col gap-6 lg:pr-10">
              <Badge variant="pulse">
                <Zap className="w-3 h-3" />
                {content.hero.badge}
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-cream leading-tight">
                {content.hero.headline}{" "}
                <span className="gradient-text">{content.hero.subheadline}</span>
              </h1>

              <p className="text-warm-gray-light text-lg max-w-xl">
                {content.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="xl" glow>
                  {content.hero.primaryCta}
                </Button>
                <Button variant="outline" size="xl">
                  {content.hero.secondaryCta}
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 text-warm-gray text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-navy-dark bg-gray-300"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/100?u=${i})`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </div>
                <p>{content.hero.socialProof}</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Confident self-improver"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-navy-light/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 inline-flex items-center gap-3">
                  <Check className="w-5 h-5 text-amber" />
                  <div>
                    <p className="text-xs text-warm-gray font-medium uppercase tracking-wider">Status Signal</p>
                    <p className="text-cream font-bold text-sm">Authentic Confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <Section background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <SectionLabel>{content.problem.label}</SectionLabel>
              <h3 className="text-3xl md:text-4xl font-bold text-cream mb-4">{content.problem.title}</h3>
              <p className="text-warm-gray-light text-lg">{content.problem.description}</p>
            </div>

            <div className="space-y-4">
              {content.problem.points.map((point, i) => (
                <Card key={i} variant="default" className="flex gap-4">
                  <div className={`p-3 rounded-lg h-fit ${point.type === "positive" ? "bg-amber/10 text-amber" : "bg-red-500/10 text-red-400"}`}>
                    {point.type === "positive" ? <TrendingUp className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-cream font-bold text-lg">{point.title}</h4>
                    <p className="text-warm-gray-light">{point.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Gap Visualization */}
          <Card variant="elevated" className="bg-navy-light">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-warm-gray text-sm font-medium mb-1">Gap Analysis</p>
                <p className="text-cream text-2xl font-bold">Value Discrepancy</p>
              </div>
              <div className="text-right">
                <p className="text-red-400 font-bold text-xl flex items-center justify-end gap-1">
                  ↓ {content.problem.chart.lostOpportunity}
                </p>
                <p className="text-warm-gray text-xs uppercase tracking-wide">Lost Opportunity</p>
              </div>
            </div>

            {/* Visual Chart */}
            <div className="relative h-64 w-full flex items-end justify-center gap-12 px-8 pb-4 border-b border-white/10">
              {/* Real Value Bar */}
              <div className="flex flex-col items-center gap-2 w-24">
                <span className="text-amber font-bold">High</span>
                <div
                  className="w-full bg-gradient-to-t from-amber/20 to-amber rounded-t-lg"
                  style={{ height: `${content.problem.chart.realValue * 2}px` }}
                />
                <span className="text-cream font-semibold text-sm">Real Value</span>
              </div>
              {/* Photo Value Bar */}
              <div className="flex flex-col items-center gap-2 w-24 relative">
                <span className="text-red-400 font-bold">Low</span>
                <div
                  className="w-full bg-warm-gray/50 rounded-t-lg relative"
                  style={{ height: `${content.problem.chart.photoValue * 2}px` }}
                >
                  <div className="absolute -top-24 left-1/2 h-24 border-l-2 border-dashed border-red-400/50" />
                </div>
                <span className="text-warm-gray font-semibold text-sm">Photo Value</span>
              </div>
            </div>
            <p className="text-center text-warm-gray text-sm italic mt-4">
              &ldquo;The gap represents missed matches and low-quality interactions.&rdquo;
            </p>
          </Card>
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="default">
        <SectionHeader>
          <SectionLabel>{content.solution.label}</SectionLabel>
          <SectionTitle>{content.solution.title}</SectionTitle>
          <SectionSubtitle>{content.solution.description}</SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6">
          {content.solution.features.map((feature, i) => {
            const icons = [Shirt, Smile, Mountain];
            const Icon = icons[i];
            return (
              <Card key={i} variant="default" hover className="group relative overflow-hidden">
                <div className="aspect-[4/3] w-full bg-cover bg-center relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-150700321116${i}-0a1dd7228f2d?w=400&h=300&fit=crop`}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-navy-dark/20 transition-all" />
                </div>
                <div className="absolute top-4 right-4 bg-navy-light p-2 rounded-lg border border-white/10 text-amber">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-cream mb-2">{feature.title}</h3>
                <p className="text-warm-gray-light text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Pricing */}
      <Pricing />

      {/* Final CTA */}
      <Section background="dark" spacing="xl">
        <Container size="md">
          <div className="text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#475569 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative flex flex-col gap-6 items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-cream">{content.finalCta.title}</h2>
              <p className="text-warm-gray-light text-lg">{content.finalCta.description}</p>
              <Button size="xl" glow className="shadow-[0_4px_20px_rgba(217,119,6,0.4)]">
                Fix My Dating Profile
              </Button>
              <p className="text-warm-gray text-xs mt-4">100% Satisfaction Guarantee. Secure Checkout.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
