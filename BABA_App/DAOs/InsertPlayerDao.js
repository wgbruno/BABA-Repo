import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";

export var db = openDatabase({name: 'BABA.db'});


export default function InsertPlayerDao(playerProfile){
    useEffect(() => {
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO Player_Table(firstName, lastName, age, number, height, "
                + "points, rebounds, assists, blocks, steals, fouls, turnovers) "
                + "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                [playerProfile.getProfile()],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Inserted','Player Inserted Successfully', [{
                            text: 'Ok',
                        },],
                        {cancelable: false});
                    } else
                        Alert.alert('Failed');
                }
            );
        });
        viewPlayer();
    }, []);


    const viewPlayer = () => {
        db.transaction(function (tx) {
            tx.executeSql(
                'SELECT * FROM Player_Table',
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; i++)
                        temp.push(results.rows.item(i));
                    console.log(temp);
                }
            );
        });
    }
}