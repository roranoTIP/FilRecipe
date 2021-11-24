import React, {useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInRegister from './app/Screens/LogInRegister';
import HomeScreen from './app/Screens/HomeScreen';
import Register from './app/Screens/RegisterScreen';
import KakaninScreen from './app/Screens/KakaninScreen';
import BeveragesScreen from './app/Screens/BeveragesScreen';
import StreetFoodScreen from './app/Screens/StreetFoodsScreen';
import HomeMadeScreen from './app/Screens/HomeMadeScreen';
import SumanRecipe from './app/Screens/SumanRecipe';
import PutoRecipe from './app/Screens/PutoRecipe';
import KutsintaRecipe from './app/Screens/KutsintaRecipe';
import BikoRecipe from './app/Screens/BikoRecipe';
import HaloHaloRecipe from './app/Screens/HaloHaloRecipe';
import SamalamigRecipe from './app/Screens/Samalamig';
import MaisConYeloRecipe from './app/Screens/MaisConYelo';
import TahoRecipe from './app/Screens/Taho';
import KwekKwekRecipe from './app/Screens/KwekKwek';
import KalamaresRecipe from './app/Screens/Kalamares';
import BetamaxRecipe from './app/Screens/Betamax';
import BarbequeRecipe from './app/Screens/Barbeque';
import AddRecipeScreen from './app/Screens/AddRecipeScreen';
import StartUpScreen from './app/Screens/StartUpScreen';
import Profile from './app/Screens/Profile';
import Turon from './app/Screens/Turon';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, child, get } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCsvn3aeGDdxEio8gWVGeVgSgf8L27gfs",
  authDomain: "foodrecipe-8ef56.firebaseapp.com",
  projectId: "foodrecipe-8ef56",
  storageBucket: "foodrecipe-8ef56.appspot.com",
  messagingSenderId: "761864681066",
  appId: "1:761864681066:web:df50834c31a6cc78aafc13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const createAccount = (username, password) => {
  const AccountListRef = ref(db, 'account');
  const newAccountRef = push(AccountListRef);
  set(newAccountRef, {
    'username': username,
    'password': password
  })
  Keyboard.dismiss();
  Alert.alert('Register Successful')
}

export const createRecipe = (img_link, title) => {
  const db = getDatabase();
  const RecipeListRef = ref(db, 'recipe');
  const newRecipeRef = push(RecipeListRef);
  set(newRecipeRef, {
    'img_link': img_link,
    'title': title
  })
  Keyboard.dismiss();
  Alert.alert('Recipe Created')
}

const Drawer = createDrawerNavigator(); //Create Drawer navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LogInRegister}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Kakanin" component={KakaninScreen} options={{title: 'Kakanin Recipes'}} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} options={{title: 'Beverages Recipes'}}/>
        <Stack.Screen name="Street Foods" component={StreetFoodScreen} options={{title: 'Street Foods Recipes'}}/>
        <Stack.Screen name="Home Made Recipes" component={HomeMadeScreen} />
        <Stack.Screen name="Suman Recipe" component={SumanRecipe} />
        <Stack.Screen name="Puto Recipe" component={PutoRecipe} />
        <Stack.Screen name="Kutsinta Recipe" component={KutsintaRecipe} />
        <Stack.Screen name="Biko Recipe" component={BikoRecipe}/>
        <Stack.Screen name="Halo-Halo Recipe" component={HaloHaloRecipe}/>
        <Stack.Screen name="Mocha Samalamig Recipe" component={SamalamigRecipe}/>
        <Stack.Screen name="Mais Con Yelo Recipe" component={MaisConYeloRecipe}/>
        <Stack.Screen name="Taho Recipe" component={TahoRecipe}/>
        <Stack.Screen name="Kwek-Kwek Recipe" component={KwekKwekRecipe}/>
        <Stack.Screen name="Kalamares Recipe" component={KalamaresRecipe}/>
        <Stack.Screen name="Betamax Recipe" component={BetamaxRecipe}/>
        <Stack.Screen name="Barbeque Recipe" component={BarbequeRecipe}/>
        <Stack.Screen name="Add Recipe" component={AddRecipeScreen}/>
        <Stack.Screen name="Turon" component={Turon}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Root(){
  return (
    <Drawer.Navigator initialRouteName="Welcome Screen">
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="User Profile" component={Profile} />
      <Drawer.Screen name="Welcome Screen" component={StartUpScreen} options={{ headerShown: false, title: 'Sign Out' }}/>
    </Drawer.Navigator>
  );
};
