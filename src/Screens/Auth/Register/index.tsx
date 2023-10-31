import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import Header from "header";
import TextBox from "@/Component/TextBox";
import { FONT_FAMILIES, REGEX } from "@/Configration";
import { useConfiguration } from "@/Constant";
import CustomButton from "@/Component/CustomButton";
import { registerBody } from "types";
import { useAppDispatch } from "@/Redux/Hooks";
import { addData } from "@/Redux/Services/Reducers";
import { showMessage } from "react-native-flash-message";
import adjust from "@/Component/adjust";
import { useTranslation } from "react-i18next";

export default function Register(props: any) {
  const { VALIDATE_FORM, SCREENS } = useConfiguration();
  const { LOGIN } = SCREENS;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [errorName, seterrorName] = useState<string | null>(null);
  const [checkName, setcheckName] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<string | null>(null);

  const [mobile, setMobile] = useState<string>("");
  const [checkMobile, setcheckMobile] = useState<boolean>(false);
  const [errorMobile, seterrorMobile] = useState<string | null>(null);

  // *********************************** name validation ********************************
  const _namevalidate = (mail: string) => {
    var nameRegex = REGEX.NAME;
    if (mail === "") {
      seterrorName(VALIDATE_FORM.NAME);
      setcheckName(true);
    } else if (!nameRegex.test(mail)) {
      seterrorName(VALIDATE_FORM.VALID_NAME);
      setcheckName(true);
    } else {
      seterrorName(null);
      setcheckName(false);
    }
  };

  // *********************************** email validation ********************************
  const _emailvalidate = (mail: string) => {
    var emailRegex = REGEX.EMAIL;
    if (mail === "") {
      setErrorEmail(VALIDATE_FORM.EMAIL);
      setCheckEmail(true);
    } else if (!emailRegex.test(mail)) {
      setErrorEmail(VALIDATE_FORM.EMAIL_VALID);
      setCheckEmail(true);
    } else {
      setErrorEmail(null);
      setCheckEmail(false);
    }
  };

  // *********************************** mobile validation ********************************
  const _mobilevalidate = (mail: string) => {
    var mobileRegex = REGEX.MOBILE;
    if (mail === "") {
      seterrorMobile(VALIDATE_FORM.MOBILE);
      setcheckMobile(true);
    } else if (!mobileRegex.test(mail)) {
      seterrorMobile(VALIDATE_FORM.MOBILE_VALID);
      setcheckMobile(true);
    } else {
      seterrorMobile(null);
      setcheckMobile(false);
    }
  };

  // ******************************* Validate Function ***********************************
  const validate = () => {
    let flag: boolean = true;
    if (name === "" || checkName) {
      seterrorName(errorName ? errorName : VALIDATE_FORM.NAME);
      flag = false;
    }
    if (email === "" || checkEmail) {
      setErrorEmail(errorEmail ? errorEmail : VALIDATE_FORM.EMAIL);
      flag = false;
    }
    if (mobile === "" || checkMobile) {
      seterrorMobile(errorMobile ? errorMobile : VALIDATE_FORM.MOBILE);
      flag = false;
    } else {
      return flag;
    }
  };

  // ******************************* Save Function ***********************************
  const { navigation } = props;
  const save = () => {
    if (validate()) {
      const body: registerBody = {
        name: name,
        email: email,
        mobile: mobile,
      };
      const DATA = { value: body };
      dispatch(addData(DATA));
      setName("");
      setEmail("");
      setMobile("");
      showMessage({ message: "Data Saved Successfully!!", type: "success" });
      navigation.navigate(LOGIN);
    }
  };

  return (
    <View style={styles.container}>
      <Header isBack title={t("REGISTER")} />
      <View style={styles.main}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={styles.box}>
            <TextBox
              placeholder={t("NAMEPLACEHOLDER")}
              value={name}
              setValue={setName}
              validate={_namevalidate}
              style={styles.txt}
            />
            {errorName !== null ? (
              <Text style={styles.errortxt}>{errorName}</Text>
            ) : null}
            <TextBox
              placeholder={t("EMAILPLACEHOLDER")}
              value={email}
              setValue={setEmail}
              validate={_emailvalidate}
              style={styles.txt}
            />
            {errorEmail !== null ? (
              <Text style={styles.errortxt}>{errorEmail}</Text>
            ) : null}
            <TextBox
              placeholder={t("MOBILEPLACEHOLDER")}
              value={mobile}
              setValue={setMobile}
              validate={_mobilevalidate}
              length={10}
              num
              style={styles.txt}
            />
            {errorMobile !== null ? (
              <Text style={styles.errortxt}>{errorMobile}</Text>
            ) : null}
            <CustomButton
              label={t("SAVE")}
              press={save}
              txtStyle={styles.txt}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 0.8,
    margin: 20,
  },
  box: {
    flex: 0.8,
  },
  errortxt: {
    color: "red",
    fontSize: adjust(12),
    fontFamily: FONT_FAMILIES.LIGHT,
  },
  txt: {
    fontSize: adjust(15),
  },
});
