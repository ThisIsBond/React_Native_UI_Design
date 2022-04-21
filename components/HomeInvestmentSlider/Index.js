import { View, Text } from 'react-native'
import React from 'react'

const HomeInvestmentSlider = () => {
    return (
        <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
            <View style={{ width: '30%', height: '100%', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontFamily: 'PoppinsRegular', color: '#8198A3' }}>Weekly Deposit</Text>
                <Text style={{ fontSize: 20, fontFamily: 'PoppinsSemiBold' }}>$1000</Text>
            </View>
            <View style={{ width: '70%', height: '100%', justifyContent: 'center' }}>
                <View style={{ width: '94%', height: 16, backgroundColor: '#F0F0F0', alignSelf: 'center', borderRadius: 15 }}>
                    <View style={{ height: 17, borderRadius: 15, width: '74%', height: '100%', backgroundColor: '#00A676' }} />
                </View>
            </View>
        </View>
    )
}

export default HomeInvestmentSlider