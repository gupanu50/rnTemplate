import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Divider, Image, ListItem } from "react-native-elements";
import { COLORS, FONT_FAMILIES, METRICS } from "@/Configration";
import { Images } from "@/Assets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useConfiguration} from "@/Constant";
import { drawerMenu, drawerSelect } from "@/Types";
import adjust from "@/Component/adjust";
import { useTranslation } from "react-i18next";

const DrawerContent = (props: any) => {
  
  const{SCREENS} = useConfiguration();
  const { MAIN, LOGIN } = SCREENS;

  const { navigation } = props;

  const { t } = useTranslation();

  // ********************** Data Source for drawer **************************************
  const menuArray: drawerMenu[] = [
    {
      name: t("DASHBOARD"),
      image: Images.home1,
      isActive: true,
      screen: MAIN,
      value:'dashboard'
    },
    {
      name: t("ACCOUNT"),
      image: Images.user,
      isActive: true,
      screen: MAIN,
      value:'account'
    },
    {
      name: t("SETTING"),
      image: Images.setting,
      isActive: true,
      screen: MAIN,
      value:'setting'
    },
    {
      name: t("LOGOUT"),
      image: Images.logout,
      isActive: true,
      screen: LOGIN,
      value:'logout'
    },
  ];

  // **************************** logOut function *****************************
  const logoutApi = () => {
    // remove data from asyncStorage also
    AsyncStorage.removeItem("user");
    navigation.navigate(LOGIN);
  };

  // ************************* function to move the screen selected ***********
  const onSelectMenu = (data: drawerSelect) => {
    const { screen, name,value } = data;
    // when select any option then the drawer close
    navigation.closeDrawer();
    if (value === "logout") {
      const actions = [
        {
          text: t("NO"),
          onPress: () => console.log("cancel Pressed"),
        },
        {
          text: t("YES"),
          onPress: () => {
            logoutApi();
          },
        },
      ];
      Alert.alert(t("LOGOUT"), t("LOGOUTMSG"), actions, {
        cancelable: false,
      });
    } else {
      navigation.navigate(screen);
    }
  };

  // ****************** Profile view in upper of drawer *************************
  const renderProfile = () => {
    return (
      <View style={styles.profile}>
        <Image source={Images.dummy} style={styles.profileImage} />
        <Text style={styles.title}>{t("DRAWERNAME")}</Text>
      </View>
    );
  };

  // ******************** rendering drawerMenu ***********************************
  const renderMenu = (item: any) => {
    const { image, name, screen,value } = item.item;
    return (
      <TouchableOpacity
        key={name}
        onPress={() => onSelectMenu({ name, screen,value })}
        style={styles.menuItem}
      >
        <ListItem containerStyle={styles.drawerContainer}>
          <Image source={image} style={styles.menuIcon} />
          <ListItem.Title style={styles.txt}> {name}</ListItem.Title>
        </ListItem>
        <Image source={Images.arrow} style={styles.arrowimg} />
      </TouchableOpacity>
    );
  };

  const renderSeprator = () => {
    return <Divider orientation={"horizontal"} color={"white"} />;
  };
  return (
    <View style={styles.container}>
      {renderProfile()}
      <FlatList
        data={menuArray}
        renderItem={renderMenu}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeprator}
      />
    </View>
  );
};
export default DrawerContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 8,
  },
  menuIcon: {
    height: 25,
    width: 25,
  },
  profileImage: {
    height: 80,
    borderRadius: 80,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    width: 80,
    resizeMode: "cover",
  },
  title: {
    marginTop: METRICS.MAR_10,
    color: COLORS.WHITE,
    fontSize: adjust(15),
    fontFamily: FONT_FAMILIES.REGULAR,
  },
  profile: {
    backgroundColor: COLORS.BLACK,
    alignItems: "center",
    paddingTop: METRICS.MAR_50,
    paddingBottom: METRICS.MAR_20,
  },
  arrowimg: {
    height: 18,
    width: 18,
    tintColor: "white",
  },
  drawerContainer: { backgroundColor: "transparent" },
  txt: {
    color: "white",
    fontSize: adjust(14),
    fontFamily: FONT_FAMILIES.REGULAR,
  },
});
