import "react-native-gesture-handler";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import Navigator from "@/Navigator";
import FlashMessage from "react-native-flash-message";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { persistor, store } from "@/Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import React, { useEffect } from "react";
import LanguageProvider from "./languages/i18n/languageProvider";
// import en from "./languages/i18n/en.json";
// import hi from "./languages/i18n/hi.json";
// import i18next from "i18next";
// import { I18nextProvider } from "react-i18next";

export default function App() {
  SplashScreen.hide();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider>
          <View style={styles.container}>
            <Navigator />
            <FlashMessage
              type={"danger"}
              duration={5000}
              position={Platform.OS === "ios" ? "top" : styles.position}
              floating={Platform.OS !== "ios"}
            />
          </View>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  position: {
    top: StatusBar.currentHeight,
    left: 0,
    right: 0,
  },
});
