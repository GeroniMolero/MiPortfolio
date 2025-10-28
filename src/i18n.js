import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

// Configurar los idiomas y recursos
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo si no se encuentra el texto
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad
    },
  });

export default i18n;
