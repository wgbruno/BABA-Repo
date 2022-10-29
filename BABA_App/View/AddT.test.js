import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import Team from '../Objects/Team';

export var db = openDatabase({name: 'TestDatabase.db'});

export default function RegisterTeam({ navigation }){
    const [teamName, setName] = useState("");
    const [record, setRecord] = useState("");
    const [seed, setSeed] = useState("");
    const [players, setPlayers] = useState("");

    const t = new Team(teamName,record,seed,players,navigation);

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
    );
};