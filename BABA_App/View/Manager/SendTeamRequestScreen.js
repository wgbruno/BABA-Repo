import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import CustomInput from "../../src/components/CustomInput";
import CustomButton from "../../src/components/CustomButton";
import { NavigationContainer } from 'react-native';
import { Player } from "../../Objects/PlayerCont";
import { Account } from "../../Objects/AccountCont";

export default function SendTeamRequestScreen({navigation}){
    const {height} = useWindowDimensions();
    const [playerID, setPlayerID] = useState(0);
    const [managerID, setManagerID] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setPlayerID(navigation.getParam("paramPlayerID", 0))
        setManagerID(navigation.getParam("paramManagerID", "N/A"))
    })
    
    const player = new Player(playerID);
    const firtsName = player.getFirstName();
    const lastName = player.getLastName();
    const tmp = new Account(managerID);
    const account = tmp.getAccount();
    const manager = new Player(account.getPlayerID());
    const teamName = manager.getTeamName();

    const toSendRequest = () => {
        sendTeamRequest()
    }

    return(
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
       <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 22}}>Send Team Request</Text>
       <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 15}}>Enter a message to send to {firtsName} {lastName}:</Text>
       <CustomInput
          placeholder="Message"
          value={message}
          setValue={setMessage}
        />
        <CustomButton
            text={"Request to join " +teamName}
            onPress={toSendRequest}
        />
        </View>
    )

};

const styles = StyleSheet.create({
    list: {
        marginTop: 8, 
        fontWeight: 'bold', 
        color: 'red', 
        fontSize: 20
    },
    root: {
      alignItems: 'center',
      padding: 10,
      flex: 1
    },
    logo: {
      width: '3000%',
      maxWidth: 200,
      maxHeight: 150,
    },
  });
