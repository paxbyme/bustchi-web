export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'safety',
    question: 'Xizmatlar xavfsizmi?',
    answer:
      'Bustchi jarayonda ehtiyotkor va shaffof ishlashni ustuvor qiladi. Buyurtma bo\'yicha barcha shartlar Telegram orqali oldindan kelishiladi.'
  },
  {
    id: 'timing',
    question: 'Natija qancha vaqtda ko\'rinadi?',
    answer:
      'Xizmat turiga, paketga va hajmga qarab vaqt farq qiladi. Odatda buyurtma tasdiqlangach boshlanish va taxminiy timing aytiladi.'
  },
  {
    id: 'pricing',
    question: 'Narxlar qanday hisoblanadi?',
    answer:
      'Narxlar `src/config/pricing.ts` konfiguratsiyasidan olinadi. Paket bazaviy narxi quantity ga ko\'paytiriladi va bulk chegirma qo\'llanishi mumkin.'
  },
  {
    id: 'support',
    question: 'Qo\'llab-quvvatlash qayerda?',
    answer: 'Asosiy aloqa kanali Telegram. Buyurtma va savollar uchun CTA tugmalaridan foydalanishingiz mumkin.'
  },
  {
    id: 'who',
    question: 'Kimlar uchun mos?',
    answer:
      'Ekspertlar, akademiyalar, shaxsiy brendlar, biznes kanallar va Telegramda faol auditoriya o\'stirmoqchi bo\'lgan loyihalar uchun mos.'
  }
];
