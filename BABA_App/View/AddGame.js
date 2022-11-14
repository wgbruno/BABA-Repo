import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,Alert } from 'react-native';
import CustomInput from '../src/components/CustomInput/CustomInput';
import CustomButton from '../src/components/CustomButton/CustomButton';
import realm, { insertDBGame } from "../DAOs/GameDao";
import { NavigationContainer } from '@react-navigation/native';

export default function CreateGame({navigation}){
    const [name1, setTeam1] = useState('');
    const [name2, setTeam2] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    let onAddGamePressed = () => {
        insertDBGame(name1, name2, time, date);
        navigation.navigate('HomeScreen');
        Alert.alert("Game successfully scheduled")
    }

    return (
    <>
        <CustomInput
          placeholder="Team Name 1"
          value={name1}
          setValue={setTeam1}
        />
        <CustomInput
          placeholder="Team Name 2"
          value={name2}
          setValue={setTeam2}
        />
        <CustomInput
          placeholder="Start Time"
          value={time}
          setValue={setTime}
        />
        <CustomInput
          placeholder="Date"
          value={date}
          setValue={setDate}
        />

        <CustomButton text="Create Game" onPress={onAddGamePressed} />
    </>
    );    
};