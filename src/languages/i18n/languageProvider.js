import React, { useEffect, useRef } from "react";
import { I18nextProvider } from "react-i18next"; // Replace with your chosen translation library
import i18n from "./i18n"; // Import your i18n configuration
import { useAppSelector } from "@/Redux/Hooks";
import { I18nManager } from "react-native";
import RNRestart from 'react-native-restart';

const LanguageProvider = ({ children }) => {
  const selectedLanguage = useAppSelector((state)=>state?.reducer?.language);

  const prevLanguageRef = useRef(null);

  console.log('=======>>>>',prevLanguageRef.current);

  console.log('=====select==>>>>',selectedLanguage);

  // Effect to handle language change and app restart
  useEffect(() => {
    if (prevLanguageRef.current !== selectedLanguage) {
      prevLanguageRef.current = selectedLanguage;
      i18n.changeLanguage(selectedLanguage).then(() => {
        I18nManager.forceRTL(i18n.language === "arabic");
        if (i18n.language === "arabic") {
          // RNRestart.restart();
        }
      });
    }
  }, [selectedLanguage]);
  
  // Set the selected language in the translation library
  // i18n.changeLanguage(selectedLanguage).then(()=>{
  //   I18nManager.forceRTL(i18n.language === 'arabic');
  //   if(i18n.language === 'arabic'){
  //     RNRestart.restart();
  //   }
  // });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default LanguageProvider;
