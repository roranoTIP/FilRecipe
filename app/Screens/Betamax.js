import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const BetamaxRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/betamax.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>1 cup Chicken blood</Text>
        <Text style={styles.ingredientsTextDesign}>1 teaspoon Salt</Text>
        <Text style={styles.ingredientsTextDesign}>1 teaspoon Pepper</Text>
        <Text style={styles.ingredientsTextDesign}>5 cups water</Text>
        <Text style={styles.ingredientsTextDesign}>2 teaspoon Oil</Text>
        <Text style={styles.ingredientsTextDesign}>2 teaspoon Soy sauce</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>1/2 cup Ketchup</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Combine the chicken blood, salt and pepper in bowl.</Text>
        <Text style={styles.procedureTextDesign}>2. Boil 5 cups of water and pour in the mixture.</Text>
        <Text style={styles.procedureTextDesign}>3. Drain the water when the blood thickens. Let it cool.</Text>
        <Text style={styles.procedureTextDesign}>4. Cut into cubes and skewered.</Text>
        <Text style={styles.procedureTextDesign}>5. Grill the blood over a charcoal stove for 10 minutes while basting with the mixture of oil, ketchup and soy sauce and let the flavour be absorbed.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default BetamaxRecipe

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
        padding: 15,
    },

    titleTextDesign: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 15,
        padding: 15
    },
  })