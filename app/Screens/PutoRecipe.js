import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const PutoRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/puto.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>4 cups all-purpose flour</Text>
        <Text style={styles.ingredientsTextDesign}>2 cups white sugar</Text>
        <Text style={styles.ingredientsTextDesign}>1 tablespoon baking powder</Text>
        <Text style={styles.ingredientsTextDesign}>6 eggs</Text>
        <Text style={styles.ingredientsTextDesign}>1 (12 fluid ounce) can evaporated milk</Text>
        <Text style={styles.ingredientsTextDesign}>1 ½ cups water</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}> 2 ¼ cups Edam cheese, shredded</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Grease small cake, puto molds, or ramekins for use in a steamer. Mix the flour, sugar, and baking powder together in a bowl. In a separate, large bowl, scramble the eggs with the evaporated milk and water. Fold the dry mixture into the eggs until evenly blended. Fill the prepared molds 2/3 of the way up with the batter and top with shredded cheese.</Text>
        <Text style={styles.procedureTextDesign}>2. Fill a wok or a sauce pan that will hold a steamer basket with a few inches of water. Bring the water to a boil over medium-high heat. Place the molds into a steamer basket and place over the boiling water and cover.</Text>
        <Text style={styles.procedureTextDesign}>3. Steam until a toothpick inserted in the center of one of the putos comes out clean, about 30 minutes. Cool on a wire rack and serve warm or at room temperature.</Text>
        
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default PutoRecipe

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
        padding: 10,
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