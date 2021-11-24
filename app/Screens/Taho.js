import React from "react";
import {View, Text, ImageBackground, StyleSheet, Pressable, Image, ScrollView} from 'react-native'

const TahoRecipe = ({navigation} ) => {
    return (
    <ScrollView>
    <View style={{}}>
      <ImageBackground style={styles.backgroundImg} blurRadius = {10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <Image style={styles.screenPictures} source={require('../assets/images/taho.jpeg')} />
        <Text style={styles.titleTextDesign}>INGREDIENTS:</Text>

        <Text style={styles.ingredientsTextDesign}>330 g extra soft tofu</Text>
        <Text style={styles.ingredientsTextDesign}>1/2 cup uncooked tapioca pearl (sago)</Text>
        <Text style={styles.ingredientsTextDesign}>1/2 cup brown sugar</Text>
        <Text style={styles.ingredientsTextDesign}>1/2 cup water</Text>
        <Text style={styles.ingredientsTextDesign}>5-6 drops vanilla essence (optional)</Text>
        <Text style={styles.ingredientsTextDesign} padding = {15}>water for boiling sago</Text>
        
        <Text style={styles.titleTextDesign}>Procedures:</Text>

        <Text style={styles.procedureTextDesign}>1. Place sago in boiling water and cook until transparent. Stir constantly to avoid sticking to the pan. When sago is cooked, drain and set aside.</Text>
        <Text style={styles.procedureTextDesign}>2. Place the brown sugar in a saucepan and allow to caramelize over low heat. When sugar caramelizes, pour in water, vanilla essence, and stir well until dissolved. Turn off heat. Allow to cool and set aside.</Text>
        <Text style={styles.procedureTextDesign}>3. Place the extra tofu in a preheated pan. Allow it to sit over medium low heat until some extra water cooks off and tofu is warm. Alternatively, put extra tofuin mug and heat in oven until warm.</Text>
        <Text style={styles.procedureTextDesign}>4. When tofu is warm, top it with cooked tapioca pearl and arnibal. Add more arnibal to sweeten.</Text>
        <Text style={styles.procedureTextDesign}>5. Slightly stir and serve warm or cold. Enjoy!</Text>
      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}

export default TahoRecipe

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