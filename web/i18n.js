import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import nextI18NextConfig from './next-i18next.config';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'customLocalStorage',
  lookup() {
    const lng = localStorage.getItem('i18nextLng') || null;
    return lng || null;
  },
  cacheUserLanguage(lng) {
    localStorage.setItem('i18nextLng', lng);
  }
});

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    ...nextI18NextConfig,
    fallbackLng: 'en',
    detection: {
      order: ['customLocalStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    whitelist: ['en', 'es'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',  // Asegúrate de que esta ruta es correcta
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
