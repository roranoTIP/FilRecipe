import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Pressable, Image } from 'react-native'

const StartUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <ImageBackground style={styles.background} blurRadius={2} resizeMode="cover" source={require('../assets/images/background_project.png')}>
              <View style={{alignItems: 'center', top: 140}}>
              <Image style={{height: '51%', width: '51%'}}source={require('../assets/images/logo_project.png')}/>
              </View>
            <Text style={styles.textIntroDesign}>Discover Delicious</Text>
            <Text style={styles.textIntroDesign}>Recipes</Text>
            <Pressable style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textInfoDesign}>Login</Text>
            </Pressable>
            <Pressable style={styles.signUpBtn} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textInfoDesign}>Sign Up</Text>
            </Pressable>
          </ImageBackground>
        </View>
      )
}

export default StartUpScreen

const styles = StyleSheet.create({
    textIntroDesign:{
      fontSize: 30, 
      fontWeight: 'bold',
      fontFamily: 'monospace',
      color: 'white', 
      top: 50, 
      alignSelf: 'center',
    },
  
    textInfoDesign:{
      alignSelf: 'center', 
      color: 'white', 
      fontSize: 20,
    },
  
    loginBtn:{
      width: '90%',
      height: '8%',
      padding: 10,
      backgroundColor: '#ff5814',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      top: 80,
      margin: 10
    },
  
    signUpBtn:{
      width: '90%',
      height: '8%',
      padding: 10,
      backgroundColor: 'black',
      alignSelf: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 20,
      borderColor: '#ff5814',
      top: 70,
      margin: 10,
  
    },
  
    background:{
      flex:1,
      justifyContent: 'center',
      width: '100%',
    },
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });
  
