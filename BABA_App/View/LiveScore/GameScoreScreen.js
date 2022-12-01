import React, { useEffect, useState, Component } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import CustomButton from "../../src/components/CustomButton";
import CustomInput from "../../src/components/CustomInput";
import { NavigationContainer } from 'react-native';
import { Game } from "../../Objects/GameCont";

export default function GameScoreScreen({navigation}){
  const {height} = useWindowDimensions();
  
  const [gameID, setID] = useState("");
  const [team1Name, setTeam1] = useState("");
  const [team2Name, setTeam2] = useState("");
  const [startTime, setStart] = useState("");
  const [team1Score, setScore1] = useState("");
  const [team2Score, setScore2] = useState("");
  const [date, setDate] = useState("");
  

  useEffect(() => {
    setID(navigation.getParam('paramID', 0));
    setTeam1(navigation.getParam('paramTeam1', "Team 1"));
    setTeam2(navigation.getParam('paramTeam2', "Team 2"));
    setStart(navigation.getParam('paramStart', "N/A"));
    setScore1(navigation.getParam('paramScore1', 0));
    setScore2(navigation.getParam('paramScore2', 0));
    setDate(navigation.getParam('paramDate', null));
  }, []);

  const game = new Game(gameID, team1Name, team2Name, date, startTime, team1Score, team2Score);
  
  const onAddPoint1 = () => {
    game.addPoints("team1Score", 1, 1);
    refreshPage();
  }

  const onAddPoint2 = () => {
    game.addPoints("team2Score", 1, 2);
  }

  const onRemovePoint1 = () => {
    game.addPoints("team1Score", -1, 1);
  }

  const onRemovePoint2 = () => {
    game.addPoints("team2Score", -1, 2);
  }

  const refreshPage = () => {
    navigation.navigate("GameScore", {paramID: game.gameID, paramTeam1: game.team1Name, paramTeam2: game.team2Name, 
      paramStart: game.startTime, paramScore1: game.team1Score, paramScore2: game.team2Score, paramDate: game.date});
  }

  const goHome = () => {
    navigation.navigate("HomeScreen");
  }

  return ( 
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 20}]}
          resizeMode="contain"
        />
        <Text style={styles.teamText}>{team1Name}                {team2Name}</Text>
        <Text style={styles.teanScore}>{team1Score}            {team2Score}</Text>
        <CustomButton
          text={"Add 1 point to team " +team1Name}
          onPress={onAddPoint1}
        />
        <CustomButton
          text={"Remove 1 point from team "+team1Name}
          onPress={onRemovePoint1}
        />
        <CustomButton
          text={"Add 1 point to team " +team2Name}
          onPress={onAddPoint2}
        />
        <CustomButton
          text={"Remove 1 point from team "+team2Name}
          onPress={onRemovePoint2}
        />
        <CustomButton
          text="Return Home"
          onPress={goHome}
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
    teamText: {
      color: 'darkblue',
      marginVertical: 10,
      fontSize: 25,
    },
    teanScore: {
      color: 'gray',
      marginVertical: 10,
      fontSize: 40,
    }
  });
  