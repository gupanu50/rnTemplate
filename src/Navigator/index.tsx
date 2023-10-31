import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Image,
  View,
  Text,
  Alert,
  BackHandler,
  Platform,
  StyleSheet,
} from "react-native";
import Splash from "screens/Splash";
import Login from "screens/Auth/Login";
import Register from "screens/Auth/Register";
import Dashboard from "screens/Dashboard";
import DrawerContent from "@/Component/DrawerContent";
import { useConfiguration } from "@/Constant";
import Api from "screens/Api";
import { COLORS, FONT_FAMILIES } from "@/Configration";
import { Images } from "@/Assets";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import adjust from "@/Component/adjust";
import Language from "@/Screens/Language";
import { useTranslation } from "react-i18next";
const navigationRef: any = React.createRef();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigator = (props: any) => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(100, 145, 185)',
    },
  };
  const { SCREENS } = useConfiguration();
  const { SPLASH, LOGIN, REGISTER, DASHBOARD, MAIN, TABS, API, LANGUAGE } =
    SCREENS;
  const { t } = useTranslation();
  //=======================================Use Effect =======================//
  React.useEffect(() => {
    function handleBackButton() {
      const routeInfo = navigationRef.current.getCurrentRoute();
      if (
        routeInfo.name.toLowerCase() === LOGIN ||
        routeInfo.name.toLowerCase() === DASHBOARD
      ) {
        exitApp();
      } else {
        if (navigationRef.current.canGoBack()) {
          navigationRef.current.goBack();
        }
      }
      return true;
    }

    // Handle when back button pressed
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );
    return () => backHandler.remove();
  }, []);

  // ****************************** exit function ***********************************
  const exitApp = () => {
    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  //========================Drawer Navigator ====================================//
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={TABS}
        drawerContent={(props: any) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name={TABS}
          component={Tabs}
          options={{
            swipeEnabled: true,
            drawerLabel: "Home",
          }}
        />
      </Drawer.Navigator>
    );
  };

  //=====================Tabs Customizations =====================================//
  const tabScreenOptions = ({ route }: any) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBarStyle,
    tabBarIcon: (data: any) => {
      const { focused } = data;
      let iconName;
      let title;
      if (route.name === DASHBOARD) {
        iconName = Images.home;
        title = t("DASHBOARD");
      } else if (route.name === API) {
        iconName = Images.clock;
        title = t("API");
      }
      return (
        <View
          style={[
            styles.tabView,
            { backgroundColor: focused ? "white" : "black" },
          ]}
        >
          <Image
            source={iconName}
            style={[
              styles.img,
              {
                tintColor: focused ? COLORS.BLACK : COLORS.WHITE,
              },
            ]}
            resizeMode={"contain"}
          />
          <Text
            style={[
              styles.txt,
              {
                color: focused ? COLORS.BLACK : COLORS.WHITE,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      );
    },
  });

  //=====================Tabs Navigator =====================================//
  const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen name={DASHBOARD} component={Dashboard} />
        <Tab.Screen name={API} component={Api} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={SPLASH}
      >
        <MainStack.Screen name={SPLASH} component={Splash} />
        <MainStack.Screen name={LOGIN} component={Login} />
        <MainStack.Screen name={REGISTER} component={Register} />
        <MainStack.Screen name={MAIN} component={DrawerNavigator} />
        <MainStack.Screen name={LANGUAGE} component={Language} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === "ios" ? "10%" : "8%",
    backgroundColor: "black",
    borderColor: "transparent",
  },
  tabView: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  img: {
    height: 30,
    width: 30,
  },
  txt: {
    fontSize: adjust(12),
    fontFamily: FONT_FAMILIES.BOLD,
  },
});
