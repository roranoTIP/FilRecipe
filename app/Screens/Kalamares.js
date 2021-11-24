import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const KalamaresRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/kalamares.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>3 cups vegetable oil</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup all-purpose flour</Text>
        <Text style={styles.ingredientsTextDesign}>1 teaspoon salt</Text>
        <Text style={styles.ingredientsTextDesign}>1 teaspoon dried oregano</Text>
        <Text style={styles.ingredientsTextDesign}>½ teaspoon ground black pepper</Text>
        <Text style={styles.ingredientsTextDesign}>12 squid, cleaned and sliced into rings</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>1 lemon - cut into wedges, for garnish</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Preheat oil in a heavy, deep frying pan or pot. Oil should be heated to 365 degrees F (180 degrees C).</Text>
        <Text style={styles.procedureTextDesign}>2. In a medium size mixing bowl mix together flour, salt, oregano and black pepper. Dredge squid through flour and spice mixture.</Text>
        <Text style={styles.procedureTextDesign}>3. Place squid in oil for 2 to 3 minutes or until light brown. Beware of overcooking, squid will be tough if overcooked. Dry squid on paper towels. Serve with wedges of lemon.</Text>
    
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default KalamaresRecipe

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
        padding: 25
    },

    titleTextDesign: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 15,
        padding: 20
    },
  })