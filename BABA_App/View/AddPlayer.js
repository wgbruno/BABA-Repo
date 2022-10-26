import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Player } from "../Objects/Player.js";
import { Stats } from "../Objects/Stats.js";
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";

export var db = openDatabase({name: 'PlayerDatabase.db'});

export default function AddPlayer({ navigation }){
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [age, setAge] = useState("");
    const [number, setNumber] = useState("");
    const [height, setHeight] = useState("");

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

    const insertPlayer = () => {
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO Player_Table(firstName, lastName, age, number, height, "
                + "points, rebounds, assists, blocks, steals, fouls, turnovers) "
                + "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                [firstName, lastName, age, number, height, 0, 0, 0, 0, 0, 0, 0],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Inserted','Player Inserted Successfully', [{
                            text: 'Ok',
                            onPress: () => navigation.navigate('HomeScreen'),
                        },],
                        {cancelable: false});
                    } else
                        Alert.alert('Failed');
                }
            );
        });
        viewPlayer();
    }
    
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

    return (<>
        <View style={FormStyle.groupView}>
            <Text style={MainStyle.emphasisText}>Player Registration</Text>
        </View>
        <View style={FormStyle.groupView}>
            <Text style={FormStyle.label}>First Name:</Text>
            <TextInput onChangeText={setFirst} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Last Name:</Text>
            <TextInput onChangeText={setLast} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Age:</Text>
            <TextInput onChangeText={setAge} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Number:</Text>
            <TextInput onChangeText={setNumber} style={FormStyle.input} autoCapitalize={false} />

            <Text style={FormStyle.label}>Height:</Text>
            <TextInput onChangeText={setHeight} style={FormStyle.input} autoCapitalize={false} />

            <TouchableOpacity style={FormStyle.formButton} onPress={insertPlayer}>
                <Text style={FormStyle.formButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};