import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import nextI18NextConfig from './next-i18next.config';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    ...nextI18NextConfig,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag'],
    },
    whitelist: ['en', 'es'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',  
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
