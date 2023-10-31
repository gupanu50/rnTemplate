import React from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator, Dimensions, FlatList } from 'react-native';
import Header from 'header';
import { useFetchPostsQuery } from '@/Redux/Api/Post';
import { FONT_FAMILIES } from '@/Configration';
import adjust from '@/Component/adjust';
import { useTranslation } from 'react-i18next';
const { height, width } = Dimensions.get('screen');

const Api = () => {
    const {t} = useTranslation();
    const { data } = useFetchPostsQuery()

    const DATA = data?.data

    const renderData = (item: any) => {
        const { image, text } = item.item
        return (
            <View style={styles.slide}>
                <Image source={{ uri: image }} style={styles.img} />
                <Text style={styles.txt}>{text}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title={t('APICALL')} />
            <View style={styles.main}>
                <View style={styles.box}>
                    {DATA !== null ? <FlatList
                        data={DATA}
                        renderItem={renderData}
                        showsVerticalScrollIndicator={false}
                    /> : <ActivityIndicator size={'large'} style={styles.activity} color={'black'} />}
                </View>
            </View>
        </View>
    )
}

export default Api;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        flex: 1
    },
    box: {
        flex: 1,
        margin: 3,
        alignItems: 'center'
    },
    slide: {
        backgroundColor: 'black',
        height: height / 2,
        marginVertical: 5,
        borderRadius: 10
    },
    txt: {
        fontSize: adjust(13),
        color: 'white',
        top: 7,
        left: 6,
        fontFamily: FONT_FAMILIES.REGULAR
    },
    img: {
        flex: .95,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    activity: { top: '10%' }
})
