import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import { NavigationContainer } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import { getAllPlayers } from '../../DAOs/PlayerDao';

export default function ViewAllPlayersScreen({navigation}){
    const {height} = useWindowDimensions();
    const [players, setPlayers] = useState(getAllPlayers());
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        if(players != null){
            setEmpty(false);
        }
    })

    const noPlayers = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center', color: 'darkblue'}}>
                    There are no players.
                </Text>
            </View>
        );
    }

    return(
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 20}}>All Players</Text>
        {empty ? noPlayers():
            <FlatList
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10, flexGrow: 1}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('EditPlayer', {
                                paramFirstName: item.firstName,
                                paramLastName: item.lastName,
                                paramAge: item.age,
                                paramNumber: item.number,
                                paramHeight: item.height
                            });}}>  
                            <Text style={styles.list}>{item.firstName} {item.lastName}   Team: {item.teamName}</Text>
                            <Text style={styles.list}>Age: {item.age}      Height: {item.height}      Number: {item.number}</Text>
                        </TouchableOpacity>
                    </View>
                } 
            />}
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