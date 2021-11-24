import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const KutsintaRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/kutsinta.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>1 1/2 cup rice flour</Text>
        <Text style={styles.ingredientsTextDesign}>1/2 cup all-purpose flour</Text>
        <Text style={styles.ingredientsTextDesign}>1/2 cup all-purpose flour</Text>
        <Text style={styles.ingredientsTextDesign}>3 cups water</Text>
        <Text style={styles.ingredientsTextDesign}>1 1/2 tsp lye water</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}> 2 tsp anatto seeds</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. In a mixing bowl, combine all the dry ingredients starting from the rice flour, all-purpose flour, and brown sugar then mix all the ingredients.</Text>
        <Text style={styles.procedureTextDesign}>2. While mixing, add water gradually and continue to mix until all ingredients are completely distributed.</Text>
        <Text style={styles.procedureTextDesign}>3. Add lye water and anatto water (soak the anatto seed in 3 tbsp water) then continue mixing.</Text>
        <Text style={styles.procedureTextDesign}>4. Place the mixture into individual molds and steam for 40 minutes to an hour.</Text>
        <Text style={styles.procedureTextDesign}>5. Serve with grated or shredder coconut on top. Share and Enjoy!</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default KutsintaRecipe

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
        padding: 15,
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