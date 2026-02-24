'use client';

import { Target, Shield, Zap } from 'lucide-react';
import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { Card } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';

const valueIcons = [Target, Shield, Zap] as const;
const valueKeys = ['positioning', 'communication', 'execution'] as const;

export function AboutContent() {
  const m = useMessages();

  return (
    <>
      <PageIntro
        badge={m.about.badge}
        title={m.about.introTitle}
        description={m.about.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl bg-card/70 p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">{m.about.missionTitle}</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>{m.about.missionP1}</p>
              <p>{m.about.missionP2}</p>
            </div>
            <div className="mt-5">
              <CTAButton size="lg" />
            </div>
          </Card>
          <div className="space-y-4">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              const value = m.about.values[key];
              return (
                <Card key={key} className="rounded-2xl bg-card/70 p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
