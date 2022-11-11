import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, StatusBar, Alert } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import CustomInput from '../../../src/components/CustomInput';
import CustomButton from '../../../src/components/CustomButton';
import realm, { insertDBTeam, getAllDBTeams, deleteAllDBTeams, getDBTeam } from "../DAOs/AddTeamDao";

export default function RegisterTeam(navigation){
    const [teamName, setTeam] = useState('');

    let onAddTeamPressed = () => {
        if(getDBTeam(teamName)){
            Alert.alert("Team name already exists.");
        }
        else{
        insertDBTeam(teamName, 0, 0, 1, []);
        navigation.navigate('HomeScreen');
        }
    }

    if(getDBTeam(teamName)){
        Alert.alert("Team name already exists.");
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