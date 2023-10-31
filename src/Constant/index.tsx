import { useTranslation } from "react-i18next";

export const useConfiguration = () => {
    const {t} = useTranslation();

  //======================= Screen Names ===================//
  const SCREENS = {
    MAIN: "main",
    TABS: "tabs",
    API: "api",
    SPLASH: "splash",
    LOGIN: "login",
    REGISTER: "register",
    DASHBOARD: "dashboard",
    LANGUAGE: "language",
  };

  //==================== Validation Messages =================//
  const VALIDATE_FORM = {
    FIRST_NAME: "Please enter first name.",
    LAST_NAME: "Please enter last name.",
    EMAIL: t("EMAILERROR"),
    EMAIL_VALID: t("VALIDEMAILERROR"),
    PASSWORD: t("PASSWORDERROR"),
    VALID_PASSWORD: t("VALIDPASSWORDERROR"),
    DOB: "Please enter DOB.",
    SCREEN_NAME: "Please enter screen name",
    C_PASSWORD: "Please enter confirm password.",
    MISMATCH: "Password doesn't match",
    LOGOUT: "Are you sure you want to logout?",
    PRIVACY: "Please select post privacy.",
    ADDRESS: "Please enter location",
    GENDER: "Please select gender.",
    TERMS_AND_CODITION: "Please Accept Terms & Conditions and Privacy Policy.",
    NAME: t("ERRORNAME"),
    VALID_NAME: t("VALIDERRORNAME"),
    MOBILE: t("MOBILEERROR"),
    MOBILE_VALID: t("VALIDMOBILEERROR"),
  };

  return {
    SCREENS,
    VALIDATE_FORM,
  };
};
