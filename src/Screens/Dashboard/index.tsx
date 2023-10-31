import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FONT_FAMILIES } from '@/Configration';
import Header from 'header';
import { useAppSelector } from '@/Redux/Hooks';
import { dashboardData } from 'types';
import adjust from '@/Component/adjust';
import { useTranslation } from 'react-i18next';
const Dashboard = () => {
    const {t} = useTranslation();

    const data: dashboardData = useAppSelector((state) => state?.reducer?.register?.value?.value);

    return (
        <View style={styles.container}>
            <Header title={t('DASHBOARD')} />
            <View style={styles.main}>
                <View style={styles.dataBox}>
                    <Text style={styles.txt}>{t('RTK')}</Text>
                    <Text style={[styles.txt, { fontSize: adjust(15) }]}>{`${t('NAME')} : ${data?.name}`}</Text>
                    <Text style={[styles.txt, { fontSize: adjust(15) }]}>{`${t('EMAIL')} : ${data?.email}`}</Text>
                    <Text style={[styles.txt, { fontSize: adjust(15) }]}>{`${t('MOBILE')} : ${data?.mobile}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default (Dashboard);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    dataBox: {
        height: '80%',
        width: '90%'
    },
    txt: {
        height: '8%',
        textAlign: 'center',
        fontSize: adjust(20),
        fontFamily: FONT_FAMILIES.REGULAR,
        color: 'black'
    }
})
