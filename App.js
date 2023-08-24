
import React,{useState} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet,Alert,ImageBackground,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';

const Stack=createStackNavigator();

function App(){
  return(<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
  </NavigationContainer>);
}
export default App;