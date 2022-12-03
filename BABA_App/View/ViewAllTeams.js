import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native';
import { getAllDBTeams } from '../DAOs/TeamDao';
import Logo from '../assets/images/Logo_1.png'


export default function ViewAllTeams({ navigation }){
    const {height} = useWindowDimensions();
    const [teams, setTeams] = useState(getAllDBTeams());
    const [empty, setEmpty] = useState([]);

    useEffect(() => {
        if(teams != null){
            setEmpty(false);
        }
    })

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
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
        <Text style={{marginTop: 8, fontWeight: 'bold', color: 'darkblue', fontSize: 20}}>All Players</Text>
        {empty ? emptyDatabase():
            <FlatList
                data={teams}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', margin: 10, flexGrow: 1}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('UpdateTeams', {
                                paramTeamName: item.teamName,
                                paramWins: item.wins,
                                paramLosses: item.losses,
                                paramSeed: item.seed,
                                paramPlayers: item.players
                            });}}>  
                            <Text style={styles.list}>{item.teamName} -   Wins: {item.wins}</Text>
                            <Text style={styles.list}>Losses: {item.losses}      Seed: {item.seed}      Players: {item.players}</Text>
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

    /*
    return(
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{padding: 8}}>
        {<Text>{JSON.stringify(getAllDBTeams())}</Text>}
        </SafeAreaView>
        {/* List for all teams }
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