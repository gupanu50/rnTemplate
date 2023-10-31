import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, Platform } from 'react-native';
import { Header as HeaderElement } from 'react-native-elements';
import { Images } from "@/Assets";
import { COLORS, FONT_FAMILIES } from "@/Configration";
import { useNavigation } from "@react-navigation/native";
import adjust from "@/Component/adjust";

const Header = (props: any) => {
    const { bc, isBack, isBackHide, title, isRightAction } = props;
    const navigation: any = useNavigation();

    // ************************** drawer function *****************************************
    const openDrawer = () => {
        if (isBack) {
            navigation.goBack()
            return;
        }
        navigation.openDrawer();
    };

    // *********************** function to navigate to a specific screen *****************
    const goToScreen = (name: string) => {
        navigation.navigate(name);
    };

    // ********************** left component of header ***********************************
    const leftComponent = () => {
        if (isBack && !isBackHide) {
            return (
                <TouchableOpacity onPress={openDrawer} style={styles.leftComponent}>
                    <Image source={Images.back} style={[styles.menubar, { height: 30, width: 30 }]} />
                </TouchableOpacity>
            );
        } else if (isBackHide) {
            return null
        }
        else {
            return (
                <TouchableOpacity onPress={openDrawer} style={styles.leftComponent}>
                    <Image source={Images.menu} style={styles.menubar} />
                </TouchableOpacity>
            );
        }
    };

    // ******************* right component of header ***********************************
    const rightComponent = () => {
        if (isRightAction === undefined) {
            return (
                <View style={styles.rightComponent}>
                    <TouchableOpacity />
                </View>
            );
        }
        return (
            <View style={styles.rightComponent}>
                <TouchableOpacity>
                    <Image source={Images.notification} style={styles.menubar} />
                </TouchableOpacity>

            </View>
        );
    };

    // *************** center component where title appear in header *******************
    const centerComponent = () => {
        return (<View style={{ height: 50, justifyContent: 'center' }}><Text style={[styles.text]}>{title}</Text>
        </View>)
    }

    return (
        <View style={styles.mainView}>
            {/* @ts-ignore */}
            <HeaderElement
                statusBarProps={{ barStyle: 'light-content', translucent: true, backgroundColor: 'transparent' }}
                containerStyle={styles.container}
                placement={'center'}
                centerComponent={title ? centerComponent : null}
                leftComponent={leftComponent}
                rightComponent={rightComponent}
                backgroundColor={bc ? "transparent" : COLORS.BLACK} />
        </View>
    );
};
export default Header;
const styles = StyleSheet.create({
    mainView: { marginTop: Platform.OS === 'ios' ? 0 : -20, },
    container: {
        borderBottomColor: 'transparent'
    },
    leftComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    },
    menubar: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    text: {
        fontSize: adjust(18),
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: FONT_FAMILIES.BOLD
    },
    rightComponent: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        width: 50

    }
});

