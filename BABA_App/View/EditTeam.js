import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { db } from './AddTeam';

export default function EditTeam({route, navigation}){
    const [name, setName] = useState("");
    const [record, setRecord] = useState("");
    const [seed, setSeed] = useState("");
    const [players, setPlayers] = useState("");

    useEffect(() => {
        setName(navigation.getParam('paramName', 'N/A'));
        setRecord(navigation.getParam('paramRecord', 'N/A'));
        setSeed(navigation.getParam('paramSeed', 'N/A'));
        setPlayers(navigation.getParam('paramPlayers', 'N/A').toString());
    }, []);

    const updateTeam = () => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE Team_Table set name=?, record=?, '
            + 'seed=?, players=?', 
            [name, seed, record, players],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if(results.rowsAffected > 0){
                    Alert.alert('Updated', 'Team Updated', [{
                        text: 'Ok',
                        onPress: () => navigation.navigate('HomeScreen')
                    },],
                    {cancelable: false});
                } else {
                    Alert.alert('Error', error.message);
                }
            });
        });
    }

    const deleteTeam = () => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM Team_Table where teamID = ?',
            [teamID],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if(results.rowsAffected > 0) {
                    Alert.alert('Deleted', 'Team Deleted', [{
                        text: 'Ok',
                        onPress: () => navigation.navigate('HomeScreen'),
                    },],
                    {cancelable: false});
                }
            });
        });
    }

    return (<>
        <View style={FormStyle.groupView}>
            <Text style={MainStyle.emphasisText}>Edit Player</Text>
        </View>
        <View style={FormStyle.groupView}>
            <Text style={FormStyle.label}>Team Name:</Text>
            <TextInput onChangeText={setFirst} placeholder="Enter Name" value={name}
            style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Record:</Text>
            <TextInput onChangeText={setLast} placeholder="Enter Record" value={record}
            style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Seed:</Text>
            <TextInput onChangeText={setAge} placeholder="Enter Seed" value={seed}
            style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Players:</Text>
            <TextInput onChangeText={setNumber} placeholder="Enter Players" value={players}
            style={FormStyle.input} autoCapitalize={false} />

            <TouchableOpacity style={FormStyle.formButton} onPress={updateTeam}>
                <Text style={FormStyle.formButtonText}>Submit Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={FormStyle.formButton} onPress={deleteTeam}>
                <Text style={FormStyle.formButtonText}>Delete Player</Text>
            </TouchableOpacity>            
        </View>
        </>
    );
}