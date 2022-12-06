import React, { useEffect, useState } from "react";
import Logo from '../../assets/images/Logo_1.png'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { Team } from "../../Objects/Team";
import { getTeamPlayers } from "../../DAOs/PlayerDao";

export default function DisplayTeamScreen({navigation}){
    const {height} = useWindowDimensions();
    const [players, setPlayers] = useState(getTeamPlayers(navigation.getParam("paramTeamName", "N/A")))
    return(
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 30}}>{navigation.getParam("paramTeamName", "N/A")}</Text>
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkred', fontSize: 20}}>Wins       Losses</Text>
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkred', fontSize: 18}}>0                 0</Text>
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkred', fontSize: 20}}>Players:</Text>
        <FlatList
            data={players}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => 
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity>
                        <Text style={styles.list}>{item.firstName} {item.lastName}   Team: {item.teamName} ID: {item.playerID}</Text>
                        <Text style={styles.list}>Age: {item.age}      Height: {item.height}      Number: {item.number}</Text>
                    </TouchableOpacity>
                </View>
            } />
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