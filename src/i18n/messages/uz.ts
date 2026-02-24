import type { Messages } from '../types';

export const uzMessages: Messages = {
  common: {
    brand: 'Bustchi',
    telegramGrowth: 'Telegram Growth',
    contactTelegram: 'Telegram orqali bog\'lanish',
    day: 'kun',
    days: 'kun',
    boostUnit: 'boost birlik',
    boostUnits: 'boost birlik',
    currency: 'so\'m',
  },
  nav: {
    home: 'Bosh sahifa',
    services: 'Xizmatlar',
    partners: 'Hamkorlar',
    pricing: 'Narxlar',
    about: 'Biz haqimizda',
    contact: 'Aloqa',
    faq: 'FAQ',
  },
  theme: {
    toggleLabel: 'Mavzuni almashtirish',
  },
  home: {
    heroBadge: 'Telegram Growth Partner',
    heroTitle: 'Telegram o\'sishi uchun {boost} xizmatlari',
    heroDescription:
      'Bustchi ekspertlar, bizneslar va akademiyalar uchun Telegram reach va ishonchni kuchaytiradigan BOOST xizmatlarini taklif qiladi. Narxlar shaffof, jarayon aniq, CTA esa to\'g\'ridan-to\'g\'ri Telegramga olib boradi.',
    heroCta: 'Telegram orqali bog\'lanish',
    heroPricingButton: 'Narx kalkulyatori',
    benefitsBadge: 'Afzalliklar',
    benefitsTitle: 'Ishonch, tezlik va shaffoflikka qurilgan jarayon',
    benefitsDescription:
      'Bustchi xizmatlari marketing ko\'rinishi bilan birga real muloqot va aniq hisob-kitobni birlashtiradi.',
    benefits: {
      fastLaunch: {
        title: 'Tezkor ishga tushirish',
        description:
          'Buyurtma tasdiqlangach jarayon tez boshlanadi va status aniq beriladi.',
      },
      safeApproach: {
        title: 'Xavfsiz yondashuv',
        description:
          'Xizmat jarayoni tartibli va ehtiyotkor boshqariladi. Shaffof muloqot ustuvor.',
      },
      transparentPricing: {
        title: 'Shaffof narx',
        description:
          'Kalkulyator orqali oldindan hisob-kitob qilasiz. Konfiguratsiya asosida bir xil formula.',
      },
    },
    howItWorksBadge: 'Qanday ishlaydi',
    howItWorksTitle: '4 qadamda buyurtma berish jarayoni',
    howItWorksDescription:
      'Minimal vaqt ichida xizmatni tanlang, hisoblang va Telegram orqali tasdiqlang.',
    steps: {
      step1: {
        label: '01',
        title: 'Xizmatni tanlang',
        description: 'BOOST xizmati uchun mos paketni tanlaysiz.',
      },
      step2: {
        label: '02',
        title: 'Paket va miqdorni belgilang',
        description:
          'Narx kalkulyatori orqali paket va quantity ni aniq kiriting.',
      },
      step3: {
        label: '03',
        title: 'Telegram orqali tasdiqlang',
        description:
          'Prefill xabar bilan Telegramga o\'tasiz va buyurtmani tasdiqlaysiz.',
      },
      step4: {
        label: '04',
        title: 'Natijani kuzating',
        description:
          'Jarayon statusi va natijalar bo\'yicha muloqot olib boriladi.',
      },
    },
    partnersBadge: 'Hamkorlar',
    partnersTitle: 'Ekspertlar va brendlar bilan ishlangan',
    partnersDescription:
      'Ishonchni kuchaytirish uchun tanlangan hamkorlar preview ro\'yxati.',
    allPartnersButton: 'Barcha hamkorlar',
    ctaLabel: 'Qo\'shimcha CTA',
    ctaTitle:
      'Narxni oldindan hisoblang va Telegramda bir xabar bilan buyurtma bering',
    ctaDescription:
      'Kalkulyator barcha paketlar uchun konfiguratsiya asosida hisoblaydi. Bu sizga aniq budjet va tez tasdiqlash imkonini beradi.',
    ctaCalculatorButton: 'Kalkulyatorni ochish',
  },
  services: {
    badge: 'Xizmatlar',
    introTitle: 'Telegram BOOST xizmati',
    introDescription:
      'BOOST xizmati aniq use-case, shaffof narx va Telegram orqali tezkor buyurtma oqimi bilan taqdim etiladi.',
    boost: {
      name: 'Telegram BOOST',
      description:
        'Kanal yoki shaxsiy brend uchun ko\'rinish va reachni oshirishga qaratilgan xizmat. Kampaniyalar aniq narx va shaffof paket asosida boshqariladi.',
      forWhoTitle: 'Kimlar uchun',
      forWhoItems: [
        'Ekspertlar va trenerlar',
        'Academy va kurs launchlari',
        'Mahsulot/savdo kanallari',
        'Shaxsiy bloglar',
      ],
      includedTitle: 'Nima kiradi',
      includedItems: [
        'Boshlang\'ich audit',
        'Paket bo\'yicha boost kampaniya',
        'Jarayon monitoringi',
        'Natija haqida qisqa feedback',
      ],
      outcomesTitle: 'Kutiladigan natija',
      outcomeItems: [
        'Ko\'rinish va signal kuchayadi',
        'Ishonch va ijtimoiy isbot yaxshilanadi',
        'Launch/post performance tezroq o\'sadi',
      ],
    },
    helpTitle: 'Nima bilan yordam beramiz?',
    helpDescription:
      'Agar qaysi BOOST paketi sizga mosligini bilmasangiz, Telegram orqali maqsadingizni yozing: kanal turi, auditoriya holati va kampaniya maqsadi. Bustchi sizga mos paket va quantity bo\'yicha tavsiya beradi.',
  },
  pricing: {
    badge: 'Narxlar',
    introTitle: 'Boost narx kalkulyatori va muddatlar',
    introDescription:
      'Narxlar konfiguratsiya dagi BOOST jadvalidan olinadi. Muddatni tanlang, sonni kiriting va jami narxni darhol ko\'ring.',
    calculatorSubtitle: 'Boost narx kalkulyatori',
    calculatorTitle: 'Boost kalkulyator',
    durationLabel: 'Muddat',
    quantityLabel: 'Miqdor',
    totalFormula: 'Jami = miqdor \u00d7 dona narxi',
    quantityError: 'Miqdor kamida 1 bo\'lgan butun son bo\'lishi kerak.',
    priceTableTitle: 'Muddat bo\'yicha narx jadvali',
    outputLabel: 'Natija',
    breakdownTitle: 'Tafsilot',
    unitPriceLabel: 'Dona narxi:',
    quantityValueLabel: 'Miqdor:',
    totalLabel: 'Jami:',
    contactViaTelegram: 'Telegram orqali bog\'lanish',
    prefillNote:
      'Tayyor xabarda muddat, miqdor, dona narxi va jami summa ko\'rsatiladi.',
    configBadge: 'Konfiguratsiya asosida',
    configTitle: 'BOOST narx jadvali',
    configDescription:
      'Quyidagi qiymatlar kalkulyator ishlatadigan bir xil boostPricing konfiguratsiyasidan render qilinadi.',
    durationCardLabel: 'Muddat',
    unitPriceCardLabel: 'Dona narxi',
    perBoostUnit: '1 boost birlik uchun',
  },
  partners: {
    badge: 'Hamkorlar',
    introTitle: 'Ishlangan ekspertlar va brendlar',
    introDescription:
      'Quyidagi grid Bustchi ishlagan 50+ odamlar va kompaniyalar haqida preview ma\'lumot beradi. Logo yoki rasm bo\'lmasa gradient initials avatar avtomatik ishlatiladi.',
    categories: {
      all: 'Barchasi',
      expert: 'Ekspert',
      academy: 'Akademiya',
      business: 'Biznes',
      travel: 'Sayohat',
    },
  },
  about: {
    badge: 'Biz haqimizda',
    introTitle: 'Bustchi nima uchun yaratilgan?',
    introDescription:
      'Telegramda ishlaydigan ekspertlar va brendlar ko\'pincha xizmat tanlashda murakkab jarayon, noaniq narx va sust aloqa bilan duch keladi. Bustchi bu jarayonni minimal va aniq qiladi.',
    missionTitle: 'Missiya va yondashuv',
    missionP1:
      'Bustchi missiyasi - Telegram ekotizimida ishlovchi loyihalar uchun tezkor, tushunarli va ishonchli BOOST xizmat oqimini yaratish.',
    missionP2:
      'Platforma marketing landing formatida qurilgan: foydalanuvchi xizmatni tushunadi, narxni hisoblaydi va Telegram orqali bir klikda aloqa qiladi. Bu conversion ni oshirishga xizmat qiladi.',
    values: {
      positioning: {
        title: 'Aniq positioning',
        description:
          'Bustchi Telegram uchun natijaga yo\'naltirilgan BOOST xizmatini soddalashtiradi.',
      },
      communication: {
        title: 'Ishonchli muloqot',
        description:
          'Mijoz bilan Telegram orqali shaffof aloqa, aniq narx va kutilmalarni kelishish ustuvor hisoblanadi.',
      },
      execution: {
        title: 'Tezkor ijro',
        description:
          'Launch va kampaniya vaqtida kechikishsiz ishlash uchun oddiy, to\'g\'ridan-to\'g\'ri buyurtma oqimi yaratilgan.',
      },
    },
  },
  contact: {
    badge: 'Aloqa',
    introTitle: 'Bustchi bilan bog\'lanish',
    introDescription:
      'Forma orqali so\'rov yuboring yoki to\'g\'ridan-to\'g\'ri Telegramga yozing. Maqsadimiz: tez javob, aniq narx va tushunarli jarayon.',
    form: {
      nameLabel: 'Ism',
      namePlaceholder: 'Ismingiz',
      phoneLabel: 'Telefon',
      phonePlaceholder: '+998 ...',
      telegramLabel: 'Telegram username',
      telegramPlaceholder: '@username (ixtiyoriy)',
      messageLabel: 'Xabar',
      messagePlaceholder: 'Nima xizmat kerakligi va maqsadingizni yozing...',
      submitButton: 'Xabar yuborish',
      submittingButton: 'Yuborilmoqda...',
      altCta: 'Telegram orqali bog\'lanish',
    },
    success: {
      title: 'Xabaringiz qabul qilindi',
      description:
        'Tez orada javob beramiz. Tezroq aloqa uchun Telegram CTA tugmasidan foydalanishingiz mumkin.',
      requestIdLabel: 'So\'rov ID:',
      writeViaTelegram: 'Telegram orqali yozish',
      sendNewMessage: 'Yangi xabar yuborish',
    },
    points: {
      telegram: {
        title: 'Telegram - asosiy kanal',
        description:
          'Eng tezkor aloqa uchun Telegram CTA tugmalaridan foydalaning.',
      },
      consultation: {
        title: 'Savol va konsultatsiya',
        description:
          'Qaysi xizmat mosligini bilmasangiz, maqsadingizni yozing - tavsiya beramiz.',
      },
      transparent: {
        title: 'Shaffof jarayon',
        description:
          'Narx, timing va jarayon bosqichlari oldindan kelishiladi.',
      },
    },
    quickCta: {
      title: 'Tezkor CTA',
      description:
        'Agar buyurtma tafsilotlari tayyor bo\'lsa, narx kalkulyatoridan xabar yaratib Telegramga yuboring.',
    },
  },
  faq: {
    badge: 'FAQ',
    introTitle: 'Ko\'p beriladigan savollar',
    introDescription:
      'Xizmatlar xavfsizligi, timing, natija va narx hisob-kitobi bo\'yicha asosiy savollarga javoblar.',
    items: {
      safety: {
        question: 'Xizmatlar xavfsizmi?',
        answer:
          'Bustchi jarayonda ehtiyotkor va shaffof ishlashni ustuvor qiladi. Buyurtma bo\'yicha barcha shartlar Telegram orqali oldindan kelishiladi.',
      },
      timing: {
        question: 'Natija qancha vaqtda ko\'rinadi?',
        answer:
          'Xizmat turiga, paketga va hajmga qarab vaqt farq qiladi. Odatda buyurtma tasdiqlangach boshlanish va taxminiy timing aytiladi.',
      },
      pricing: {
        question: 'Narxlar qanday hisoblanadi?',
        answer:
          'Narxlar konfiguratsiyadan olinadi. Paket bazaviy narxi miqdorga ko\'paytiriladi va chegirma qo\'llanishi mumkin.',
      },
      support: {
        question: 'Qo\'llab-quvvatlash qayerda?',
        answer:
          'Asosiy aloqa kanali Telegram. Buyurtma va savollar uchun CTA tugmalaridan foydalanishingiz mumkin.',
      },
      who: {
        question: 'Kimlar uchun mos?',
        answer:
          'Ekspertlar, akademiyalar, shaxsiy brendlar, biznes kanallar va Telegramda faol auditoriya o\'stirmoqchi bo\'lgan loyihalar uchun mos.',
      },
    },
    stillQuestionsTitle: 'Hali savol qoldimi?',
    stillQuestionsDescription:
      'Telegram orqali savolingizni yuboring. Xizmat turi, miqdor yoki timing bo\'yicha aniq javob beramiz.',
  },
  terms: {
    badge: 'Shartlar',
    introTitle: 'Foydalanish shartlari (placeholder)',
    introDescription:
      'Bu sahifa hozircha placeholder. Keyinchalik to\'liq shartlar, refund policy va xizmat shartlari qo\'shiladi.',
    placeholder:
      'Placeholder kontent: xizmatdan foydalanish shartlari, aloqa tartibi, to\'lov va bajarilish qoidalari, mas\'uliyat cheklovlari shu yerga joylashtiriladi.',
  },
  footer: {
    description:
      'Telegram BOOST xizmati orqali ekspertlar, akademiyalar va bizneslar uchun tezkor o\'sish infratuzilmasi.',
    pagesTitle: 'Sahifalar',
    links: {
      services: 'Xizmatlar',
      partners: 'Hamkorlar',
      pricing: 'Narxlar',
      faq: 'FAQ',
      terms: 'Shartlar',
    },
    contactTitle: 'Aloqa',
    telegramHandle: 'Telegram: @bustchi',
    responseTime: 'Javob berish vaqti: 09:00 - 22:00',
    copyright: 'Bustchi. Barcha huquqlar himoyalangan.',
  },
  validation: {
    nameMin: 'Ism kamida 2 ta harf bo\'lishi kerak',
    nameMax: 'Ism juda uzun',
    phoneMin: 'Telefon raqam kiriting',
    phoneMax: 'Telefon raqam juda uzun',
    phoneFormat: 'Telefon raqam formati noto\'g\'ri',
    telegramMax: 'Telegram username juda uzun',
    telegramFormat: 'Telegram username noto\'g\'ri',
    messageMin: 'Xabar kamida 10 ta belgidan iborat bo\'lsin',
    messageMax: 'Xabar juda uzun',
  },
  errors: {
    submitFailed:
      'Xabar yuborishda xatolik yuz berdi. Qayta urinib ko\'ring.',
    networkError:
      'Tarmoq xatosi. Internetni tekshirib, qayta urinib ko\'ring.',
    tooManyRequests:
      'Juda ko\'p urinish bo\'ldi. Iltimos, birozdan keyin qayta urinib ko\'ring.',
    invalidJson: 'Yuborilgan ma\'lumot JSON formatida emas.',
    formErrors: 'Forma ma\'lumotlarida xatolik bor.',
    tooFast: 'Forma juda tez yuborildi. Iltimos, qayta urinib ko\'ring.',
    deliveryFailed:
      'Xabar yuborilmadi. Hozircha Telegram orqali bog\'laning yoki birozdan keyin qayta urinib ko\'ring.',
  },
  meta: {
    defaultTitle: 'Bustchi | Telegram BOOST xizmati',
    defaultDescription:
      'Telegram BOOST xizmati orqali kanal, brend va ekspert loyihalarini tezroq o\'sishga yordam beruvchi platforma.',
    homeTitle: 'Bosh sahifa',
    homeDescription:
      'Bustchi bilan Telegram BOOST xizmatlarini xavfsiz, tez va shaffof narxda oling.',
    servicesTitle: 'Xizmatlar',
    servicesDescription:
      'Bustchi Telegram BOOST xizmati tavsifi, paketlari va natijalari.',
    partnersTitle: 'Hamkorlar',
    partnersDescription:
      'Bustchi bilan ishlagan 50+ ekspert, akademiya va brendlar ro\'yxati.',
    pricingTitle: 'Narxlar',
    pricingDescription:
      'Bustchi Telegram BOOST xizmati uchun konfiguratsiya asosidagi narx kalkulyatori.',
    aboutTitle: 'Biz haqimizda',
    aboutDescription:
      'Bustchi missiyasi, positioning va Telegram BOOST xizmati bo\'yicha yondashuvi.',
    contactTitle: 'Aloqa',
    contactDescription:
      'Bustchi bilan bog\'lanish uchun forma va Telegram CTA.',
    faqTitle: 'FAQ',
    faqDescription:
      'Bustchi xizmatlari bo\'yicha ko\'p beriladigan savollar: xavfsizlik, timing, natija va narxlar.',
    termsTitle: 'Shartlar',
    termsDescription: 'Bustchi terms sahifasi uchun placeholder.',
  },
  telegram: {
    greeting: 'Assalomu alaykum, Bustchi! Men BOOST tanladim.',
    durationLabel: 'Muddat',
    quantityLabel: 'Soni',
    unitPriceLabel: 'Donasi',
    totalLabel: 'Jami',
    orderConfirm: 'Buyurtma beraman.',
  },
};
