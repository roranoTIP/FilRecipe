import React, { useState } from 'react'
import { ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  KeyboardAvoidingView, 
  Pressable, 
  Keyboard, 
  TextInput, 
  TouchableOpacity  
} from 'react-native'
import Ingredients from './Ingredients';
import Procedure from './Procedure';
import { createRecipe } from '../../App';

const AddRecipeScreen = ({navigation}) => {
  const [ingredient, setIngredient] = useState([]);
  const [ingredientItems, setIngredientItems] = useState([]);
  const [procedure, setProcedure] = useState([]);
  const [procedureItems, setProcedureItems] = useState([]);
  const [img_link, setImageLink] = useState('');
  const [title, setTitle] = useState('');

  const handleAddIngredient = () => {
    Keyboard.dismiss();
    setIngredientItems([...ingredientItems,ingredient])
    setIngredient(null);
  }

  const handleAddProcedure = () => {
    Keyboard.dismiss();
    setProcedureItems([...procedureItems,procedure])
    setProcedure(null);
  }

  const handleAddRecipe = (img_link, title) => {
    createRecipe(img_link, title);
    navigation.navigate('Home Made Recipes');
  }
  
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={styles.backgroundImg} blurRadius={10} resizeMode="cover" source={require('../assets/images/background_project.jpeg')}>
        <ScrollView style={{width:'100%'}}>
          {/* Top part*/}
          <View style={styles.topContainer}>
            <View style={{top: 10}}>
              <TextInput style={styles.imgInput} placeholder={"Image Link"} onChangeText={(text) => setImageLink(text)}/>
            </View>
            <View style={{top: 10, marginBottom: 5}}>
              <TextInput style={styles.titleInput} placeholder={"Title"} onChangeText={(text) => setTitle(text)}/>
            </View>
          </View>

          {/* Middle part*/}
          <ScrollView style={styles.middleContainer}>
            {/*Ingredients List */}
            <View style={{alignItems: 'center'}}>
              {
              ingredientItems.map((item, index) => {
                return <Ingredients key={index} text={item}/>
              })
              }
            </View>
            
            <KeyboardAvoidingView style={{alignItems: 'center', flexDirection: 'row',marginBottom: 5}}>
              <TextInput style={styles.ingredientsInput} placeholder={"Add Ingredients"} value={ingredient} onChangeText={text => setIngredient(text)}/>
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddIngredient()}>
                <Text style={{fontSize: 20}}>+</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>

          {/* Bottom part*/}
          <ScrollView style={styles.bottomContainer}>
            {/*Procedures */}
            <View style={{alignItems: 'center'}}>
              {
              procedureItems.map((item, index) => {
                return <Procedure key={index} text={item}/>
              })
              }
            </View>
            
            <KeyboardAvoidingView style={{alignItems: 'center', flexDirection: 'row', marginBottom: 5}}>
              <TextInput style={styles.procedureInput} placeholder={"Add Procedure"} value={procedure} onChangeText={text => setProcedure(text)}/>
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddProcedure()}>
                <Text style={{fontSize: 20}}>+</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
          
          <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.addRecipeButton} onPress={() => handleAddRecipe(img_link, title)}>
                  <Text style={{fontSize: 20, color: 'white'}}>Add Recipe</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default AddRecipeScreen

const styles = StyleSheet.create({
  addRecipeButton:{
    padding: 5, 
    backgroundColor: '#ff5814', 
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: 'black',
    width: 200, 
    height: 50,
    marginTop: 5, 
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  procedureInput:{ 
    marginTop: 5,
    marginLeft: 20,
    padding: 10,
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  addButton:{
    padding: 5, 
    backgroundColor: 'white', 
    borderRadius: 60, 
    borderWidth: 1,
    borderColor: 'black',
    width: 50, 
    height: 50,
    marginTop: 5, 
    marginLeft: 5, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  ingredientsInput:{ 
    marginTop: 5,
    marginLeft: 20,
    padding: 10,
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  imgInput:{
    width: 300,
    padding: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  titleInput:{
    margin: 10,
    width: 300,
    padding: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  descriptionInput:{
    marginBottom: 20,
    width: 300,
    padding: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  bottomContainer:{
    flex: 1,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    marginTop: 5,
  },
  middleContainer:{
    flex: 1,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    marginTop: 5,
  },
  topContainer:{
    flex: 1, 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
})
