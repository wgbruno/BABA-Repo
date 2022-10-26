import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { db } from './AddTeam';

export default function ViewAllTeams({ navigation }){
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState([]);

    useEffect(() =>{
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Team_Table', [], (tx, results) => {
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

    const listAllTeams = () => {
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
                    No Teams Have Registered Yet
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
                ItemSeparatorComponent={listAllTeams}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View key={item.number} style={{ padding: 20}}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('UpdateTeams', {
                        paramID: item.name,
                        paramFirst: item.record,
                        paramLast: item.seed,
                        paramAge: item.players,});}}>
                        <Text style={styles.itemsStyle}>Name: {item.firstName}</Text>
                        <Text style={styles.itemsStyle}>Record: {item.lastName}</Text>
                        <Text style={styles.itemsStyle}>Seed: {item.age}</Text>
                        <Text style={styles.itemsStyle}>Players: {item.number}</Text>
                    </TouchableOpacity>
                </View>
                }
            />
            }
        </View>
    </>);
}