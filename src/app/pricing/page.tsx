import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { pricingConfig, type PackageKey, type ServiceType, formatUZS } from '@/config/pricing';
import { PricingCalculator } from '@/components/pricing-calculator';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';

export const metadata: Metadata = createPageMetadata({
  title: 'Narxlar',
  description: 'Pikrchi Telegram BOOST va PREMIUM xizmatlari uchun konfiguratsiya asosidagi narx kalkulyatori.',
  path: '/pricing'
});

const serviceKeys = Object.keys(pricingConfig) as ServiceType[];
const packageOrder: PackageKey[] = ['starter', 'standard', 'pro'];

export default function PricingPage() {
  return (
    <>
      <PageIntro
        badge="Narxlar"
        title="Narx kalkulyatori va paketlar"
        description="Narxlar `src/config/pricing.ts` konfiguratsiyasidan olinadi. UI ni o'zgartirmasdan bazaviy narx, limit va chegirma qoidalarini yangilashingiz mumkin."
      />

      <section className="section-pad pt-0">
        <div className="container">
          <PricingCalculator />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container space-y-8">
          <SectionHeader
            badge="Konfiguratsiya asosida"
            title="Paketlar overview"
            description="Quyidagi kartalar ham pricing config faylidan avtomatik render qilinadi."
          />
          <div className="grid gap-6 xl:grid-cols-2">
            {serviceKeys.map((serviceKey) => {
              const service = pricingConfig[serviceKey];
              return (
                <Card key={serviceKey} className="rounded-2xl bg-card/70 p-5 md:p-6">
                  <h3 className="font-display text-xl font-semibold">{service.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {packageOrder.map((packageKey) => {
                      const pkg = service.packages[packageKey];
                      return (
                        <div key={packageKey} className="rounded-xl border border-border/70 bg-background/60 p-4">
                          <p className="text-sm font-semibold">{pkg.label}</p>
                          <p className="mt-2 font-display text-lg font-semibold">{formatUZS(pkg.basePrice)} UZS</p>
                          <p className="text-xs text-muted-foreground">/{pkg.unitLabel}</p>
                          <p className="mt-2 text-xs leading-5 text-muted-foreground">{pkg.shortDescription}</p>
                          <p className="mt-2 text-[11px] text-muted-foreground">
                            Min: {pkg.minQuantity}, Max: {pkg.maxQuantity}
                          </p>
                        </div>
                      );
                    })}
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
