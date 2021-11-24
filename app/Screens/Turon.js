import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const Turon = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/turon.jpg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>6 pieces bananas saba or plantains, cut in half (lengthwise)</Text>
        <Text style={styles.ingredientsTextDesign}>1 cup jackfruit ripe, sliced</Text>
        <Text style={styles.ingredientsTextDesign}>1 1/2 cup sugar</Text>
        <Text style={styles.ingredientsTextDesign}>12 pieces lumpia wrapper</Text>
        <Text style={styles.ingredientsTextDesign}>2 cups cooking oil</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Roll the banana on the sugar plate and ensure that the banana is coated with enough sugar.</Text>
        <Text style={styles.procedureTextDesign}>2. Place the banana with sugar coating in the spring roll wrapper and add some ripe jackfruit.</Text>
        <Text style={styles.procedureTextDesign}>3. Fold and lock the spring roll wrapper, use water to seal the edge.</Text>
        <Text style={styles.procedureTextDesign}>4. In a pan, heat the oil and put-in some sugar.Wait until the brown sugar floats.</Text>
        <Text style={styles.procedureTextDesign}>5. Put-in the wrapped banana and fry until the wrapper turns golden brown and the extra sugar sticks on wrapper.</Text>
        <Text style={styles.procedureTextDesign}>6. Serve hot as a dessert or snack. Share and Enjoy!</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default Turon

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