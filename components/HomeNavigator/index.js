import { Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import React from 'react'

const HomeNavigator = ({ navigation }) => {
    return (
        <View style={{ width: '90%', marginTop: '7%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', height: 45 }}>
            <TouchableWithoutFeedback>
                <Image source={require("../../assets/figma/back4x.png")} style={{ height: 25, width: 15 }} />
            </TouchableWithoutFeedback>
            <View style={{}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', alignSelf: 'center', paddingLeft: 30 }}>Account</Text>
            </View>
            <TouchableWithoutFeedback>
                <Image source={require('../../assets/figma/bell4x.png')} style={{ height: 25, width: 22, position: 'absolute', end: 2 }} />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default HomeNavigator