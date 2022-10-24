import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AddPlayer from "./View/AddPlayer.js";
import Home from "./View/Home.js";
import FormStyle from "./Style/Form.style";
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(  
  {  
      HomeScreen: Home,  
      PlayerReg: AddPlayer  
  },  
  {  
      initialRouteName: "HomeScreen"  
  }  
); 

const AppContainer = createAppContainer(AppNavigator); 
export default class App extends React.Component{
  render(){
    return < AppContainer/>;
  }
}