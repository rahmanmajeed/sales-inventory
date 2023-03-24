import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const fallbackLang = ["en"];
const availableLang = ["en", "bn", "ms"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLang,
    detection: {
      checkWhiteList: true,
    },
    debug: false,
    whiteList: availableLang,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
