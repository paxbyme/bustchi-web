import { Rocket, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export interface ServiceItem {
  id: 'boost';
  name: string;
  icon: typeof Rocket;
  description: string;
  forWho: string[];
  included: string[];
  outcomes: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'boost',
    name: 'Telegram BOOST',
    icon: TrendingUp,
    description:
      'Kanal yoki shaxsiy brend uchun ko\'rinish va reachni oshirishga qaratilgan xizmat. Kampaniyalar aniq narx va shaffof paket asosida boshqariladi.',
    forWho: ['Ekspertlar va trenerlar', 'Academy va kurs launchlari', 'Mahsulot/savdo kanallari', 'Shaxsiy bloglar'],
    included: ['Boshlang\'ich audit', 'Paket bo\'yicha boost kampaniya', 'Jarayon monitoringi', 'Natija haqida qisqa feedback'],
    outcomes: ['Ko\'rinish va signal kuchayadi', 'Ishonch va ijtimoiy isbot yaxshilanadi', 'Launch/post performance tezroq o\'sadi']
  }
];

export const trustBenefits = [
  {
    title: 'Tezkor ishga tushirish',
    description: 'Buyurtma tasdiqlangach jarayon tez boshlanadi va status aniq beriladi.',
    icon: Rocket
  },
  {
    title: 'Xavfsiz yondashuv',
    description: 'Xizmat jarayoni tartibli va ehtiyotkor boshqariladi. Shaffof muloqot ustuvor.',
    icon: ShieldCheck
  },
  {
    title: 'Shaffof narx',
    description: 'Kalkulyator orqali oldindan hisob-kitob qilasiz. Konfiguratsiya asosida bir xil formula.',
    icon: Sparkles
  }
] as const;

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Xizmatni tanlang',
    description: 'BOOST xizmati uchun mos paketni tanlaysiz.'
  },
  {
    step: '02',
    title: 'Paket va miqdorni belgilang',
    description: 'Narx kalkulyatori orqali paket va quantity ni aniq kiriting.'
  },
  {
    step: '03',
    title: 'Telegram orqali tasdiqlang',
    description: 'Prefill xabar bilan Telegramga o\'tasiz va buyurtmani tasdiqlaysiz.'
  },
  {
    step: '04',
    title: 'Natijani kuzating',
    description: 'Jarayon statusi va natijalar bo\'yicha muloqot olib boriladi.'
  }
] as const;
