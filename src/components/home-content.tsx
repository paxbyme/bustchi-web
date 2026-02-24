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
      <section className="section-pad pb-10 md:pb-14">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <Badge className="border-primary/20 bg-primary/10 text-primary">{m.home.heroBadge}</Badge>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                {heroTitlePre}<span className="text-primary">BOOST</span>{heroTitlePost}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {m.home.heroDescription}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <CTAButton size="lg" label={m.home.heroCta} />
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  {m.home.heroPricingButton}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad pt-2">
        <div className="container space-y-8">
          <SectionHeader
            badge={m.home.benefitsBadge}
            title={m.home.benefitsTitle}
            description={m.home.benefitsDescription}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {benefitKeys.map((key, i) => {
              const Icon = benefitIcons[i];
              const benefit = m.home.benefits[key];
              return (
                <Card key={key} className="rounded-2xl bg-card/70 p-5 transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container space-y-8">
          <SectionHeader
            badge={m.home.howItWorksBadge}
            title={m.home.howItWorksTitle}
            description={m.home.howItWorksDescription}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stepKeys.map((key, index) => {
              const step = m.home.steps[key];
              return (
                <Card
                  key={key}
                  className="rounded-2xl bg-card/70 p-5 motion-safe:animate-fade-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-xs font-semibold text-primary">{step.label}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners preview */}
      <section className="section-pad">
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              badge={m.home.partnersBadge}
              title={m.home.partnersTitle}
              description={m.home.partnersDescription}
            />
            <Link href="/partners">
              <Button variant="outline">
                {m.home.allPartnersButton}
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
          <PartnersGrid previewCount={8} />
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="section-pad pt-6">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 shadow-soft md:p-8">
            <div className="absolute -right-10 top-8 hidden size-40 rounded-full bg-primary/20 blur-3xl md:block" />
            <div className="absolute -left-10 bottom-4 hidden size-40 rounded-full bg-accent/20 blur-3xl md:block" />
            <div className="relative grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
              <div>
                <p className="mb-2 text-sm font-medium text-primary">{m.home.ctaLabel}</p>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {m.home.ctaTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  {m.home.ctaDescription}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link href="/pricing">
                  <Button size="lg" className="w-full">
                    {m.home.ctaCalculatorButton}
                  </Button>
                </Link>
                <CTAButton variant="outline" size="lg" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
