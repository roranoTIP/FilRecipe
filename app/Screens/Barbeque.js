import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const BarbequeRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/barbeque.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>4 lbs. pork shoulder sliced into thin pieces</Text>
        <Text style={styles.ingredientsTextDesign}>¾ cup soy sauce</Text>
        <Text style={styles.ingredientsTextDesign}>½ cup juice extracted from calamansi or lemon</Text>
        <Text style={styles.ingredientsTextDesign}>¾ cup banana ketchup</Text>
        <Text style={styles.ingredientsTextDesign}>4 tablespoons dark brown sugar</Text>
        <Text style={styles.ingredientsTextDesign}>2 tablespoons garlic powder</Text>
        <Text style={styles.ingredientsTextDesign}>1 teaspoon ground black pepper</Text>
        <Text style={styles.ingredientsTextDesign}>2 teaspoons salt</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>1 ½ cups lemon or lime soda</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Arrange the pork slices in a large bowl.</Text>
        <Text style={styles.procedureTextDesign}>2. Add all the marinade ingredients. Mix well. Cover the bowl and marinate for at least 3 hours. Note: I strongly suggest marinating overnight for best results.</Text>
        <Text style={styles.procedureTextDesign}>3. Fasten the marinated pork together using bamboo skewers.</Text>
        <Text style={styles.procedureTextDesign}>4. Heat-up the grill. Start to grill your Filipino Style pork BBQ for 3 to 5 minutes per side until the meat is thoroughly cooked. Make sure to always baste the BBQ when flipping it over. Note: the basting sauce ingredients are the same as the marinade ingredients minus the lemon soda.</Text>
        <Text style={styles.procedureTextDesign}>5. Serve with spicy vinegar.</Text>
        <Text style={styles.procedureTextDesign}>6. Share and enjoy!</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default BarbequeRecipe

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