import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

export var db = openDatabase({name: 'TeamDatabase.db'});

export default function RegisterTeam({ navigation, teamProfile }){
    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Team_Table'",
            [],
            function(tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS Team_Table', []);
                txn.executeSql("CREATE TABLE IF NOT EXISTS Team_Table(teamID INTEGER PRIMARY KEY AUTOINCREMENT, "
                  + "teamName VARCHAR(25), record VARCHAR(25), seed INT(15), players INT(15))",
                  []
                );
              }
            }
          );
        })
    }, []);

    const insertTeam = () => {
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO Team_Table(teamName, record, seed, players "
                + "VALUES (?,?,?,?)",
                teamProfile,
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Inserted','Team Inserted Successfully', [{
                            text: 'Ok',
                            onPress: () => navigation.navigate('HomeScreen'),
                        },],
                        {cancelable: false});
                    } else
                        Alert.alert('Failed');
                }
            );
        });
        viewTeam();
    }

    const viewTeam = () => {
        db.transaction(function (tx) {
            tx.executeSql(
                'SELECT * FROM Team_Table',
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
};