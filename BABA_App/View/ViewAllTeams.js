import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { getAllDBTeams } from '../DAOs/TeamDao';

export default function ViewAllTeams({ navigation }){
    const [teams, setTeams] = useState(getAllDBTeams());
    const [empty, setEmpty] = useState([]);

    /*const listAllTeams = () => {
        return(
            <View 
            style={{height: 1, width: '100%', backgroundColor: '#000'}}
            />
        );
    };*/

    let emptyDatabase = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center'}}>
                    No Teams Have Registered Yet
                </Text>
            </View>
        );
    }

    return(
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{padding: 8}}>
        {<Text>{JSON.stringify(getAllDBTeams())}</Text>}
        </SafeAreaView>
        {/* List for all teams */}
        <Text style={{marginTop: 8, fontWeight: 'bold'}}>Team name                          Wins            Losses             Seed Players</Text>
                {empty ? emptyDatabase(empty):
                <FlatList
                    data={teams}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{item.teamName}</Text>
                                <Text>{item.wins}</Text>
                                <Text>{item.losses}</Text>
                                <Text>{item.seed}</Text>
                                <Text>{item.players}</Text>
                            </View>
                        )
                    }} />
                }
    </>
    );
                    /*
    return(<>
        <View style={{flex: 1}}>
            {empty ? emptyDatabase(empty):
            <FlatList
                data={items}
                ItemSeparatorComponent={listAllTeams}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View key={item.number} style={{ padding: 20}}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('UpdateTeams', {
                        paramID: item.teamID,
                        paramName: item.teamName,
                        paramRecord: item.record,
                        paramSeed: item.seed,
                        paramPlayers: item.players});}}>
                        <Text style={styles.itemsStyle}>Name: {item.teamName}</Text>
                        <Text style={styles.itemsStyle}>Record: {item.record}</Text>
                        <Text style={styles.itemsStyle}>Seed: {item.seed}</Text>
                        <Text style={styles.itemsStyle}>Players: {item.players}</Text>
                    </TouchableOpacity>
                </View>
                }
            />
            }
        </View>
    </>);*/
}