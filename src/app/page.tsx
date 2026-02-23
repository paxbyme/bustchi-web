import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SectionHeader } from '@/components/section-header';
import { CTAButton } from '@/components/cta-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trustBenefits, howItWorksSteps } from '@/data/services';
import { PartnersGrid } from '@/components/partners-grid';

export const metadata: Metadata = createPageMetadata({
  title: 'Bosh sahifa',
  description: 'Pikrchi bilan Telegram BOOST xizmatlarini xavfsiz, tez va shaffof narxda oling.',
  path: '/'
});

export default function HomePage() {
  return (
    <>
      <section className="section-pad pb-10 md:pb-14">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Telegram Growth Partner</Badge>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Telegram o&apos;sishi uchun <span className="text-primary">BOOST</span> xizmatlari
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Pikrchi ekspertlar, bizneslar va akademiyalar uchun Telegram reach va ishonchni kuchaytiradigan BOOST xizmatlarini taklif qiladi. Narxlar shaffof, jarayon aniq, CTA esa to&apos;g&apos;ridan-to&apos;g&apos;ri Telegramga olib boradi.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <CTAButton size="lg" label="Telegram orqali bog'lanish" />
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  Narx kalkulyatori
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-2">
        <div className="container space-y-8">
          <SectionHeader
            badge="Afzalliklar"
            title="Ishonch, tezlik va shaffoflikka qurilgan jarayon"
            description="Pikrchi xizmatlari marketing ko'rinishi bilan birga real muloqot va aniq hisob-kitobni birlashtiradi."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {trustBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-2xl bg-card/70 p-5 transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container space-y-8">
          <SectionHeader
            badge="Qanday ishlaydi"
            title="4 qadamda buyurtma berish jarayoni"
            description="Minimal vaqt ichida xizmatni tanlang, hisoblang va Telegram orqali tasdiqlang."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {howItWorksSteps.map((step, index) => (
              <Card
                key={step.step}
                className="rounded-2xl bg-card/70 p-5 motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-xs font-semibold text-primary">{step.step}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              badge="Hamkorlar"
              title="Ekspertlar va brendlar bilan ishlangan"
              description="Ishonchni kuchaytirish uchun tanlangan hamkorlar preview ro'yxati."
            />
            <Link href="/partners">
              <Button variant="outline">
                Barcha hamkorlar
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
          <PartnersGrid previewCount={8} />
        </div>
      </section>

      <section className="section-pad pt-6">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 shadow-soft md:p-8">
            <div className="absolute -right-10 top-8 hidden size-40 rounded-full bg-primary/20 blur-3xl md:block" />
            <div className="absolute -left-10 bottom-4 hidden size-40 rounded-full bg-accent/20 blur-3xl md:block" />
            <div className="relative grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
              <div>
                <p className="mb-2 text-sm font-medium text-primary">Secondary CTA</p>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Narxni oldindan hisoblang va Telegramda bir xabar bilan buyurtma bering
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  `/pricing` sahifasidagi kalkulyator barcha paketlar uchun konfiguratsiya asosida hisoblaydi. Bu sizga aniq budjet va tez tasdiqlash imkonini beradi.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link href="/pricing">
                  <Button size="lg" className="w-full">
                    Kalkulyatorni ochish
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
