
import React from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         // the translations
//         // (tip move them in a JSON file and import them,
//         // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//         
//         // lng: "en",
//         fallbackLng: "en",
//         interpolation: {
//             escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//         }
//     });


i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: {
                "Welcome to STTCR": "Welcome to STTCR",
                "STTCR": "STTCR",
            }
        }, ptBR: {
            translation: {
                "Welcome to STTCR": "Bem vindo ao STTCR",
                "STTCR": "STTCR",
            }
        }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;

