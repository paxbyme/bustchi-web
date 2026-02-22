import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { SectionHeader } from '@/components/section-header';
import { CTAButton } from '@/components/cta-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { trustBenefits, howItWorksSteps } from '@/data/services';
import { PartnersGrid } from '@/components/partners-grid';
import { pricingConfig, formatUZS } from '@/config/pricing';

export const metadata: Metadata = createPageMetadata({
  title: 'Bosh sahifa',
  description: 'Pikrchi bilan Telegram BOOST va PREMIUM xizmatlarini xavfsiz, tez va shaffof narxda oling.',
  path: '/'
});

export default function HomePage() {
  const boostStandard = pricingConfig.BOOST.packages.standard;

  return (
    <>
      <section className="section-pad pb-10 md:pb-14">
        <div className="container grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <Badge className="border-primary/20 bg-primary/10 text-primary">Telegram Growth Partner</Badge>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
                Telegram o&apos;sishi uchun <span className="text-primary">BOOST</span> va <span className="text-accent">PREMIUM</span> xizmatlari
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Pikrchi ekspertlar, bizneslar va akademiyalar uchun Telegram reach, ishonch va qulay foydalanishni kuchaytiradigan xizmatlarni taklif qiladi. Narxlar shaffof, jarayon aniq, CTA esa to&apos;g&apos;ridan-to&apos;g&apos;ri Telegramga olib boradi.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton size="lg" label="Telegram orqali bog'lanish" />
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  Narx kalkulyatori
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Card className="rounded-2xl bg-card/70 p-4">
                <p className="text-xs text-muted-foreground">BOOST Standard</p>
                <p className="mt-1 font-display text-xl font-semibold">{formatUZS(boostStandard.basePrice)} UZS</p>
                <p className="text-xs text-muted-foreground">/ {boostStandard.unitLabel}</p>
              </Card>
              <Card className="rounded-2xl bg-card/70 p-4">
                <p className="text-xs text-muted-foreground">Hamkorlar</p>
                <p className="mt-1 font-display text-xl font-semibold">19+</p>
                <p className="text-xs text-muted-foreground">ekspert va brendlar</p>
              </Card>
              <Card className="rounded-2xl bg-card/70 p-4">
                <p className="text-xs text-muted-foreground">Asosiy CTA</p>
                <p className="mt-1 font-display text-xl font-semibold">Telegram</p>
                <p className="text-xs text-muted-foreground">tezkor aloqa va buyurtma</p>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden size-20 rounded-full bg-primary/20 blur-2xl sm:block" />
            <div className="absolute -bottom-8 -right-6 hidden size-24 rounded-full bg-accent/20 blur-2xl sm:block" />
            <Card className="glass-panel overflow-hidden rounded-3xl p-3 md:p-4">
              <div className="rounded-2xl border border-border/70 bg-background/80 p-3">
                <Image
                  src="/illustrations/telegram-growth.svg"
                  alt="Telegram growth analytics illustration"
                  width={800}
                  height={560}
                  priority
                  className="h-auto w-full rounded-xl"
                />
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/70 bg-card p-4 motion-safe:animate-fade-up">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <TrendingUp className="size-4 text-primary" />
                    BOOST Kampaniya
                  </div>
                  <p className="text-xs leading-5 text-muted-foreground">Launch yoki promo oldidan signal va ko&apos;rinishni oshirish uchun konfiguratsiyalangan paketlar.</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card p-4 motion-safe:animate-fade-up [animation-delay:120ms]">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <Sparkles className="size-4 text-accent" />
                    PREMIUM Paket
                  </div>
                  <p className="text-xs leading-5 text-muted-foreground">Muddatga qarab tejamkor paketlar, bulk chegirma va Telegram orqali tez tasdiqlash.</p>
                </div>
              </div>
            </Card>
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
