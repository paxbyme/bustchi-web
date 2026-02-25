export interface Messages {
  common: {
    brand: string;
    telegramGrowth: string;
    contactTelegram: string;
    day: string;
    days: string;
    boostUnit: string;
    boostUnits: string;
    currency: string;
  };
  nav: {
    home: string;
    services: string;
    partners: string;
    pricing: string;
    about: string;
    faq: string;
  };
  theme: {
    toggleLabel: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroDescription: string;
    heroCta: string;
    heroPricingButton: string;
    benefitsBadge: string;
    benefitsTitle: string;
    benefitsDescription: string;
    benefits: {
      fastLaunch: { title: string; description: string };
      safeApproach: { title: string; description: string };
      transparentPricing: { title: string; description: string };
    };
    howItWorksBadge: string;
    howItWorksTitle: string;
    howItWorksDescription: string;
    steps: {
      step1: { label: string; title: string; description: string };
      step2: { label: string; title: string; description: string };
      step3: { label: string; title: string; description: string };
      step4: { label: string; title: string; description: string };
    };
    partnersBadge: string;
    partnersTitle: string;
    partnersDescription: string;
    allPartnersButton: string;
    ctaLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaCalculatorButton: string;
  };
  services: {
    badge: string;
    introTitle: string;
    introDescription: string;
    boost: {
      name: string;
      description: string;
      forWhoTitle: string;
      forWhoItems: string[];
      includedTitle: string;
      includedItems: string[];
      outcomesTitle: string;
      outcomeItems: string[];
    };
    helpTitle: string;
    helpDescription: string;
  };
  pricing: {
    badge: string;
    introTitle: string;
    introDescription: string;
    calculatorSubtitle: string;
    calculatorTitle: string;
    durationLabel: string;
    quantityLabel: string;
    totalFormula: string;
    quantityError: string;
    priceTableTitle: string;
    outputLabel: string;
    breakdownTitle: string;
    unitPriceLabel: string;
    quantityValueLabel: string;
    totalLabel: string;
    contactViaTelegram: string;
    prefillNote: string;
    configBadge: string;
    configTitle: string;
    configDescription: string;
    durationCardLabel: string;
    unitPriceCardLabel: string;
    perBoostUnit: string;
  };
  partners: {
    badge: string;
    introTitle: string;
    introDescription: string;
    categories: {
      all: string;
      expert: string;
      academy: string;
      business: string;
      travel: string;
    };
  };
  about: {
    badge: string;
    introTitle: string;
    introDescription: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    values: {
      positioning: { title: string; description: string };
      communication: { title: string; description: string };
      execution: { title: string; description: string };
    };
  };
  faq: {
    badge: string;
    introTitle: string;
    introDescription: string;
    items: {
      safety: { question: string; answer: string };
      timing: { question: string; answer: string };
      pricing: { question: string; answer: string };
      support: { question: string; answer: string };
      who: { question: string; answer: string };
    };
    stillQuestionsTitle: string;
    stillQuestionsDescription: string;
  };
  terms: {
    badge: string;
    introTitle: string;
    introDescription: string;
    placeholder: string;
  };
  footer: {
    description: string;
    pagesTitle: string;
    links: {
      services: string;
      partners: string;
      pricing: string;
      faq: string;
      terms: string;
    };
    contactTitle: string;
    telegramHandle: string;
    responseTime: string;
    copyright: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    partnersTitle: string;
    partnersDescription: string;
    pricingTitle: string;
    pricingDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    faqTitle: string;
    faqDescription: string;
    termsTitle: string;
    termsDescription: string;
  };
  telegram: {
    greeting: string;
    durationLabel: string;
    quantityLabel: string;
    unitPriceLabel: string;
    totalLabel: string;
    orderConfirm: string;
  };
}
