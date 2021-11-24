import React, { useState } from "react";
import {View, Text, ImageBackground, StyleSheet, TextInput, Pressable} from 'react-native'
import { createAccount } from "../../App";



const Register = ( {navigation} ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = (username, password) => {
    createAccount(username, password);
    navigation.navigate('Welcome Screen');
  }
  
    return (
        <ImageBackground style={styles.backgroundImg} blurRadius={2} resizeMode="cover" source={require('../assets/images/background_project.png')}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textDesign}>Create Account</Text>
                <TextInput style={styles.registerInput} placeholder="Username" onChangeText={(text) => setUsername(text)}/>
                <TextInput style={styles.registerInput} placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry />
            <View style={styles.homeScreenContainer}>
                <Pressable style={styles.registerBtn} onPress={() => handleCreateAccount(username,password)}>
                    <Text style={styles.homeButtonTxtStyle}>Register</Text>
                </Pressable>
            </View>
            </View>
        </ImageBackground>
    )
}

export default Register

const styles = StyleSheet.create({

    registerInput: {
      width: 300,
      height: 65,
      padding: 20,
      backgroundColor: '#fff',
      borderColor: '#eb4d4b',
      borderRadius: 10,
      margin: 5
    },
  
    registerBtn: {
      width: 200,
      height: 50,
      padding: 15,
      backgroundColor: '#ff5814',
      color: '#fff',
      borderRadius: 10,
      margin: 5
    },
    homeButtonTxtStyle: {
      textAlign: "center", 
      color: 'white'
    },
  
    homeScreenContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      justifyContent: 'center'
    },
  
    backgroundImg: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center'
    },
  
    textDesign: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: 'monospace',
      fontStyle: 'normal',
      fontSize: 25,
      padding: 15
    }
  })