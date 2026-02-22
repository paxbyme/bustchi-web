import type { Metadata } from 'next';
import { Target, Shield, Zap } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';
import { PageIntro } from '@/components/page-intro';
import { Card } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';

export const metadata: Metadata = createPageMetadata({
  title: 'Biz haqimizda',
  description: 'Bustchi missiyasi, positioning va Telegram BOOST xizmati bo\'yicha yondashuvi.',
  path: '/about'
});

const values = [
  {
    icon: Target,
    title: 'Aniq positioning',
    description: 'Bustchi Telegram uchun natijaga yo\'naltirilgan BOOST xizmatini soddalashtiradi.'
  },
  {
    icon: Shield,
    title: 'Ishonchli muloqot',
    description: 'Mijoz bilan Telegram orqali shaffof aloqa, aniq narx va kutilmalarni kelishish ustuvor hisoblanadi.'
  },
  {
    icon: Zap,
    title: 'Tezkor ijro',
    description: 'Launch va kampaniya vaqtida kechikishsiz ishlash uchun oddiy, to\'g\'ridan-to\'g\'ri buyurtma oqimi yaratilgan.'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        badge="Biz haqimizda"
        title="Bustchi nima uchun yaratilgan?"
        description="Telegramda ishlaydigan ekspertlar va brendlar ko'pincha xizmat tanlashda murakkab jarayon, noaniq narx va sust aloqa bilan duch keladi. Bustchi bu jarayonni minimal va aniq qiladi."
      />

      <section className="section-pad pt-0">
        <div className="container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-2xl bg-card/70 p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold">Missiya va yondashuv</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Bustchi missiyasi - Telegram ekotizimida ishlovchi loyihalar uchun tezkor, tushunarli va ishonchli BOOST xizmat oqimini yaratish.
              </p>
              <p>
                Platforma marketing landing formatida qurilgan: foydalanuvchi xizmatni tushunadi, narxni hisoblaydi va Telegram orqali bir klikda aloqa qiladi. Bu conversion ni oshirishga xizmat qiladi.
              </p>
            </div>
            <div className="mt-5">
              <CTAButton size="lg" />
            </div>
          </Card>

          <div className="space-y-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="rounded-2xl bg-card/70 p-5">
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
