import { createI18n } from 'vue-i18n-lite';
import en from './locales/en';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
});

export default i18n;
