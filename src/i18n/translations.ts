export const languages = {
  uk: 'Укр',
  en: 'Eng',
};

export const defaultLang = 'uk';

export const ui = {
  uk: {
    // Nav
    'nav.services': 'Послуги',
    'nav.process': 'Як працюємо',
    'nav.prices': 'Ціни',
    'nav.contacts': 'Контакти',
    'nav.call': 'Зателефонувати',

    // Meta
    'meta.title': 'PianoTuningKyiv',
    'meta.description': 'Налаштування, обслуговування фортепіано та роялів. Київ та Київська область.',
    'meta.tagline': 'Налаштування, обслуговування фортепіано та роялів',

    // Hero
    'hero.badge': 'Виїзд до клієнта — Київ та Київська область',
    'hero.h1': 'Налаштування фортепіано та роялів з точністю, яку чути',
    'hero.sub': 'Повертаємо інструменту чисте звучання, рівний стрій і комфортну гру. Відновлюємо безнадійні інструменти. Досвід роботи з 1998 року.',
    'hero.cta': 'Записатися на налаштування',
    'hero.mission.label': 'Наша місія',
    'hero.mission.text': 'У кожній ноті — сила дії,\nу кожнім акорді — злет.\nМи наближаємо до мрії,\nщоб Ви ішли упевнено вперед.',

    // Services section
    'services.eyebrow': 'Послуги',
    'services.title': 'Все необхідне для гарного звучання',
    'services.sub': 'Від базового налаштування до комплексної перевірки механіки й рекомендацій щодо догляду.',

    // Process section
    'process.eyebrow': 'Процес',
    'process.title': 'Як проходить замовлення',
    'process.sub': 'Проста й зрозуміла схема: від першого повідомлення до готового результату.',

    // Prices section
    'prices.eyebrow': 'Ціни',
    'prices.title': 'Орієнтовна вартість послуг',
    'prices.sub': 'Фінальна ціна залежить від стану інструмента, обсягу робіт і потреби в додатковому обслуговуванні.',

    // Contacts section
    'contacts.eyebrow': 'Контакти',
    'contacts.title': 'Запишіться на налаштування вашого інструмента',
    'contacts.sub': 'Напишіть або зателефонуйте. Узгодимо час, адресу виїзду та потрібний обсяг роботи.',
    'contacts.phone_label': 'Телефон',
    'contacts.email_label': 'Пошта',
    'contacts.geo_label': 'Географія',
    'contacts.geo_value': 'Київ та Київська область',
    'contacts.schedule_label': 'Графік',
    'contacts.schedule_value': 'За попереднім записом',

    // Footer
    'footer.copy': '© 2026 PianoTuningKyiv. Налаштування та обслуговування фортепіано і роялів.',
    'footer.tagline': 'Чистий стрій • Дбайливий сервіс • Виїзд до клієнта',
  },
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.process': 'How We Work',
    'nav.prices': 'Prices',
    'nav.contacts': 'Contact',
    'nav.call': 'Call Us',

    // Meta
    'meta.title': 'PianoTuningKyiv',
    'meta.description': 'Professional piano and grand piano tuning, maintenance, and voicing. Kyiv and Kyiv region.',
    'meta.tagline': 'Piano and grand piano tuning & maintenance',

    // Hero
    'hero.badge': 'On-site visits — Kyiv & Kyiv region',
    'hero.h1': 'Piano & Grand Piano Tuning with Precision You Can Hear',
    'hero.sub': 'We restore your instrument\'s pure tone, even pitch, and comfortable playability. We bring neglected pianos back to life. Practicing since 1998.',
    'hero.cta': 'Book a Tuning',
    'hero.mission.label': 'Our mission',
    'hero.mission.text': 'In every note, the power to move;\nin every chord, a rise.\nWe bring your dream a little closer,\nso you may step ahead with confidence.',

    // Services section
    'services.eyebrow': 'Services',
    'services.title': 'Everything Your Piano Needs to Sound Its Best',
    'services.sub': 'From basic tuning to full mechanical regulation and care recommendations.',

    // Process section
    'process.eyebrow': 'Process',
    'process.title': 'How a Booking Works',
    'process.sub': 'A simple, clear flow — from your first message to a finished result.',

    // Prices section
    'prices.eyebrow': 'Prices',
    'prices.title': 'Estimated Service Costs',
    'prices.sub': 'Final price depends on the instrument\'s condition, scope of work, and any additional servicing needed.',

    // Contacts section
    'contacts.eyebrow': 'Contact',
    'contacts.title': 'Book a Tuning for Your Instrument',
    'contacts.sub': 'Write or call us. We\'ll agree on a time, your address, and the exact scope of work.',
    'contacts.phone_label': 'Phone',
    'contacts.email_label': 'Email',
    'contacts.geo_label': 'Coverage',
    'contacts.geo_value': 'City of Kyiv & Kyiv region',
    'contacts.schedule_label': 'Schedule',
    'contacts.schedule_value': 'By appointment',

    // Footer
    'footer.copy': '© 2026 PianoTuningKyiv. Piano and grand piano tuning & maintenance.',
    'footer.tagline': 'Pure Tuning • Careful Service • On-Site Visits',
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof typeof ui[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getLocalizedPath(lang: Lang, path: string = '') {
  if (lang === defaultLang) return `/${path}`;
  return `/${lang}/${path}`;
}
