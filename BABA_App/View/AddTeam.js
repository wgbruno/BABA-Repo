import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,Alert } from 'react-native';
import CustomInput from '../src/components/CustomInput/CustomInput';
import CustomButton from '../src/components/CustomButton/CustomButton';
import { insertDBTeam } from "../DAOs/TeamDao";
import { NavigationContainer } from '@react-navigation/native';

export default function RegisterTeam({navigation}){
    const [teamName, setTeam] = useState('');

    let onAddTeamPressed = () => {
        /*if(getDBTeam(teamName)){
            Alert.alert("Team name already exists."); //Need to fix getDBTeam
        }
        else{*/
        insertDBTeam(teamName, 0, 0, 1, []);
        navigation.navigate('HomeScreen');
        Alert.alert("Team successfully created")
        //}
    }

    return (
    <>
        <CustomInput
          placeholder="Team Name"
          value={teamName}
          setValue={setTeam}
        />

        <CustomButton text="Register" onPress={onAddTeamPressed} />
    </>
    );    
};