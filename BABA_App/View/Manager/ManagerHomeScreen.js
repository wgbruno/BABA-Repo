import React, { useEffect, useState } from "react";
import { NavigationContainer } from 'react-native';
import CustomButton from "../../src/components/CustomButton";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import { Account } from "../../Objects/AccountCont";
import { Player } from "../../Objects/PlayerCont";
import { getNewIDDB } from "../../DAOs/PlayerDao";

export default function ManagerHomeScreen({navigation}){
  const {height} = useWindowDimensions();
  const [userName, setUser] = useState("");

  useEffect(() => {
    setUser(navigation.getParam('paramUserName', "N/A"));
  })

  const toCreatePlayer = () => {
    var tmp = new Account(userName);
    var account = tmp.getAccount();
    var accountType = account.getAccountType();
    navigation.navigate('PlayerReg', {
      paramUserName: userName, 
      paramAccountType: accountType
    });
  }

  const toTeam = () => {
    var tmp = new Account(userName);
    var account = tmp.getAccount();
    var playerID = account.getPlayerID();
    var player = new Player(playerID);
    var teamName = player.getTeamName();
    console.log(teamName);
    if(teamName == "Free Agent"){
      Alert.alert("Fail!","Manager does not have a team. Make a team first please.");
    }else{
      navigation.navigate("DisplayTeam", {paramTeamName: teamName});
    }
  }   
  
  const freeAgents = () => {
    navigation.navigate('FreeAgent', {paramUserName: userName});
  }

  const toCreateTeam = () => {
    var tmp = new Account(userName);
    var account = tmp.getAccount();
    var playerID = account.getPlayerID();
    var player = new Player(playerID);
    console.log(player);
    var teamName = player.getTeamName();
    navigation.navigate('TeamReg', {paramPlayerID: playerID, paramAccountType: account.getAccountType()});
  }
  
  
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
          />
          <CustomButton
            text={"Create my Player"}
            onPress={toCreatePlayer}
          />

          <CustomButton
            text={"Create Team"}
            onPress={toCreateTeam}
          />

          <CustomButton
            text={"View Team"}
            onPress={toTeam}
          />

          <CustomButton
            text={"Free Agents"}
            onPress={freeAgents}
          />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '3000%',
      maxWidth: 200,
      maxHeight: 150,
    },
  });