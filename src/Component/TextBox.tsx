import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { FONT_FAMILIES } from '@/Configration';
import adjust from '@/Component/adjust';

export default function TextBox(props: any) {
    const { style, placeholder, value, setValue, validate, secure,num,length } = props

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                keyboardType={num?'phone-pad':'default'}
                placeholderTextColor={'grey'}
                maxLength={length?length:100}
                secureTextEntry={secure ? true : false}
                value={value}
                autoCapitalize='none'
                onChangeText={(txt) => { setValue(txt), validate(txt) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '17%',
        justifyContent: 'center'
    },
    input: {
        height: '70%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        color: 'black',
        fontSize: adjust(15),
        fontFamily:FONT_FAMILIES.REGULAR
    }
})