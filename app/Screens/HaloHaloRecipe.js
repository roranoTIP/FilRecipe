import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const HaloHaloRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode='cover' source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/halohalo.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>1 (12 ounce) can jackfruit, drained and diced</Text>
        <Text style={styles.ingredientsTextDesign}>1 (12 ounce) jar sweetened white kidney beans</Text>
        <Text style={styles.ingredientsTextDesign}>1 (12 ounce) jar red (adzuki) beans, drained</Text>
        <Text style={styles.ingredientsTextDesign}>shaved ice</Text>
        <Text style={styles.ingredientsTextDesign}>½ cup evaporated milk, or to taste</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>½ cup vanilla ice cream, or to taste</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Place jack fruit in a bowl. Add white beans and red beans and mix thoroughly.</Text>
        <Text style={styles.procedureTextDesign}>2. Place 2 tablespoons of the jackfruit mixture in a tall glass. Fill glass 2/3-full of shaved ice. Pour evaporated milk over the shaved ice. Mix using a teaspoon. Top with 2 tablespoons vanilla ice cream. Repeat layering the halo halo in 3 more glasses.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default HaloHaloRecipe

const styles = StyleSheet.create({
  
    screenPictures: {
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
  
    ingredientsTextDesign: {
      textAlign: 'center',
      color: '#fff',
      fontStyle: 'normal',
      fontSize: 15,
    },

    procedureTextDesign: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 30,
    },

    titleTextDesign: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 15,
        padding: 35
    },
  })