import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView } from 'react-native'

const HomeMadeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <ScrollView style={{width: '100%'}}>
          <View style={{alignItems: 'center'}}>
            <Pressable onPress={() => navigation.navigate('Turon')}>
              <Image style={styles.homeScreenPictures} source={require('../assets/images/turon.jpg')} />
            </Pressable>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    )
}

export default HomeMadeScreen

const styles = StyleSheet.create({
  
    homeScreenPictures: {
      height: 200,
      width: 300,
      borderRadius: 30,
      margin: 10
    },
  
    backgroundImg: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center'
    },
  
  })