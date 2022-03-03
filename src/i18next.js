import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)


i18n
.use(Backend)
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.init({
    defaultLocale: 'ua',
    fallbackLng: 'ua',
    whitelist: ['en', 'sk', 'ua'],
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false, // react already safes from xss
    },

});

export default i18n;