export type ServiceType = 'BOOST' | 'PREMIUM';
export type PackageKey = 'starter' | 'standard' | 'pro';

export interface PackageConfig {
  label: string;
  basePrice: number;
  unitLabel: string;
  shortDescription: string;
  included: string[];
  recommendedFor: string;
  minQuantity: number;
  maxQuantity: number;
}

export interface ServicePricingConfig {
  label: string;
  description: string;
  quantityLabel: string;
  quantityHint: string;
  packages: Record<PackageKey, PackageConfig>;
  discounts?: Array<{
    minQuantity: number;
    percentOff: number;
  }>;
}

export const pricingConfig: Record<ServiceType, ServicePricingConfig> = {
  BOOST: {
    label: 'Telegram BOOST',
    description: 'Kanal yoki loyiha uchun ko\'rinish, jalb va ishonchni oshirish kampaniyalari.',
    quantityLabel: 'Kampaniya birligi',
    quantityHint: 'Masalan: post boost, promo wave yoki kampaniya unit soni',
    discounts: [
      { minQuantity: 10, percentOff: 5 },
      { minQuantity: 20, percentOff: 10 }
    ],
    packages: {
      starter: {
        label: 'Starter',
        basePrice: 85000,
        unitLabel: '1 kampaniya birligi',
        shortDescription: 'Yangi boshlayotgan kanallar uchun tezkor start paketi.',
        recommendedFor: 'Shaxsiy blog, mini-kanal, test kampaniya',
        minQuantity: 1,
        maxQuantity: 50,
        included: ['Boshlang\'ich strategiya', 'Tez ishga tushirish', 'Natija bo\'yicha qisqa hisobot']
      },
      standard: {
        label: 'Standard',
        basePrice: 140000,
        unitLabel: '1 kampaniya birligi',
        shortDescription: 'Barqaror o\'sish va takroriy kampaniyalar uchun optimal paket.',
        recommendedFor: 'Ekspertlar, kurslar, savdo kanallari',
        minQuantity: 1,
        maxQuantity: 100,
        included: ['Audit + tavsiya', 'Kampaniya optimizatsiyasi', 'O\'rta darajadagi reporting']
      },
      pro: {
        label: 'Pro',
        basePrice: 220000,
        unitLabel: '1 kampaniya birligi',
        shortDescription: 'Katta launch va agressiv o\'sish uchun premium daraja.',
        recommendedFor: 'Brend launch, academy intake, yuqori trafik kampaniya',
        minQuantity: 1,
        maxQuantity: 200,
        included: ['Prioritet navbat', 'Pro strategik setup', 'Kengaytirilgan monitoring']
      }
    }
  },
  PREMIUM: {
    label: 'Telegram PREMIUM',
    description: 'Telegram Premium aktivatsiyasi va muddatli paketlar.',
    quantityLabel: 'Kun / birlik',
    quantityHint: 'Premium paket turi bo\'yicha miqdor yoki muddat soni',
    discounts: [
      { minQuantity: 30, percentOff: 4 },
      { minQuantity: 90, percentOff: 8 }
    ],
    packages: {
      starter: {
        label: 'Starter',
        basePrice: 18000,
        unitLabel: '1 kun / birlik',
        shortDescription: 'Qisqa muddatli foydalanish uchun mos paket.',
        recommendedFor: 'Sinov, qisqa loyiha, tez aktivatsiya',
        minQuantity: 7,
        maxQuantity: 180,
        included: ['Tez aktivatsiya', 'Bazaviy support', 'Aniq narx hisob-kitobi']
      },
      standard: {
        label: 'Standard',
        basePrice: 16000,
        unitLabel: '1 kun / birlik',
        shortDescription: 'Ko\'pchilik foydalanuvchilar uchun balanslangan variant.',
        recommendedFor: 'Kontent creator, biznes account, mutaxassislar',
        minQuantity: 30,
        maxQuantity: 365,
        included: ['Tezkor ulanish', 'Muntazam qo\'llab-quvvatlash', 'Qulay bulk narx']
      },
      pro: {
        label: 'Pro',
        basePrice: 14500,
        unitLabel: '1 kun / birlik',
        shortDescription: 'Uzoq muddatli premium foydalanish uchun eng tejamkor paket.',
        recommendedFor: 'Doimiy ishlovchi ekspert va kompaniyalar',
        minQuantity: 90,
        maxQuantity: 730,
        included: ['Prioritet support', 'Bulk discount', 'Yirik buyurtma koordinatsiyasi']
      }
    }
  }
};

export interface PricingResult {
  service: ServiceType;
  packageKey: PackageKey;
  quantity: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  total: number;
  description: string;
}

export function formatUZS(amount: number) {
  return new Intl.NumberFormat('uz-UZ').format(Math.round(amount));
}

export function getDiscountPercent(service: ServiceType, quantity: number) {
  const discounts = pricingConfig[service].discounts ?? [];
  return discounts.reduce((acc, rule) => (quantity >= rule.minQuantity ? rule.percentOff : acc), 0);
}

export function calculatePrice(service: ServiceType, packageKey: PackageKey, quantity: number): PricingResult {
  const pkg = pricingConfig[service].packages[packageKey];
  const safeQuantity = Math.max(pkg.minQuantity, Math.min(quantity, pkg.maxQuantity));
  const subtotal = pkg.basePrice * safeQuantity;
  const discountPercent = getDiscountPercent(service, safeQuantity);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = subtotal - discountAmount;

  return {
    service,
    packageKey,
    quantity: safeQuantity,
    subtotal,
    discountPercent,
    discountAmount,
    total,
    description: `${pricingConfig[service].label} / ${pkg.label} - ${pkg.shortDescription}`
  };
}

export function createCalculatorTelegramMessage(result: PricingResult) {
  const serviceLabel = pricingConfig[result.service].label;
  const packageLabel = pricingConfig[result.service].packages[result.packageKey].label;
  return `Assalomu alaykum, Pikrchi!\nI selected ${serviceLabel} - ${packageLabel}.\nQuantity: ${result.quantity}\nTotal price: ${formatUZS(result.total)} UZS`;
}
