import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { PartnersGrid } from '@/components/partners-grid';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = createPageMetadata({
  title: 'Hamkorlar',
  description: 'Pikrchi bilan ishlagan ekspertlar, akademiyalar va brendlar ro\'yxati.',
  path: '/partners'
});

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        badge="Hamkorlar"
        title="Ishlangan ekspertlar va brendlar"
        description="Quyidagi grid Pikrchi ishlagan odamlar va kompaniyalar haqida preview ma'lumot beradi. Logo yoki rasm bo'lmasa gradient initials avatar avtomatik ishlatiladi."
      />

      <section className="section-pad pt-0">
        <div className="container space-y-5">
          <Card className="rounded-2xl bg-card/70 p-4 text-sm text-muted-foreground">
            Hamkor rasmlari keyinchalik `/public/partners/` papkasiga joylashtiriladi. Hozircha placeholder/initials avatar ishlatilmoqda.
          </Card>
          <PartnersGrid showFilters />
        </div>
      </section>
    </>
  );
}
