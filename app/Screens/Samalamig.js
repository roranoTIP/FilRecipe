import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const SamalamigRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/samalamig.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>1 tbsp or 1 (2g) Nescafe Classic Sachet</Text>
        <Text style={styles.ingredientsTextDesign}>1 tbsp or 1 (5g) Coffee-Mate Creamer Sachet</Text>
        <Text style={styles.ingredientsTextDesign}>2-3 tbsp. sugar</Text>
        <Text style={styles.ingredientsTextDesign}>½ cup hot water</Text>
        <Text style={styles.ingredientsTextDesign}>½ cup cold water</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup cooked sago</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup cooked gulaman or jelly ace</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>3-4 ice cubes

</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Cooked ¼ cup of sago in 4 cups of water, bring to boil and simmer for about 45-50 minutes or until translucent. Turn off the heat, let it rest for 5 minutes and rinse with running water.
</Text>
        <Text style={styles.procedureTextDesign}>2. Transfer to a bowl of iced water and set aside. In a glass, dissolve coffee, coffee mate and sugar in a hot water. Add cold water on to your coffee and mix well. Add the cooked sago and gulaman.</Text>
        <Text style={styles.procedureTextDesign}>3. Serve with ice cubes, a big straw and enjoy.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default SamalamigRecipe

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
        padding: 25,
    },

    titleTextDesign: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 15,
        padding: 25
    },
  })