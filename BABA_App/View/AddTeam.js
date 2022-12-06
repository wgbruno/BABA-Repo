import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,Alert } from 'react-native';
import CustomInput from '../src/components/CustomInput/CustomInput';
import CustomButton from '../src/components/CustomButton/CustomButton';
import { insertDBTeam } from "../DAOs/TeamDao";
import { NavigationContainer } from '@react-navigation/native';
import Logo from '../assets/images/Logo_1.png'
import { Player } from '../Objects/PlayerCont';
import { setPlayerIDDB } from '../DAOs/AccountDao';

export default function RegisterTeam({navigation}){
    const {height} = useWindowDimensions();
    const [teamName, setTeam] = useState('');

    let onAddTeamPressed = () => {
        /*if(getDBTeam(teamName)){
            Alert.alert("Team name already exists."); //Need to fix getDBTeam
        }
        else{*/
        insertDBTeam(teamName, 0, 0, 1, []);
        var player = new Player(navigation.getParam("paramPlayerID", 0));
        player.setTeamName(teamName);
        if(navigation.getParam("paramAccountType", "N/A") == "Manager"){
            navigation.navigate("ManagerHome");
          }else{
            navigation.navigate("HomeScreen");
        }
        Alert.alert("Team successfully created")
        //}
    }

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 20}]}
                resizeMode="contain"
            />
            <CustomInput
            placeholder="Team Name"
            value={teamName}
            setValue={setTeam}
            />

            <CustomButton text="Register" onPress={onAddTeamPressed} />
        </View>
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