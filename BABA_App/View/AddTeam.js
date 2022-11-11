import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,Alert } from 'react-native';
import CustomInput from '../src/components/CustomInput/CustomInput';
import CustomButton from '../src/components/CustomButton/CustomButton';
import realm, { insertDBTeam, getAllDBTeams, deleteAllDBTeams, getDBTeam } from "../DAOs/AddTeamDao";
import { NavigationContainer } from 'react-native';

export default function RegisterTeam(navigation){
    const [teamName, setTeam] = useState('');

    let onAddTeamPressed = () => {
        /*if(getDBTeam(teamName)){
            Alert.alert("Team name already exists."); //Need to fix getDBTeam
        }
        else{*/
        insertDBTeam(teamName, 0, 0, 1, []);
        navigation.navigate('HomeScreen');
        //}
    }

    return (
    <>
        <CustomInput
          placeholder="Team Name"
          value={teamName}
          setValue={setTeam}
        />

        <CustomButton text="Sign In" onPress={onAddTeamPressed} />

        {/*<StatusBar barStyle="light-content" />
        <SafeAreaView style={{padding: 8}}>
        <Text>Some sample text</Text>
        <Text>{JSON.stringify(getAllDBTeams())}</Text>
        </SafeAreaView>*/}
    </>
    );    
};