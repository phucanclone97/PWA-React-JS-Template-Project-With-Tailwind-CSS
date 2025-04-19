import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json"; // Optional: English as default
import translationAR from "./locales/ar/translation.json";
import translationHE from "./locales/he/translation.json";
import translationVI from "./locales/vi/translation.json";
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  vi: {
    translation: translationVI,
  },
  he: {
    translation: translationHE,
  },
};

i18n
  .use(LanguageDetector) // Detects language from the browser
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources,
    fallbackLng: "en", // Fallback language
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

// Handle text direction based on the selected language
i18n.on("languageChanged", (lng) => {
  document.body.dir = lng === "ar" || lng === "he" ? "rtl" : "ltr";
});

export default i18n;
