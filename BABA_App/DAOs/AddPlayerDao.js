import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";

export var db = openDatabase({name: 'BABA.db'});

export default function AddPlayerDao(){
    
    useEffect(() => {
        db.transaction(function (txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Player_Table'",
            [],
            function(tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS Player_Table', []);
                txn.executeSql("CREATE TABLE IF NOT EXISTS Player_Table(playerID INTEGER PRIMARY KEY AUTOINCREMENT, "
                  + "firstName VARCHAR(25), lastName VARCHAR(25), age INT(15), number INT(15), height VARCHAR(10), "
                  + "points INT(15), rebounds INT(15), assists INT(15), blocks INT(15), steals INT(15), " 
                  + "fouls INT(15), turnovers INT(15))",
                  []
                );
              }
            }
          );
        })
    }, []);
};