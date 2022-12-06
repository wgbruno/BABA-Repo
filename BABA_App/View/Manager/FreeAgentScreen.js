import React, { useEffect, useState } from "react";
import { NavigationContainer } from 'react-native';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { UserState } from "realm";
import Logo from '../../assets/images/Logo_1.png'
import { getTeamPlayers } from "../../DAOs/PlayerDao";


export default function FreeAgentScreen({navigation}){
    const {height} = useWindowDimensions();
    const [players, setPlayers] = useState(getTeamPlayers("Free Agent"));
    const [empty, setEmpty] = useState(true);
    const [userName, setUser] = useState("");

    useEffect(() => {
        console.log(navigation.getParam('paramUserName', "N/A"));
        setUser(navigation.getParam('paramUserName', "N/A"))
        if(players != undefined){
            setEmpty(false);
        }
    })

    const noFreeAgents = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center', color: 'darkblue'}}>
                    There are no available free agents.
                </Text>
            </View>
        );
    }
    return (
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 20}}>Free Agents</Text>
        {empty ? noFreeAgents():
            <FlatList
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('SendTeamRequest', {
                                paramPlayerID: item.playerID,
                                paramManagerID: userName,    
                            });}}>
                            <Text style={styles.list}>{item.firstName} {item.lastName}   Team: {item.teamName} ID: {item.playerID}</Text>
                            <Text style={styles.list}>Age: {item.age}      Height: {item.height}      Number: {item.number}</Text>
                        </TouchableOpacity>
                    </View>
                } />
            }
        </View>
    );
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