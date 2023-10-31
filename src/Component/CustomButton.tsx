import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { FONT_FAMILIES } from '@/Configration';
import React from 'react';
import adjust from '@/Component/adjust';

export default function CustomButton(props:any) {
    const{press,style,label,txtStyle,disable} = props;
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.btn,style]} onPress={press} disabled={disable}>
            <Text style={[styles.txt,txtStyle]}>{label}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:'20%',
        justifyContent:'center'
    },
    btn:{
        backgroundColor:'black',
        borderRadius:30,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        padding:'3%'
    },
    txt:{
        color:'white',
        fontSize:adjust(15),
        fontFamily:FONT_FAMILIES.MEDIUM
    }
})