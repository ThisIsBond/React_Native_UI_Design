import { View, Text } from 'react-native'
import React, { useState } from 'react'

const HomeTitleBar = ({ titleMainHeaderText, titleSubHeaderText, titleLeftEndText }) => {



  // const [defaultHide, setDefaultHide] = useState(false);
  // const [hideSubHeader, setHideSubHeader] = useState();

  // if (subHeaderHide === '') {
  //   return setDefaultHide(false)
  // } else {
  //   setDefaultHide(subHeaderHide)
  // }

  return (
    <View style={{ width: '94%', height: 80, alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent:'center' }}>
      <View style={{ width: '70%', height: 80 }}>
        <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 24, color: '#023047' }}>{titleMainHeaderText}</Text>
        <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 18, color: '#8198A3' }}>{titleSubHeaderText}</Text>
      </View>
      <View style={{ width: '30%', height: '90%', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 15, color: '#8198A3' }}>{titleLeftEndText}</Text>
      </View>
    </View>

  )
}

export default HomeTitleBar