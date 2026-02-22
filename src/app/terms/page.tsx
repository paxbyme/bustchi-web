import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = createPageMetadata({
  title: 'Shartlar',
  description: 'Bustchi terms sahifasi uchun placeholder.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <>
      <PageIntro
        badge="Shartlar"
        title="Foydalanish shartlari (placeholder)"
        description="Bu sahifa hozircha placeholder. Keyinchalik to'liq terms, refund policy va service shartlari qo'shiladi."
      />
      <section className="section-pad pt-0">
        <div className="container">
          <Card className="rounded-2xl bg-card/70 p-6 text-sm leading-7 text-muted-foreground">
            <p>
              Placeholder kontent: xizmatdan foydalanish shartlari, aloqa tartibi, to&apos;lov va bajarilish qoidalari, mas&apos;uliyat cheklovlari shu yerga joylashtiriladi.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
