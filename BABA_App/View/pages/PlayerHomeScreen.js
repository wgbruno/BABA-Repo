import React, { Component, useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert, ScrollView, StyleSheet, Image, useWindowDimensions} from 'react-native';
import FormStyle from "../../Style/Form.style";
import CustomButton from "../../src/components/CustomButton";
import Logo from '../../assets/images/Logo_1.png'
import { NavigationContainer } from 'react-native';
import { Account } from "../../Objects/AccountCont";

export default function PlayerHomeScreen ({navigation}){
    const {height} = useWindowDimensions();
    const [userName, setUserName] = useState("");
    const [accountType, setAccountType] = useState("");

    useEffect(() => {
        setUserName(navigation.getParam("paramUserName", "N/A"));
        setAccountType(navigation.getParam('paramAccountType', "N/A"));
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
          Alert.alert("Fail!","You are not a member of a team.");
        }else{
          navigation.navigate("DisplayTeam", {paramTeamName: teamName});
        }
      } 

    const toViewTeams = () => {
        navigation.navigate('ViewTeams');
    }
    const toCalendarScreen = () => {
        navigation.navigate('CalendarScreen');
    }
    const toPlayoffScreen = () => {
        navigation.navigate('PlayoffScreen');
    }

    return(<>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
          />
          <CustomButton 
                onPress={toCreatePlayer}
                text={"Create Player"}
          />
          <CustomButton
            text={"View My Team"}
            onPress={toTeam}
          />
          <CustomButton 
                onPress={toViewTeams}
                text={"View All Teams"}
          />
          <CustomButton 
                onPress={toCalendarScreen}
                text={"Calendar"}
           />
           <CustomButton 
                onPress={toPlayoffScreen}
                text={"View Playoffs"}
           />
        </View>
    </ScrollView>
    </>);
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
