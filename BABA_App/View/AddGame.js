import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,Alert } from 'react-native';
import CustomInput from '../src/components/CustomInput/CustomInput';
import CustomButton from '../src/components/CustomButton/CustomButton';
import { insertDBGame } from "../DAOs/GameDao";
import { NavigationContainer } from '@react-navigation/native';
import Logo from "../assets/images/Logo_1.png";

export default function CreateGame({navigation}){
    const {height} = useWindowDimensions();  

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Schedule a new game</Text>
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
        </View>
      </ScrollView>
    );    
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'darkblue',
    marginVertical: 10,
  }
});