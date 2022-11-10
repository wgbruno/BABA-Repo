import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, StatusBar } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import realm, { insertDBTeam, getAllDBTeams } from "../DAOs/AddTeamDao";

export default function RegisterTeam(){
    insertDBTeam('testTeam', 5, 0, 1, []);
    //const [teamName, setName] = useState(insertDBTeam());
    /*
    return (
        <>
        <View style={FormStyle.groupView}>
            <Text style={MainStyle.emphasisText}>Team Registration</Text>
        </View>
        <View style={FormStyle.groupView}>
            <Text style={FormStyle.label}>Team Name:</Text>
            <TextInput onChangeText={} style={FormStyle.input} autoCapitalize={false} />
            <TouchableOpacity style={FormStyle.formButton} onPress={setName}>
                <Text style={FormStyle.formButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    );
    */
    return (
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{padding: 8}}>
        <Text>Some sample text</Text>
        <Text>{JSON.stringify(getAllDBTeams())}</Text>
        </SafeAreaView>
    </>
    );
    /*
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
            tx.executeSql("INSERT INTO Team_Table(teamName, record, seed, players) "
                + "VALUES (?,?,?,?)",
                [teamName, record, seed, players],
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
    }*/
    /*
    return (<>
        <View style={FormStyle.groupView}>
            <Text style={MainStyle.emphasisText}>Team Registration</Text>
        </View>
        <View style={FormStyle.groupView}>
            <Text style={FormStyle.label}>Team Name:</Text>
            <TextInput onChangeText={setName} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Record:</Text>
            <TextInput onChangeText={setRecord} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Seed:</Text>
            <TextInput onChangeText={setSeed} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Players:</Text>
            <TextInput onChangeText={setPlayers} style={FormStyle.input} autoCapitalize={false} />
            <TouchableOpacity style={FormStyle.formButton} onPress={insertTeam}>
                <Text style={FormStyle.formButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    );*/
    
};