import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { db } from './AddPlayer';

export default function EditPlayer({route, navigation}){
    const [playerID, setID] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [age, setAge] = useState("");
    const [number, setNumber] = useState("");
    const [height, setHeight] = useState("");

    useEffect(() => {
        setID(navigation.getParam('paramID', 'N/A'));
        setFirst(navigation.getParam('paramFirst', 'N/A'));
        setLast(navigation.getParam('paramLast', 'N/A'));
        setAge(navigation.getParam('paramAge', 'N/A').toString());
        setNumber(navigation.getParam('paramNumber', 'N/A').toString());
        setHeight(navigation.getParam('paramHeight', 'N/A'));
    }, []);

    const updatePlayer = () => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE Player_Table set firstName=?, lastName=?, '
            + 'age=?, number=?, height=? where playerID=?', 
            [firstName, lastName, age, number, height, playerID],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if(results.rowsAffected > 0){
                    Alert.alert('Updated', 'Player Updated', [{
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

    const deletePlayer = () => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM Player_Table where playerID=?',
            [playerID],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if(results.rowsAffected > 0) {
                    Alert.alert('Deleted', 'Player Deleted', [{
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
            <Text style={FormStyle.label}>First Name:</Text>
            <TextInput onChangeText={setFirst} placeholder="Enter First Name" value={firstName}
            style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Last Name:</Text>
            <TextInput onChangeText={setLast} placeholder="Enter Last Name" value={lastName}
            style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Age:</Text>
            <TextInput onChangeText={setAge} placeholder="Enter Age" value={age}
            style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Number:</Text>
            <TextInput onChangeText={setNumber} placeholder="Enter Number" value={number}
            style={FormStyle.input} autoCapitalize={false} />

            <Text style={FormStyle.label}>Height:</Text>
            <TextInput onChangeText={setHeight} placeholder="Enter Height" value={height}
            style={FormStyle.input} autoCapitalize={false} />

            <TouchableOpacity style={FormStyle.formButton} onPress={updatePlayer}>
                <Text style={FormStyle.formButtonText}>Submit Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={FormStyle.formButton} onPress={deletePlayer}>
                <Text style={FormStyle.formButtonText}>Delete Player</Text>
            </TouchableOpacity>            
        </View>
        </>
    );
}