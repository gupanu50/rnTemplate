import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import it from "./it.json";
import sp from "./sp.json";
import fr from "./fr.json";
import ar from "./ar.json";

i18n.use(initReactI18next).init({
  lng:"english",
  fallbackLng: "english",
  resources: {
    english: en,
    hindi: hi,
    italian: it,
    spanish: sp,
    french: fr,
    arabic: ar,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
