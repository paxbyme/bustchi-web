'use client';

import Link from 'next/link';
import { ArrowRight, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { useMessages } from '@/i18n/context';
import { SectionHeader } from '@/components/section-header';
import { CTAButton } from '@/components/cta-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PartnersGrid } from '@/components/partners-grid';
import { Reveal } from '@/components/motion/reveal';

const benefitIcons = [Rocket, ShieldCheck, Sparkles] as const;
const benefitKeys = ['fastLaunch', 'safeApproach', 'transparentPricing'] as const;
const stepKeys = ['step1', 'step2', 'step3', 'step4'] as const;

export function HomeContent() {
  const m = useMessages();

  // Split heroTitle on {boost} placeholder
  const [heroTitlePre, heroTitlePost] = m.home.heroTitle.split('{boost}');

  return (
    <>
      {/* Hero */}
      <section className="section-pad relative overflow-hidden pb-10 md:pb-14">
        {/* Decorative animated orbs */}
        <div
          aria-hidden="true"
          className="orb -top-16 left-1/4 size-72 bg-primary/25 motion-safe:animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="orb -top-10 right-1/4 size-72 bg-accent/25 motion-safe:animate-float-slower"
        />
        <div
          aria-hidden="true"
          className="orb bottom-0 left-1/2 size-64 -translate-x-1/2 bg-primary/15 motion-safe:animate-float"
        />

        <div className="container relative">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2">
                <Badge className="border-primary/20 bg-primary/10 text-primary motion-safe:animate-pulse-glow">
                  <span className="live-dot mr-2" aria-hidden="true" />
                  {m.home.heroBadge}
                </Badge>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                {heroTitlePre}
                <span className="text-shine">BOOST</span>
                {heroTitlePost}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {m.home.heroDescription}
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <CTAButton size="lg" />
                <Link href="/services">
                  <Button variant="outline" size="lg" className="group">
                    {m.nav.services}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad pt-2">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeader
              badge={m.home.benefitsBadge}
              title={m.home.benefitsTitle}
              description={m.home.benefitsDescription}
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {benefitKeys.map((key, i) => {
              const Icon = benefitIcons[i];
              const benefit = m.home.benefits[key];
              return (
                <Reveal key={key} delay={i * 90} className="h-full">
                  <Card className="hover-lift group relative h-full overflow-hidden rounded-2xl bg-card/70 p-5">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"
                    />
                    <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container space-y-8">
          <Reveal>
            <SectionHeader
              badge={m.home.howItWorksBadge}
              title={m.home.howItWorksTitle}
              description={m.home.howItWorksDescription}
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stepKeys.map((key, index) => {
              const step = m.home.steps[key];
              return (
                <Reveal key={key} delay={index * 100} className="h-full">
                  <Card className="hover-lift relative h-full rounded-2xl bg-card/70 p-5">
                    <span className="absolute right-4 top-4 font-display text-3xl font-bold text-primary/15 tabular-nums">
                      0{index + 1}
                    </span>
                    <p className="text-xs font-semibold text-primary">{step.label}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners preview */}
      <section className="section-pad">
        <div className="container space-y-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                badge={m.home.partnersBadge}
                title={m.home.partnersTitle}
                description={m.home.partnersDescription}
              />
              <Link href="/partners">
                <Button variant="outline" className="group">
                  {m.home.allPartnersButton}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Reveal>
          <PartnersGrid previewCount={8} />
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="section-pad pt-6">
        <div className="container">
          <Reveal>
            <div className="ring-shine relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 shadow-soft md:p-8">
              <div className="orb -right-10 top-8 hidden size-40 bg-primary/30 motion-safe:animate-float-slow md:block" />
              <div className="orb -left-10 bottom-4 hidden size-40 bg-accent/30 motion-safe:animate-float-slower md:block" />
              <div className="relative grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <Sparkles className="size-4 motion-safe:animate-pulse" />
                    {m.home.ctaLabel}
                  </p>
                  <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {m.home.ctaTitle}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                    {m.home.ctaDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <CTAButton size="lg" className="w-full motion-safe:animate-pulse-glow" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
