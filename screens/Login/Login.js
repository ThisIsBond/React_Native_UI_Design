import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';

// icons
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';



const Login = ({ navigation, ...props }) => {

  const { loadFont, loadAssetsAsync } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState();

  useEffect(() => {
    loadAssetsAsync();
  }, [])

  async function handleLogin() {
    // navigation.navigate('Home');

    try {
      await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(handleResponse)
        .then((responseJson) => {
          setResponse(responseJson)
          navigation.navigate('Home')
          setEmail(null);
          setPassword(null);
        })
        .catch((e) =>
          console.error(e)
        )
    } catch (e) {
      console.log(e);
    }
  }

  if (!loadFont) {
    return (
      <AppLoading />
    )
  }

  const handleResponse = response => {
    if(response.ok){
      return(response)
      
    }else{
      // console.log(JSON.stringify(response));
      throw new Error('Try again!')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} contentContainerStyle={styles.containerContentStyle} >
      <View style={styles.subContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/image.jpg')} style={{ flex: 1, width: undefined, height: undefined, borderRadius: 70 }} />
          <View style={styles.profileEditContainer}>
            <MaterialIcons name="edit" size={24} color="#4563E4" />
          </View>
        </View>
        <View style={styles.userInputContainer}>
          <Text style={styles.textInputLabel}>Email Address</Text>
          <TextInput style={styles.textInputContainer} placeholder='Username' value={email} onChangeText={setEmail} />
          <Text style={[styles.textInputLabel, { marginTop: 25 }]}>Password</Text>
          <TextInput style={styles.textInputContainer} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
          <TouchableWithoutFeedback onPress={() =>
            handleLogin()
          }>
            <Text style={styles.buttonContainer}>Login</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login
