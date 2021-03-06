import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


export default function App() {


  const [loadFont, setFontLoad] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    loadAssetsAsync();
  }, [])


  async function loadAssetsAsync()  {

    try {
      await Font.loadAsync({

        'InterRegular': require("./assets/fonts/Project/Inter-Regular.ttf"),
        'InterBold': require("./assets/fonts/Inter/Inter-Bold.ttf"),
        'PoppinsMedium': require("./assets/fonts/Project/Poppins-Medium.ttf"),
        'PoppinsExtraBold': require("./assets/fonts/Project/Poppins-ExtraBold.ttf"),
        'PoppinsLight': require("./assets/fonts/Poppins/Poppins-Light.ttf"),
        'PoppinsSemiBold': require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        'PoppinsRegular': require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
        'PoppinsBold': require("./assets/fonts/Poppins/Poppins-Bold.ttf"),

      });
      setFontLoad(true)
    } catch (error) {
      console.log("Font Load Error => " + error);
    }

  }

  if (!loadFont) {
    return (
      <AppLoading />
    )
  }


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' options={{
            headerShown: false
          }}>
            {props => <Login {...props} loadFont={loadFont} loadAssetsAsync={loadAssetsAsync} />}
          </Stack.Screen>
          <Stack.Screen name='Home' options={{
            headerShown: false
          }}>
            {props => <Home {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#6f0cd8',
    justifyContent: 'flex-end'
  },
});
