import React from "react";
import {View, Text, ImageBackground, StyleSheet, TextInput, Pressable, Image, ScrollView} from 'react-native'

const KakaninScreen = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/kakanin_background.jpeg')}>
            <Pressable onPress={() => navigation.navigate('Suman Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/suman.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Puto Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/puto.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Kutsinta Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/kutsinta.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Biko Recipe')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/biko.png')} />
            </Pressable>
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default KakaninScreen

const styles = StyleSheet.create({
    homeScreenPictures: {
      height: 200,
      width: 350,
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