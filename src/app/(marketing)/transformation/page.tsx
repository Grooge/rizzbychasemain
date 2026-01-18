import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionLabel } from "@/components/ui/Section";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { transformationVariant as content } from "@/content/variants/transformation";
import { Zap, Check, X, Shirt, Camera, Sparkles, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function TransformationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-40 flex flex-1 justify-center py-10 lg:py-20 bg-navy-dark">
        <Container size="lg">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
              <Badge variant="pulse">
                <Zap className="w-3 h-3" />
                {content.hero.badge}
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-cream leading-[1.1]">
                {content.hero.headline}{" "}
                <span className="text-amber">{content.hero.subheadline}</span>
              </h1>

              <p className="text-warm-gray-light text-lg max-w-[500px]">
                {content.hero.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="xl" glow className="shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                  {content.hero.primaryCta}
                </Button>
                <div className="flex items-center gap-2 px-4 text-sm text-warm-gray">
                  <Check className="w-4 h-4 text-amber" />
                  <span>{content.hero.guarantee}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2 relative group">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                  alt="Transformed confident man"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs font-bold text-cream border border-white/10 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-amber" />
                  Captured by Chase
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <Section background="darker">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-cream mb-4">{content.problem.title}</h2>
            <p className="text-warm-gray-light">{content.problem.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-cream">{content.problem.mainPoint}</h3>
              <p className="text-warm-gray-light">{content.problem.explanation}</p>
              <p className="text-warm-gray-light">{content.problem.details}</p>

              <ul className="space-y-3 mt-2">
                {content.problem.issues.map((issue, i) => (
                  <li key={i} className="flex items-center gap-3 text-warm-gray-light">
                    <X className="w-5 h-5 text-red-500" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value Gap Visualization */}
            <Card variant="elevated" className="bg-navy-light relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-9xl">📉</span>
              </div>
              <div className="relative z-10 space-y-8">
                {/* Real World Value */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-warm-gray-light">
                    <span>{content.problem.chart.realWorldValue.label}</span>
                    <span className="text-amber">{content.problem.chart.realWorldValue.rating}</span>
                  </div>
                  <div className="h-4 w-full bg-warm-gray/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber shadow-[0_0_10px_rgba(217,119,6,0.5)]"
                      style={{ width: `${content.problem.chart.realWorldValue.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-warm-gray">Physique, Style, Confidence, Career</p>
                </div>

                {/* Digital Value */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold text-warm-gray-light">
                    <span>{content.problem.chart.digitalValue.label}</span>
                    <span className="text-red-400">{content.problem.chart.digitalValue.rating}</span>
                  </div>
                  <div className="h-4 w-full bg-warm-gray/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-warm-gray/50"
                      style={{ width: `${content.problem.chart.digitalValue.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-warm-gray">Based on your current outdated photos</p>
                </div>

                <div className="p-4 bg-amber/10 border border-amber/20 rounded-lg">
                  <p className="text-sm text-amber font-medium text-center">
                    {content.problem.chart.solution}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section background="default" id="how-it-works">
        <Container size="lg">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-cream mb-4">{content.howItWorks.title}</h2>
            <p className="text-warm-gray-light max-w-xl">{content.howItWorks.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.howItWorks.steps.map((step, i) => {
              const icons = [Shirt, Camera, Sparkles];
              const Icon = icons[i];
              return (
                <Card key={i} variant="default" hover className="group">
                  <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-6 group-hover:bg-amber text-amber group-hover:text-navy-dark transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-3">{step.number}. {step.title}</h3>
                  <p className="text-warm-gray-light text-sm">{step.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Comparison */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-cream mb-8 text-center">{content.comparison.title}</h3>
            <div className="grid md:grid-cols-2 gap-4 h-[400px] md:h-[500px]">
              {/* Before */}
              <div className="relative h-full w-full rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop"
                  alt="Before"
                  fill
                  className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  {content.comparison.before.label}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-4 rounded backdrop-blur-sm">
                  <p className="text-cream font-medium">{content.comparison.before.title}</p>
                  <p className="text-xs text-warm-gray-light">{content.comparison.before.description}</p>
                </div>
              </div>

              {/* After */}
              <div className="relative h-full w-full rounded-xl overflow-hidden border-2 border-amber group">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                  alt="After"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber text-navy-dark text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  {content.comparison.after.label}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-4 rounded backdrop-blur-sm border-l-4 border-amber">
                  <p className="text-cream font-medium">{content.comparison.after.title}</p>
                  <p className="text-xs text-warm-gray-light">{content.comparison.after.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Guarantee */}
      <Section background="default" spacing="md">
        <Container size="md">
          <div className="border border-amber/30 bg-amber/5 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber/10 rounded-full blur-3xl" />
            <Shield className="w-12 h-12 text-amber mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-cream mb-4">{content.guarantee.title}</h2>
            <p className="text-warm-gray-light mb-8 max-w-lg mx-auto">{content.guarantee.description}</p>
            <Button variant="outline" size="lg">
              {content.guarantee.cta}
            </Button>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
