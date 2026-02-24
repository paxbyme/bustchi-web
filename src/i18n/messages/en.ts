import type { Messages } from '../types';

export const enMessages: Messages = {
  common: {
    brand: 'Bustchi',
    telegramGrowth: 'Telegram Growth',
    contactTelegram: 'Contact via Telegram',
    day: 'day',
    days: 'days',
    boostUnit: 'boost unit',
    boostUnits: 'boost units',
    currency: 'UZS',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    partners: 'Partners',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    faq: 'FAQ',
  },
  theme: {
    toggleLabel: 'Toggle theme',
  },
  home: {
    heroBadge: 'Telegram Growth Partner',
    heroTitle: '{boost} services for Telegram growth',
    heroDescription:
      'Bustchi offers BOOST services that enhance Telegram reach and trust for experts, businesses, and academies. Transparent pricing, clear process, and CTA leading directly to Telegram.',
    heroCta: 'Contact via Telegram',
    heroPricingButton: 'Pricing calculator',
    benefitsBadge: 'Benefits',
    benefitsTitle: 'A process built on trust, speed, and transparency',
    benefitsDescription:
      'Bustchi services combine real communication and precise calculations with a marketing-grade experience.',
    benefits: {
      fastLaunch: {
        title: 'Quick launch',
        description:
          'Once the order is confirmed, the process starts promptly and status updates are provided.',
      },
      safeApproach: {
        title: 'Safe approach',
        description:
          'The service process is managed carefully and responsibly. Transparent communication is a priority.',
      },
      transparentPricing: {
        title: 'Transparent pricing',
        description:
          'Calculate costs upfront via the calculator. A single formula based on configuration.',
      },
    },
    howItWorksBadge: 'How it works',
    howItWorksTitle: 'Order in 4 simple steps',
    howItWorksDescription:
      'Choose a service, calculate, and confirm via Telegram in minimal time.',
    steps: {
      step1: {
        label: '01',
        title: 'Choose a service',
        description: 'Select the right BOOST package for you.',
      },
      step2: {
        label: '02',
        title: 'Set package and quantity',
        description:
          'Enter the exact package and quantity via the pricing calculator.',
      },
      step3: {
        label: '03',
        title: 'Confirm via Telegram',
        description:
          'Switch to Telegram with a pre-filled message and confirm your order.',
      },
      step4: {
        label: '04',
        title: 'Track results',
        description:
          'Communication about process status and results will follow.',
      },
    },
    partnersBadge: 'Partners',
    partnersTitle: 'Trusted by experts and brands',
    partnersDescription:
      'A preview of selected partners who strengthen credibility.',
    allPartnersButton: 'All partners',
    ctaLabel: 'Additional CTA',
    ctaTitle:
      'Calculate the price upfront and order with a single Telegram message',
    ctaDescription:
      'The calculator computes all packages based on configuration. This gives you a clear budget and fast confirmation.',
    ctaCalculatorButton: 'Open calculator',
  },
  services: {
    badge: 'Services',
    introTitle: 'Telegram BOOST service',
    introDescription:
      'The BOOST service is delivered with a clear use case, transparent pricing, and a fast Telegram-based order flow.',
    boost: {
      name: 'Telegram BOOST',
      description:
        'A service designed to increase visibility and reach for channels or personal brands. Campaigns are managed with clear pricing and transparent packages.',
      forWhoTitle: 'Who is it for',
      forWhoItems: [
        'Experts and trainers',
        'Academy and course launches',
        'Product/sales channels',
        'Personal blogs',
      ],
      includedTitle: "What's included",
      includedItems: [
        'Initial audit',
        'Package-based boost campaign',
        'Process monitoring',
        'Brief results feedback',
      ],
      outcomesTitle: 'Expected outcomes',
      outcomeItems: [
        'Visibility and signal strength increase',
        'Trust and social proof improve',
        'Launch/post performance grows faster',
      ],
    },
    helpTitle: 'How can we help?',
    helpDescription:
      'If you\'re unsure which BOOST package suits you, describe your goal via Telegram: channel type, audience status, and campaign objective. Bustchi will recommend the right package and quantity.',
  },
  pricing: {
    badge: 'Pricing',
    introTitle: 'Boost pricing calculator and durations',
    introDescription:
      'Prices come from the BOOST table in configuration. Select a duration, enter quantity, and see the total instantly.',
    calculatorSubtitle: 'Boost pricing calculator',
    calculatorTitle: 'Boost calculator',
    durationLabel: 'Duration',
    quantityLabel: 'Quantity',
    totalFormula: 'Total = quantity x unit price',
    quantityError: 'Quantity must be an integer of at least 1.',
    priceTableTitle: 'Price table by duration',
    outputLabel: 'Result',
    breakdownTitle: 'Breakdown',
    unitPriceLabel: 'Unit price:',
    quantityValueLabel: 'Quantity:',
    totalLabel: 'Total:',
    contactViaTelegram: 'Contact via Telegram',
    prefillNote:
      'The pre-filled message includes duration, quantity, unit price, and total amount.',
    configBadge: 'Configuration-based',
    configTitle: 'BOOST price table',
    configDescription:
      'The values below are rendered from the same boostPricing configuration used by the calculator.',
    durationCardLabel: 'Duration',
    unitPriceCardLabel: 'Unit price',
    perBoostUnit: 'per 1 boost unit',
  },
  partners: {
    badge: 'Partners',
    introTitle: "Experts and brands we've worked with",
    introDescription:
      'The grid below provides preview information about 50+ people and companies Bustchi has worked with. If no logo or image is available, a gradient initials avatar is used automatically.',
    placeholderNote:
      'Partner images will be added later. Placeholder/initials avatars are currently in use.',
    categories: {
      all: 'All',
      expert: 'Expert',
      academy: 'Academy',
      business: 'Business',
      travel: 'Travel',
    },
  },
  about: {
    badge: 'About us',
    introTitle: 'Why was Bustchi created?',
    introDescription:
      'Experts and brands working on Telegram often face complicated processes, unclear pricing, and slow communication. Bustchi makes this process minimal and clear.',
    missionTitle: 'Mission and approach',
    missionP1:
      "Bustchi's mission is to create a fast, understandable, and reliable BOOST service flow for projects operating in the Telegram ecosystem.",
    missionP2:
      'The platform is built in a marketing landing format: users understand the service, calculate the price, and contact via Telegram in one click. This helps increase conversion.',
    values: {
      positioning: {
        title: 'Clear positioning',
        description:
          'Bustchi simplifies result-oriented BOOST services for Telegram.',
      },
      communication: {
        title: 'Trustworthy communication',
        description:
          'Transparent communication via Telegram, clear pricing, and aligning expectations with clients is a top priority.',
      },
      execution: {
        title: 'Fast execution',
        description:
          'A simple, direct order flow designed for working without delays during launches and campaigns.',
      },
    },
  },
  contact: {
    badge: 'Contact',
    introTitle: 'Get in touch with Bustchi',
    introDescription:
      'Submit a request via the form or write directly on Telegram. Our goal: fast response, clear pricing, and an understandable process.',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      phoneLabel: 'Phone',
      phonePlaceholder: '+998 ...',
      telegramLabel: 'Telegram username',
      telegramPlaceholder: '@username (optional)',
      messageLabel: 'Message',
      messagePlaceholder:
        'Describe what service you need and your goal...',
      submitButton: 'Send message',
      submittingButton: 'Sending...',
      altCta: 'Contact via Telegram',
    },
    success: {
      title: 'Your message has been received',
      description:
        'We will respond shortly. For faster communication, use the Telegram CTA button.',
      requestIdLabel: 'Request ID:',
      writeViaTelegram: 'Write via Telegram',
      sendNewMessage: 'Send a new message',
    },
    points: {
      telegram: {
        title: 'Telegram — primary channel',
        description:
          'Use the Telegram CTA buttons for the fastest communication.',
      },
      consultation: {
        title: 'Questions and consultation',
        description:
          "If you're unsure which service fits, describe your goal — we'll recommend.",
      },
      transparent: {
        title: 'Transparent process',
        description:
          'Pricing, timing, and process stages are agreed upon in advance.',
      },
    },
    quickCta: {
      title: 'Quick CTA',
      description:
        'If your order details are ready, generate a message from the pricing calculator and send it via Telegram.',
    },
  },
  faq: {
    badge: 'FAQ',
    introTitle: 'Frequently asked questions',
    introDescription:
      'Answers to key questions about service safety, timing, results, and pricing.',
    items: {
      safety: {
        question: 'Are the services safe?',
        answer:
          'Bustchi prioritizes careful and transparent operations. All terms for orders are agreed upon in advance via Telegram.',
      },
      timing: {
        question: 'How long until results appear?',
        answer:
          'Timing varies based on service type, package, and volume. Typically, the start and estimated timing are communicated after order confirmation.',
      },
      pricing: {
        question: 'How are prices calculated?',
        answer:
          'Prices come from configuration. The base package price is multiplied by quantity, and bulk discounts may apply.',
      },
      support: {
        question: 'Where is support available?',
        answer:
          'The primary communication channel is Telegram. Use CTA buttons for orders and questions.',
      },
      who: {
        question: 'Who is it suitable for?',
        answer:
          'Suitable for experts, academies, personal brands, business channels, and projects looking to grow an active Telegram audience.',
      },
    },
    stillQuestionsTitle: 'Still have questions?',
    stillQuestionsDescription:
      "Send your question via Telegram. We'll provide a clear answer about service type, quantity, or timing.",
  },
  terms: {
    badge: 'Terms',
    introTitle: 'Terms of use (placeholder)',
    introDescription:
      'This page is currently a placeholder. Full terms, refund policy, and service conditions will be added later.',
    placeholder:
      'Placeholder content: terms of service, communication procedures, payment and fulfillment rules, and liability limitations will be placed here.',
  },
  footer: {
    description:
      'Fast growth infrastructure for experts, academies, and businesses via Telegram BOOST service.',
    pagesTitle: 'Pages',
    links: {
      services: 'Services',
      partners: 'Partners',
      pricing: 'Pricing',
      faq: 'FAQ',
      terms: 'Terms',
    },
    contactTitle: 'Contact',
    telegramHandle: 'Telegram: @bustchi',
    responseTime: 'Response hours: 09:00 - 22:00',
    copyright: 'Bustchi. All rights reserved.',
  },
  validation: {
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name is too long',
    phoneMin: 'Enter a phone number',
    phoneMax: 'Phone number is too long',
    phoneFormat: 'Invalid phone number format',
    telegramMax: 'Telegram username is too long',
    telegramFormat: 'Invalid Telegram username',
    messageMin: 'Message must be at least 10 characters',
    messageMax: 'Message is too long',
  },
  errors: {
    submitFailed: 'Failed to send message. Please try again.',
    networkError: 'Network error. Check your internet and try again.',
    tooManyRequests: 'Too many attempts. Please try again shortly.',
    invalidJson: 'The submitted data is not in JSON format.',
    formErrors: 'There are errors in the form data.',
    tooFast: 'Form was submitted too quickly. Please try again.',
    deliveryFailed:
      'Message could not be sent. Contact us via Telegram or try again later.',
  },
  meta: {
    defaultTitle: 'Bustchi | Telegram BOOST Service',
    defaultDescription:
      'A platform that helps channels, brands, and expert projects grow faster through Telegram BOOST services.',
    homeTitle: 'Home',
    homeDescription:
      'Get Telegram BOOST services safely, quickly, and at transparent prices with Bustchi.',
    servicesTitle: 'Services',
    servicesDescription:
      'Bustchi Telegram BOOST service description, packages, and outcomes.',
    partnersTitle: 'Partners',
    partnersDescription:
      'A list of 50+ experts, academies, and brands that have worked with Bustchi.',
    pricingTitle: 'Pricing',
    pricingDescription:
      'Configuration-based pricing calculator for Bustchi Telegram BOOST service.',
    aboutTitle: 'About us',
    aboutDescription:
      "Bustchi's mission, positioning, and approach to Telegram BOOST services.",
    contactTitle: 'Contact',
    contactDescription:
      'Form and Telegram CTA to get in touch with Bustchi.',
    faqTitle: 'FAQ',
    faqDescription:
      'Frequently asked questions about Bustchi services: safety, timing, results, and pricing.',
    termsTitle: 'Terms',
    termsDescription: 'Bustchi terms page placeholder.',
  },
  telegram: {
    greeting: 'Hello, Bustchi! I selected BOOST.',
    durationLabel: 'Duration',
    quantityLabel: 'Quantity',
    unitPriceLabel: 'Unit price',
    totalLabel: 'Total',
    orderConfirm: 'I would like to place an order.',
  },
};
