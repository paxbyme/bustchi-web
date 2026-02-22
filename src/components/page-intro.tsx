import { SectionHeader } from '@/components/section-header';

interface PageIntroProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageIntro({ title, description, badge }: PageIntroProps) {
  return (
    <section className="section-pad pb-8 md:pb-12">
      <div className="container">
        <div className="rounded-3xl border border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur md:p-8">
          <SectionHeader badge={badge} title={title} description={description} />
        </div>
      </div>
    </section>
  );
}
