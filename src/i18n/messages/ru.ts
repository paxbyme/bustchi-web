import type { Messages } from '../types';

export const ruMessages: Messages = {
  common: {
    brand: 'Bustchi',
    telegramGrowth: 'Рост в Telegram',
    contactTelegram: 'Связаться через Telegram',
    day: 'день',
    days: 'дней',
    boostUnit: 'boost-единица',
    boostUnits: 'boost-единиц',
    currency: 'сум',
  },
  nav: {
    home: 'Главная',
    services: 'Услуги',
    partners: 'Партнёры',
    pricing: 'Цены',
    about: 'О нас',
    contact: 'Контакты',
    faq: 'FAQ',
  },
  theme: {
    toggleLabel: 'Переключить тему',
  },
  home: {
    heroBadge: 'Партнёр по росту в Telegram',
    heroTitle: 'Услуги {boost} для роста в Telegram',
    heroDescription:
      'Bustchi предлагает BOOST-услуги, которые усиливают охват и доверие в Telegram для экспертов, бизнесов и академий. Прозрачные цены, чёткий процесс и CTA, ведущие напрямую в Telegram.',
    heroCta: 'Связаться через Telegram',
    heroPricingButton: 'Калькулятор цен',
    benefitsBadge: 'Преимущества',
    benefitsTitle: 'Процесс, построенный на доверии, скорости и прозрачности',
    benefitsDescription:
      'Услуги Bustchi сочетают реальную коммуникацию и точные расчёты с маркетинговым подходом.',
    benefits: {
      fastLaunch: {
        title: 'Быстрый запуск',
        description:
          'После подтверждения заказа процесс начинается оперативно, а статус предоставляется чётко.',
      },
      safeApproach: {
        title: 'Безопасный подход',
        description:
          'Процесс оказания услуг ведётся аккуратно и ответственно. Прозрачная коммуникация — приоритет.',
      },
      transparentPricing: {
        title: 'Прозрачные цены',
        description:
          'Рассчитайте стоимость заранее через калькулятор. Единая формула на основе конфигурации.',
      },
    },
    howItWorksBadge: 'Как это работает',
    howItWorksTitle: 'Заказ в 4 простых шага',
    howItWorksDescription:
      'Выберите услугу, рассчитайте и подтвердите через Telegram за минимальное время.',
    steps: {
      step1: {
        label: '01',
        title: 'Выберите услугу',
        description: 'Подберите подходящий BOOST-пакет.',
      },
      step2: {
        label: '02',
        title: 'Укажите пакет и количество',
        description:
          'Введите точный пакет и количество через калькулятор цен.',
      },
      step3: {
        label: '03',
        title: 'Подтвердите через Telegram',
        description:
          'Перейдите в Telegram с заполненным сообщением и подтвердите заказ.',
      },
      step4: {
        label: '04',
        title: 'Отслеживайте результаты',
        description:
          'Далее последует коммуникация о статусе процесса и результатах.',
      },
    },
    partnersBadge: 'Партнёры',
    partnersTitle: 'Доверие экспертов и брендов',
    partnersDescription:
      'Предварительный список партнёров, укрепляющих доверие.',
    allPartnersButton: 'Все партнёры',
    ctaLabel: 'Дополнительный CTA',
    ctaTitle:
      'Рассчитайте цену заранее и закажите одним сообщением в Telegram',
    ctaDescription:
      'Калькулятор рассчитывает все пакеты на основе конфигурации. Это даёт вам точный бюджет и быстрое подтверждение.',
    ctaCalculatorButton: 'Открыть калькулятор',
  },
  services: {
    badge: 'Услуги',
    introTitle: 'Услуга Telegram BOOST',
    introDescription:
      'BOOST-услуга предоставляется с чётким сценарием использования, прозрачными ценами и быстрым потоком заказов через Telegram.',
    boost: {
      name: 'Telegram BOOST',
      description:
        'Услуга, направленная на повышение видимости и охвата каналов или личных брендов. Кампании управляются с чёткими ценами и прозрачными пакетами.',
      forWhoTitle: 'Для кого',
      forWhoItems: [
        'Эксперты и тренеры',
        'Запуски академий и курсов',
        'Продуктовые/торговые каналы',
        'Личные блоги',
      ],
      includedTitle: 'Что входит',
      includedItems: [
        'Начальный аудит',
        'Boost-кампания по пакету',
        'Мониторинг процесса',
        'Краткая обратная связь по результатам',
      ],
      outcomesTitle: 'Ожидаемые результаты',
      outcomeItems: [
        'Видимость и сила сигнала возрастают',
        'Доверие и социальное доказательство улучшаются',
        'Производительность запусков/постов растёт быстрее',
      ],
    },
    helpTitle: 'Чем мы можем помочь?',
    helpDescription:
      'Если не знаете, какой BOOST-пакет вам подходит, опишите цель через Telegram: тип канала, состояние аудитории и цель кампании. Bustchi порекомендует подходящий пакет и количество.',
  },
  pricing: {
    badge: 'Цены',
    introTitle: 'Калькулятор цен и сроки Boost',
    introDescription:
      'Цены берутся из таблицы BOOST в конфигурации. Выберите срок, введите количество и мгновенно увидите итог.',
    calculatorSubtitle: 'Калькулятор цен Boost',
    calculatorTitle: 'Калькулятор Boost',
    durationLabel: 'Срок',
    quantityLabel: 'Количество',
    totalFormula: 'Итого = количество × цена за единицу',
    quantityError: 'Количество должно быть целым числом не менее 1.',
    priceTableTitle: 'Таблица цен по срокам',
    outputLabel: 'Результат',
    breakdownTitle: 'Детализация',
    unitPriceLabel: 'Цена за единицу:',
    quantityValueLabel: 'Количество:',
    totalLabel: 'Итого:',
    contactViaTelegram: 'Связаться через Telegram',
    prefillNote:
      'Заполненное сообщение включает срок, количество, цену за единицу и итоговую сумму.',
    configBadge: 'На основе конфигурации',
    configTitle: 'Таблица цен BOOST',
    configDescription:
      'Значения ниже отображаются из той же конфигурации boostPricing, которую использует калькулятор.',
    durationCardLabel: 'Срок',
    unitPriceCardLabel: 'Цена за единицу',
    perBoostUnit: 'за 1 boost-единицу',
  },
  partners: {
    badge: 'Партнёры',
    introTitle: 'Эксперты и бренды, с которыми мы работали',
    introDescription:
      'Сетка ниже содержит информацию о 50+ людях и компаниях, с которыми работал Bustchi. Если логотип или изображение отсутствуют, автоматически используется аватар с инициалами.',
    placeholderNote:
      'Изображения партнёров будут добавлены позже. Сейчас используются аватары-заглушки с инициалами.',
    categories: {
      all: 'Все',
      expert: 'Эксперт',
      academy: 'Академия',
      business: 'Бизнес',
      travel: 'Путешествия',
    },
  },
  about: {
    badge: 'О нас',
    introTitle: 'Зачем создан Bustchi?',
    introDescription:
      'Эксперты и бренды в Telegram часто сталкиваются со сложными процессами, непрозрачными ценами и медленной коммуникацией. Bustchi делает этот процесс минимальным и понятным.',
    missionTitle: 'Миссия и подход',
    missionP1:
      'Миссия Bustchi — создать быстрый, понятный и надёжный процесс BOOST-услуг для проектов в экосистеме Telegram.',
    missionP2:
      'Платформа построена в формате маркетингового лендинга: пользователь понимает услугу, рассчитывает цену и связывается через Telegram в один клик. Это помогает увеличить конверсию.',
    values: {
      positioning: {
        title: 'Чёткое позиционирование',
        description:
          'Bustchi упрощает BOOST-услуги для Telegram, ориентированные на результат.',
      },
      communication: {
        title: 'Надёжная коммуникация',
        description:
          'Прозрачное общение через Telegram, чёткие цены и согласование ожиданий с клиентами — главный приоритет.',
      },
      execution: {
        title: 'Быстрое исполнение',
        description:
          'Простой и прямой поток заказов, созданный для работы без задержек во время запусков и кампаний.',
      },
    },
  },
  contact: {
    badge: 'Контакты',
    introTitle: 'Свяжитесь с Bustchi',
    introDescription:
      'Отправьте запрос через форму или напишите напрямую в Telegram. Наша цель: быстрый ответ, чёткие цены и понятный процесс.',
    form: {
      nameLabel: 'Имя',
      namePlaceholder: 'Ваше имя',
      phoneLabel: 'Телефон',
      phonePlaceholder: '+998 ...',
      telegramLabel: 'Имя пользователя Telegram',
      telegramPlaceholder: '@username (необязательно)',
      messageLabel: 'Сообщение',
      messagePlaceholder:
        'Опишите, какая услуга вам нужна и вашу цель...',
      submitButton: 'Отправить сообщение',
      submittingButton: 'Отправка...',
      altCta: 'Связаться через Telegram',
    },
    success: {
      title: 'Ваше сообщение получено',
      description:
        'Мы ответим в ближайшее время. Для быстрой связи используйте кнопку Telegram CTA.',
      requestIdLabel: 'ID запроса:',
      writeViaTelegram: 'Написать в Telegram',
      sendNewMessage: 'Отправить новое сообщение',
    },
    points: {
      telegram: {
        title: 'Telegram — основной канал',
        description:
          'Используйте кнопки Telegram CTA для самой быстрой связи.',
      },
      consultation: {
        title: 'Вопросы и консультация',
        description:
          'Если не знаете, какая услуга подходит, опишите цель — мы порекомендуем.',
      },
      transparent: {
        title: 'Прозрачный процесс',
        description:
          'Цены, сроки и этапы процесса согласовываются заранее.',
      },
    },
    quickCta: {
      title: 'Быстрый CTA',
      description:
        'Если детали заказа готовы, создайте сообщение из калькулятора цен и отправьте через Telegram.',
    },
  },
  faq: {
    badge: 'FAQ',
    introTitle: 'Часто задаваемые вопросы',
    introDescription:
      'Ответы на ключевые вопросы о безопасности услуг, сроках, результатах и ценообразовании.',
    items: {
      safety: {
        question: 'Безопасны ли услуги?',
        answer:
          'Bustchi ставит в приоритет аккуратную и прозрачную работу. Все условия заказа согласовываются заранее через Telegram.',
      },
      timing: {
        question: 'Когда появятся результаты?',
        answer:
          'Сроки зависят от типа услуги, пакета и объёма. Обычно начало и приблизительные сроки сообщаются после подтверждения заказа.',
      },
      pricing: {
        question: 'Как рассчитываются цены?',
        answer:
          'Цены берутся из конфигурации. Базовая цена пакета умножается на количество, могут применяться оптовые скидки.',
      },
      support: {
        question: 'Где доступна поддержка?',
        answer:
          'Основной канал связи — Telegram. Используйте кнопки CTA для заказов и вопросов.',
      },
      who: {
        question: 'Для кого это подходит?',
        answer:
          'Подходит для экспертов, академий, личных брендов, бизнес-каналов и проектов, стремящихся развить активную аудиторию в Telegram.',
      },
    },
    stillQuestionsTitle: 'Остались вопросы?',
    stillQuestionsDescription:
      'Отправьте вопрос через Telegram. Мы дадим чёткий ответ о типе услуги, количестве или сроках.',
  },
  terms: {
    badge: 'Условия',
    introTitle: 'Условия использования (заглушка)',
    introDescription:
      'Эта страница пока является заглушкой. Полные условия, политика возврата и условия обслуживания будут добавлены позже.',
    placeholder:
      'Содержимое-заглушка: условия использования сервиса, порядок коммуникации, правила оплаты и выполнения, ограничения ответственности будут размещены здесь.',
  },
  footer: {
    description:
      'Инфраструктура быстрого роста для экспертов, академий и бизнеса через услугу Telegram BOOST.',
    pagesTitle: 'Страницы',
    links: {
      services: 'Услуги',
      partners: 'Партнёры',
      pricing: 'Цены',
      faq: 'FAQ',
      terms: 'Условия',
    },
    contactTitle: 'Контакты',
    telegramHandle: 'Telegram: @bustchi',
    responseTime: 'Время ответа: 09:00 - 22:00',
    copyright: 'Bustchi. Все права защищены.',
  },
  validation: {
    nameMin: 'Имя должно содержать минимум 2 символа',
    nameMax: 'Имя слишком длинное',
    phoneMin: 'Введите номер телефона',
    phoneMax: 'Номер телефона слишком длинный',
    phoneFormat: 'Неверный формат номера телефона',
    telegramMax: 'Имя пользователя Telegram слишком длинное',
    telegramFormat: 'Неверное имя пользователя Telegram',
    messageMin: 'Сообщение должно содержать минимум 10 символов',
    messageMax: 'Сообщение слишком длинное',
  },
  errors: {
    submitFailed: 'Не удалось отправить сообщение. Попробуйте снова.',
    networkError:
      'Ошибка сети. Проверьте интернет и попробуйте снова.',
    tooManyRequests:
      'Слишком много попыток. Пожалуйста, попробуйте позже.',
    invalidJson: 'Отправленные данные не в формате JSON.',
    formErrors: 'В данных формы есть ошибки.',
    tooFast: 'Форма отправлена слишком быстро. Попробуйте снова.',
    deliveryFailed:
      'Сообщение не отправлено. Свяжитесь через Telegram или попробуйте позже.',
  },
  meta: {
    defaultTitle: 'Bustchi | Услуга Telegram BOOST',
    defaultDescription:
      'Платформа, помогающая каналам, брендам и экспертным проектам расти быстрее с помощью Telegram BOOST.',
    homeTitle: 'Главная',
    homeDescription:
      'Получите услуги Telegram BOOST безопасно, быстро и по прозрачным ценам с Bustchi.',
    servicesTitle: 'Услуги',
    servicesDescription:
      'Описание, пакеты и результаты услуги Telegram BOOST от Bustchi.',
    partnersTitle: 'Партнёры',
    partnersDescription:
      'Список 50+ экспертов, академий и брендов, работавших с Bustchi.',
    pricingTitle: 'Цены',
    pricingDescription:
      'Калькулятор цен на основе конфигурации для услуги Telegram BOOST от Bustchi.',
    aboutTitle: 'О нас',
    aboutDescription:
      'Миссия, позиционирование и подход Bustchi к услугам Telegram BOOST.',
    contactTitle: 'Контакты',
    contactDescription:
      'Форма и Telegram CTA для связи с Bustchi.',
    faqTitle: 'FAQ',
    faqDescription:
      'Часто задаваемые вопросы об услугах Bustchi: безопасность, сроки, результаты и цены.',
    termsTitle: 'Условия',
    termsDescription: 'Страница-заглушка условий Bustchi.',
  },
  telegram: {
    greeting: 'Здравствуйте, Bustchi! Я выбрал BOOST.',
    durationLabel: 'Срок',
    quantityLabel: 'Количество',
    unitPriceLabel: 'Цена за единицу',
    totalLabel: 'Итого',
    orderConfirm: 'Хочу сделать заказ.',
  },
};
