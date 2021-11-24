import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const MaisConYeloRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/maisconyelo.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>1-2 cups shaved ice</Text>
        <Text style={styles.ingredientsTextDesign}>1 tbsp sugar or any sweetener that you prefer.</Text>
        <Text style={styles.ingredientsTextDesign}>1 tbsp corn cereal for toppings optional</Text>
        <Text style={styles.ingredientsTextDesign}>1/2 cup cream corn you may use whole kernel corn if you prefer</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>1/2 cup condensed or evaporated milk</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Put creamed corn into a halo halo / parfait glass.</Text>
        <Text style={styles.procedureTextDesign}>2. Top glass with shaved ice.</Text>
        <Text style={styles.procedureTextDesign}>3. Pour milk over ice.</Text>
        <Text style={styles.procedureTextDesign}>4. Top with corn flakes.</Text>
        <Text style={styles.procedureTextDesign}>5. Stir well and add sweetener until desired sweetness is reached.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default MaisConYeloRecipe

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
        padding: 35
    },
  })