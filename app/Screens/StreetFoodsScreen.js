import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const StreetFoodScreen = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/streetfoods_background.jpeg')}>
            <Pressable onPress={() => navigation.navigate('Kwek-Kwek Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/kwekkwek.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Kalamares Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/kalamares.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Betamax Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/betamax.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Barbeque Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/barbeque.png')} />
            </Pressable>
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default StreetFoodScreen

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