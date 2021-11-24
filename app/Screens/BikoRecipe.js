import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const BikoRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/biko.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>4 cups uncooked glutinous white rice</Text>
        <Text style={styles.ingredientsTextDesign}>6 cups cold water</Text>
        <Text style={styles.ingredientsTextDesign}>1 (14 ounce) can coconut milk, divided</Text>
        <Text style={styles.ingredientsTextDesign}>1 ⅓ cups white sugar</Text>
        <Text style={styles.ingredientsTextDesign}>1 ⅓ cups brown sugar</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>3 tablespoons coconut preserves (such as Phil Supreme®)</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Soak rice overnight in the water.</Text>
        <Text style={styles.procedureTextDesign}>2. Preheat oven to 350 degrees F (175 degrees C). Grease a 9x13 inch baking pan.</Text>
        <Text style={styles.procedureTextDesign}>3. Cook the soaked rice over medium heat in a saucepan with the soaking water, 1/2 can of coconut milk, and white sugar, stirring constantly, until tender and thickened, about 20 minutes. Pour into the prepared baking pan.</Text>
        <Text style={styles.procedureTextDesign}>4. Stir together the brown sugar, remaining 1/2 can of coconut milk, and coconut preserves in a small saucepan, and bring to a boil. Pour the mixture carefully over the rice.</Text>
        <Text style={styles.procedureTextDesign}>5. Bake in the preheated oven until the topping thickens, about 25 minutes. Cool completely; cut into squares to serve.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default BikoRecipe

const styles = StyleSheet.create({
  
    screenPictures: {
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
        padding: 8,
    },

    titleTextDesign: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 15,
        padding: 18
    },
  })