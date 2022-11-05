import React, {useState, useEffect} from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';
import AddPlayer from "./View/AddPlayer.js";
import AddTeam from "./View/AddTeam.js";
import Home from "./View/Home.js";
import ViewAllPlayers from "./View/ViewAllPlayers.js";
import EditPlayer from "./View/EditPlayer.js";
import ViewAllTeams from "./View/ViewAllTeams.js";
import EditTeam from "./View/EditTeam.js";
import FormStyle from "./Style/Form.style";
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';


const AppNavigator = createStackNavigator(  
  {  
      HomeScreen: Home,  
      PlayerReg: AddPlayer,
      ViewPlayers: ViewAllPlayers, 
      UpdatePlayers: EditPlayer,
      TeamReg: AddTeam,
      ViewTeams: ViewAllTeams,
      UpdateTeams: EditTeam
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