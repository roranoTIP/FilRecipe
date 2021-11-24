import React from "react";
import { Text,View, ImageBackground, Image, StyleSheet, Pressable, ScrollView, } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1}}>
          <View style={{flex: 1}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Pressable onPress={() => navigation.navigate('Kakanin')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/kakanin_category.png')} />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Beverages')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/beverages_category.png')} />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Street Foods')}>
                <Image style={styles.homeScreenPictures} source={require('../assets/images/streetfoods_category.png')} />
              </Pressable>
            </ScrollView>
          </View>

          <View style={{position: 'absolute'}}>           
            <Image style={styles.bookMark} source={require('../assets/images/bookmark.png')} />
          </View>
          <View style={{position: 'absolute'}}>           
            <Text style={{top: 24, left: 11, fontSize: 14, fontFamily: 'monospace'}}>Categories</Text>
          </View>

          <View style={{flex: 1}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Pressable onPress={() => navigation.navigate('Halo-Halo Recipe')}>
                  <Image style={styles.homeScreenPictures} source={require('../assets/images/halohalo.jpeg')} />
            </Pressable>
              <Pressable onPress={() => navigation.navigate('Mocha Samalamig Recipe')}>
                  <Image style={styles.homeScreenPictures} source={require('../assets/images/samalamig.jpeg')} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Barbeque Recipe')}>
                  <Image style={styles.homeScreenPictures} source={require('../assets/images/barbeque.jpeg')} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Puto Recipe')}>
                  <Image style={styles.homeScreenPictures} source={require('../assets/images/puto.jpeg')} />
                </Pressable>
            </ScrollView>
          </View>

          <View style={{position: 'absolute'}}>           
            <Image style={styles.bookMark2} source={require('../assets/images/bookmark.png')} />
          </View>
          <View style={{position: 'absolute'}}>           
            <Text style={{top: 224, left: 11, fontSize: 14, fontFamily: 'monospace'}}>Favorites</Text>
          </View>
          
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <Pressable onPress={() => navigation.navigate('Home Made Recipes')}>
              <Image style={styles.homeMadeCat} source={require('../assets/images/homemade_category.png')} />
            </Pressable>
          </View>

          <View style={{flex: 0.4}}>
            <Pressable onPress={() => navigation.navigate('Add Recipe')}>
              <Image style={styles.homeMadeCat} source={require('../assets/images/AddButton.jpg')} />
              <Text style={{position: 'absolute', fontFamily:'monospace', fontSize: 60, left: 180}}>+</Text>
            </Pressable>
          </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  bookMark2: {
    height: 50,
    width: 125,
    top: 210,
    left: -5,
    borderRadius: 90
  },

  bookMark: {
    height: 50,
    width: 130,
    top: 10,
    left: -5,
    borderRadius: 90
  },
  homeMadeCat: {
    height: 220,
    width: 420,
    borderWidth: 1,
    borderColor: 'black'
  },
  homeScreenPictures: {
    height: 220,
    width: 410,
    borderWidth: 1,
    borderColor: 'black'
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
})
