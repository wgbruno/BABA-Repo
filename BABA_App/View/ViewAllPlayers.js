import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { db } from './AddPlayer';

export default function ViewAllPlayers({ navigation }){
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState([]);

    useEffect(() =>{
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Player_Table', [], (tx, results) => {
                    var temp = [];
                    for(let i = 0; i < results.rows.length; i++){
                        temp.push(results.rows.item(i));
                    }
                    setItems(temp);

                    if(results.rows.length >= 1){
                        setEmpty(false);
                    } else{
                        setEmpty(true);
                    }
                }
            );
        });
    }, []);

    const listAllPlayers = () => {
        return(
            <View 
            style={{height: 1, width: '100%', backgroundColor: '#000'}}
            />
        );
    };

    const emptyDatabase = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center'}}>
                    No Players Have Registered Yet
                </Text>
            </View>
        );
    }

    const styles = StyleSheet.create({
        itemsStyle:{
            fontSize:22,
            color: '#000'
        }
    });

    return(<>
        <View style={{flex: 1}}>
            {empty ? emptyDatabase(empty):
            <FlatList
                data={items}
                ItemSeparatorComponent={listAllPlayers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View key={item.number} style={{ padding: 20}}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('UpdatePlayers', {
                        paramID: item.playerID,
                        paramFirst: item.firstName,
                        paramLast: item.lastName,
                        paramAge: item.age,
                        paramNumber: item.number,
                        paramHeight: item.height,
                        paramPoints: item.points,
                        paramRebounds: item.rebounds,
                        paramAssists: item.assists,
                        paramBlocks: item.blocks,
                        paramSteals: item.steals,
                        paramFouls: item.fouls,
                        paramTurnovers: item.turnovers});}}>
                        <Text style={styles.itemsStyle}>First Name: {item.firstName}</Text>
                        <Text style={styles.itemsStyle}>Last Name: {item.lastName}</Text>
                        <Text style={styles.itemsStyle}>Age: {item.age}</Text>
                        <Text style={styles.itemsStyle}>Number: {item.number}</Text>
                        <Text style={styles.itemsStyle}>Height: {item.height}</Text>
                        <Text style={styles.itemsStyle}>PTS: {item.points}</Text>
                        <Text style={styles.itemsStyle}>REB: {item.rebounds}</Text>
                        <Text style={styles.itemsStyle}>AST: {item.assists}</Text>
                        <Text style={styles.itemsStyle}>BLK: {item.blocks}</Text>
                        <Text style={styles.itemsStyle}>STL: {item.steals}</Text>
                        <Text style={styles.itemsStyle}>PF: {item.fouls}</Text>
                        <Text style={styles.itemsStyle}>TO: {item.turnovers}</Text>
                    </TouchableOpacity>
                </View>
                }
            />
            }
        </View>
    </>);
}