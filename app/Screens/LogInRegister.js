import React from "react";
import {View, Text, ImageBackground, StyleSheet, TextInput, Pressable, Image, Alert} from 'react-native'

const LogInRegister = ({navigation} ) => {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground style={styles.backgroundImg} blurRadius={2} resizeMode="cover" source={require('../assets/images/background_project.png')}>
        <Text style={styles.textDesign}>Login Account</Text>
        <TextInput style={styles.inputDesign} placeholder="Username" />
        <TextInput style={styles.inputDesign} secureTextEntry placeholder="Password" />

        <Pressable style={styles.customBtn} onPress={() => navigation.navigate('Home Screen') }>
          <Text style={styles.homeButtonTxtStyle} >Login</Text>
        </Pressable>

      </ImageBackground>
    </View>
    )
}

export default LogInRegister

const styles = StyleSheet.create({

    homeButtonTxtStyle: {
      textAlign: "center", 
      color: 'white'
    },
  
    customBtn: {
      width: 200,
      height: 50,
      padding: 15,
      backgroundColor: '#ff5814',
      borderRadius: 10,
      margin: 5
    },
  
    inputDesign: {
      width: ' 80%',
      padding: 20,
      backgroundColor: '#fff',
      borderColor: '#eb4d4b',
      borderRadius: 10,
      margin: 5
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
      fontSize: 30,
      padding: 15
    },
  
  })
