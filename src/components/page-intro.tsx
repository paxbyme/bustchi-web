import { SectionHeader } from '@/components/section-header';
import { Reveal } from '@/components/motion/reveal';

interface PageIntroProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageIntro({ title, description, badge }: PageIntroProps) {
  return (
    <section className="section-pad relative pb-8 md:pb-12">
      <div
        aria-hidden="true"
        className="orb -top-10 right-10 hidden size-56 bg-primary/15 motion-safe:animate-float-slow md:block"
      />
      <div
        aria-hidden="true"
        className="orb top-20 left-10 hidden size-48 bg-accent/15 motion-safe:animate-float-slower md:block"
      />
      <div className="container relative">
        <Reveal>
          <div className="ring-shine relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur md:p-8">
            <SectionHeader badge={badge} title={title} description={description} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
