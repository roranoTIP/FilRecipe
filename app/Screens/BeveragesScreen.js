import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const BeveragesScreen = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/beverages_background.jpeg')}>
            <Pressable onPress={() => navigation.navigate('Halo-Halo Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/halohalo.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Mocha Samalamig Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/samalamig.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Mais Con Yelo Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/maisconyelo.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Taho Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/taho.png')} />
            </Pressable>
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default BeveragesScreen

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