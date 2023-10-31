import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import adjust from "@/Component/adjust";
import { COLORS, FONT_FAMILIES } from "@/Configration";
import { languages } from "@/Types";
import CustomButton from "@/Component/CustomButton";
import { useAppDispatch } from "@/Redux/Hooks";
import { setLanguage } from "@/Redux/Services/Reducers";
import { useConfiguration } from "@/Constant";
import { useTranslation } from "react-i18next";

export default function Language(props: any) {
  const { SCREENS } = useConfiguration();
  const { LOGIN } = SCREENS;
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [key, setKey] = useState<Number>(1);
  const [lng, setLng] = useState<String>("English");
  const DATA: languages[] = [
    { id: 1, name: "English", lg: "english" },
    { id: 2, name: "हिन्दी", lg: "hindi" },
    { id: 3, name: "Italiano", lg: "italian" },
    { id: 4, name: "Francese", lg: "french" },
    { id: 5, name: "Español", lg: "spanish" },
    { id: 6, name: "عربي", lg: "arabic" },
  ];

  useEffect(() => {
    i18n.changeLanguage(lng.toLowerCase());
  }, [lng]);

  function renderLanguages(item: any) {
    const { name, id, lg } = item.item;
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setKey(id), setLng(lg);
        }}
      >
        <Text style={[styles.txt, { textAlign: "left", fontSize: adjust(17) }]}>
          {name}
        </Text>
        <View
          style={[
            styles.tick,
            { padding: id === key ? adjust(3) : adjust(10) },
          ]}
        >
          {id === key && <View style={styles.underTick} />}
        </View>
      </TouchableOpacity>
    );
  }

  function gettingStarted() {
    dispatch(setLanguage(lng.toLowerCase()));
    props.navigation.navigate(LOGIN);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={[styles.txt, { marginVertical: "3%" }]}>
          {t("SELECTLANGUAGE")}
        </Text>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderLanguages}
        />
        <CustomButton
          label={t("GETTINGSTART")}
          style={{ backgroundColor: key !== 0 ? "black" : "grey" }}
          press={gettingStarted}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    margin: adjust(15),
  },
  txt: {
    textAlign: "center",
    fontSize: adjust(25),
    fontFamily: FONT_FAMILIES.MEDIUM,
  },
  btn: {
    marginVertical: "2%",
    padding: adjust(10),
    paddingHorizontal: adjust(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tick: {
    // backgroundColor:'green',
    padding: adjust(3),
    borderRadius: adjust(30),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.BORDER_COLOR,
  },
  underTick: {
    padding: adjust(8),
    borderRadius: adjust(30),
    backgroundColor: "black",
  },
});
