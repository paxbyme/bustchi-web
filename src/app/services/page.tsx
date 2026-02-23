import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/service-card';
import { CTAButton } from '@/components/cta-button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = createPageMetadata({
  title: 'Xizmatlar',
  description: 'Bustchi Telegram BOOST xizmati tavsifi, paketlari va natijalari.',
  path: '/services'
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        badge="Xizmatlar"
        title="Telegram BOOST xizmati"
        description="BOOST xizmati aniq use-case, shaffof narx va Telegram orqali tezkor buyurtma oqimi bilan taqdim etiladi."
      />

      <section className="section-pad pt-0">
        <div className="container grid gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container">
          <Card className="rounded-2xl bg-card/70 p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">Nima bilan yordam beramiz?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              Agar qaysi BOOST paketi sizga mosligini bilmasangiz, Telegram orqali maqsadingizni yozing: kanal turi, auditoriya holati va kampaniya maqsadi. Bustchi sizga mos paket va quantity bo&apos;yicha tavsiya beradi.
            </p>
            <div className="mt-5">
              <CTAButton size="lg" />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
