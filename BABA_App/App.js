import React, {useState, useEffect} from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from 'react-native';
import Home from "./View/Home.js";
import SignInScreen from "./View/Account/SignInScreen/SignInScreen.js";
import SignUpScreen from "./View/Account/SignUpScreen/SignUpScreen.js";
import ConfirmEmailScreen from "./View/Account/ConfirmEmailScreen/ConfirmEmailScreen.js";
import ForgotPasswordScreen from "./View/Account/ForgotPasswordScreen/ForgotPasswordScreen.js";
import NewPasswordScreen from "./View/Account/NewPasswordScreen/NewPasswordScreen.js";
import DeleteAccountScreen from "./View/Account/DeleteAccount/DeleteAccount.js";
import AddTeam from './View/AddTeam.js';
import ViewAllTeams from "./View/ViewAllTeams.js";
import EditTeam from "./View/EditTeam.js";
import Calendar from './View/pages/Calendar';
import CreateGame from "./View/AddGame.js";
import GameScoreScreen from "./View/LiveScore/GameScoreScreen.js";
import ManagerHomeScreen from "./View/Manager/ManagerHomeScreen.js";
//import DisplayTeamScreen from './View/'
import FreeAgentScreen from './View/Manager/FreeAgentScreen.js'
import FormStyle from "./Style/Form.style";
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import ViewGame from './View/pages/ViewGame';
import AddPlayerScreen from "./View/Player/AddPlayerScreen.js";
import ViewAllPlayersScreen from "./View/Player/ViewAllPlayersScreen.js";
import EditPlayerScreen from './View/Player/EditPlayerScreen.js';
import SendTeamRequestScreen from "./View/Manager/SendTeamRequestScreen.js";
import RequestManagerScreen from "./View/Manager/RequestManagerScreen.js";

const AppNavigator = createStackNavigator(  
  {  
      HomeScreen: Home,  
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
      ConfirmEmail: ConfirmEmailScreen,
      ForgotPassword: ForgotPasswordScreen,
      NewPassword: NewPasswordScreen,
      DeleteAccount: DeleteAccountScreen,
      PlayerReg: AddPlayerScreen,
      ViewPlayers: ViewAllPlayersScreen,
      EditPlayer: EditPlayerScreen,
      TeamReg: AddTeam,
      ViewTeams: ViewAllTeams,
      UpdateTeams: EditTeam,
      ScheduleGame: CreateGame,
      CalendarScreen: Calendar,
      GameView: ViewGame,
      GameScore: GameScoreScreen,
      ManagerHome: ManagerHomeScreen,
      FreeAgent: FreeAgentScreen,
      SendTeamRequest: SendTeamRequestScreen,
      RequestManager: RequestManagerScreen
  },  
  {  
      initialRouteName: "SignIn"  
  }  
); 
const AppContainer = createAppContainer(AppNavigator); 
export default class App extends React.Component{
  render(){
    return < AppContainer/>;
  }
}