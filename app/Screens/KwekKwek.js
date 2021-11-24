import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const KwekKwekRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/kwekkwek.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>12 quail eggs</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup rice vinegar</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup ketchup</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup brown sugar</Text>
        <Text style={styles.ingredientsTextDesign}>2 teaspoons soy sauce</Text>
        <Text style={styles.ingredientsTextDesign}>½ cup water</Text>
        <Text style={styles.ingredientsTextDesign}>1 drop yellow food coloring</Text>
        <Text style={styles.ingredientsTextDesign}>1 drop red food coloring</Text>
        <Text style={styles.ingredientsTextDesign}>1 cup all-purpose flour</Text>
        <Text style={styles.ingredientsTextDesign}>salt and freshly ground black pepper to taste</Text>
        <Text style={styles.ingredientsTextDesign}>oil for deep frying</Text>
        <Text style={styles.ingredientsTextDesign}>¼ cup cornstarch</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>bamboo skewer</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Place eggs in a saucepan and cover with water. Bring to a boil, reduce heat to medium, cover, and cook for 4 minutes. Remove from heat and let stand, covered, for 2 minutes. Rinse eggs in cold water and cool to room temperature; peel.</Text>
        <Text style={styles.procedureTextDesign}>2. Combine rice vinegar, ketchup, brown sugar, and soy sauce in a saucepan. Cook and stir over medium until sugar has dissolved, about 5 minutes. Let cool.</Text>
        <Text style={styles.procedureTextDesign}>3. Prepare batter by adding red and yellow food coloring to the water to get a deep orange color. Combine flour, salt, and pepper in a bowl; pour in orange water and stir until there are no lumps.</Text>
        <Text style={styles.procedureTextDesign}>4. Heat oil in a wok to 375 degrees F (190 degrees C).</Text>
        <Text style={styles.procedureTextDesign}>5. Gently roll eggs in cornstarch to coat and shake off excess cornstarch. Dip into orange batter so they are fully covered. Poke eggs with the bamboo skewer and drop gently into the hot oil. Deep fry until the batter is crispy, about 2 minutes per side. Remove eggs with a slotted spoon and drain on paper towels.</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default KwekKwekRecipe

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