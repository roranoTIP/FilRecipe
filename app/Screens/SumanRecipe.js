import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const SumanRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/suman.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>2 cups white glutinous rice</Text>
        <Text style={styles.ingredientsTextDesign}> 1 1/2 cans (13.5 oz) coconut milk</Text>
        <Text style={styles.ingredientsTextDesign}> 1/2 cup sugar</Text>
        <Text style={styles.ingredientsTextDesign}> 1 teaspoon salt</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}> banana leaves for wrapping</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Rinse the rice until water is clear and then set aside.</Text>
        <Text style={styles.procedureTextDesign}>2. In a large saucepan or large wok, add the coconut milk, ginger is and bring the mixture to a boil, then reduce to a simmer. Stir continuously until milk solids separate from the coconut milk.</Text>
        <Text style={styles.procedureTextDesign}>3. Next, add water, sugar, salt and bring to a quick boil and then reduce to a simmer for 3 minutes.</Text>
        <Text style={styles.procedureTextDesign}>4. Add the rice and continue mixing on low heat until the water has been absorbed, about 10 minutes. Remove from heat and allow to slightly cool.</Text>
        <Text style={styles.procedureTextDesign}>5. Measure out about 80 grams of the rice mixture and place on the banana leaf, and roll into logs. Roll banana leaves tightly around the rice to form a log and fold both edges to seal. Repeat the steps until all the rice mixture is prepared.</Text>
        <Text style={styles.procedureTextDesign}>6. In a large pot, arrange all the folded suman and add 1.5 liters of water. Bring it to a boil and reduce to simmer for 45 minutes.</Text>
        <Text style={styles.procedureTextDesign}>7. Carefully remove the suman and allow it cool.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default SumanRecipe

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