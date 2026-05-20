'use client';

import { useMessages } from '@/i18n/context';
import { PageIntro } from '@/components/page-intro';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/motion/reveal';

export function TermsContent() {
  const m = useMessages();

  return (
    <>
      <PageIntro
        badge={m.terms.badge}
        title={m.terms.introTitle}
        description={m.terms.introDescription}
      />
      <section className="section-pad pt-0">
        <div className="container">
          <Reveal>
            <Card className="hover-lift rounded-2xl bg-card/70 p-6 text-sm leading-7 text-muted-foreground">
              <p>{m.terms.placeholder}</p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
