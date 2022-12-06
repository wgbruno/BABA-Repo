import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomButton from "../../src/components/CustomButton";
import CustomInput from "../../src/components/CustomInput";
import { NavigationContainer } from 'react-native';
import { Player } from "../../Objects/PlayerCont";
import { getNewIDDB } from "../../DAOs/PlayerDao";
import { set } from "react-native-reanimated";
import { Account } from "../../Objects/AccountCont";


export default function AddPlayerScreen({navigation}){
    const [playerID, setID] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [number, setNumber] = useState(0);
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState("");
    
    useEffect(() => {
        setID(getNewIDDB());
    })

    const onAddPlayer = () => {
        var player = new Player(playerID, firstName, lastName, parseInt(number), parseInt(age), height);
        if(!(player.createPlayer())){
            Alert.alert("Success!","You have created a new player!");
            var tmp = new Account(navigation.getParam("paramUserName", "N/A"));
            var account = tmp.getAccount();
            console.log(account);
            account.setPlayerID(playerID);
            if(navigation.getParam("paramAccountType", "N/A") == "Manager"){
              navigation.navigate("ManagerHome");
            }else{
              navigation.navigate("HomeScreen");
            }
        }
    }

    const onGoHome = () => {
      if(navigation.getParam("paramAccountType", "N/A") == "Manager"){
        navigation.navigate("ManagerHome");
      }else{
        navigation.navigate("HomeScreen");
      }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Text style={styles.title}>Create a player</Text>
    
            <CustomInput
              placeholder="First Name"
              value={firstName}
              setValue={setFirst}
            />
            <CustomInput 
              placeholder="Last Name" 
              value={lastName} 
              setValue={setLast} 
            />
            <CustomInput
              placeholder="Number"
              value={number}
              setValue={setNumber}
            />
            <CustomInput
              placeholder="Age"
              value={age}
              setValue={setAge}
            />
            <CustomInput
              placeholder="Height"
              value={height}
              setValue={setHeight}
            />
            <CustomButton 
              text="Add Player" 
              onPress={onAddPlayer} 
            />
            <CustomButton 
              text="Go Home" 
              onPress={onGoHome} 
            />

          </View>
        </ScrollView>
      );
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 50,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    text: {
      color: 'gray',
      marginVertical: 30,
    },
    link: {
      color: '#FDB075',
    },
    container: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 10,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });