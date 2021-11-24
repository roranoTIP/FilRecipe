import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

const Profile = () => {
  return (
    <View  style={styles.container}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/AddButton.jpg')}>
        <Image style={styles.userLogo} source={require('../assets/images/user_logo.png')}/>
        <View style={styles.textContainer}>
          <Text style={styles.textDesign}>Username: Melinda </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textDesign}>Recipes Shared:</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textDesign}>Turon</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },

  textContainer:{
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    marginBottom: 15,
  },

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userLogo:{
    padding: 100,
    width: 170,
    height: 150,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 60,
  },

  textDesign:{
    fontSize: 30,
  }
})
