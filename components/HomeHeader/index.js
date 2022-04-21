import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeHeader = ({ imgUrl, text }) => {

    return (

            <View style={{ width: '22.5%', height: 80, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '75%', height: 50, paddingLeft: 10, paddingRight: 10, paddingTop: 20, paddingBottom: 10 }}>
                    <Image  source={imgUrl} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <Text style={{ fontFamily: 'PoppinsRegular', color: 'white', fontSize: 12 }}> {text} </Text>
            </View>
    )
}

export default HomeHeader