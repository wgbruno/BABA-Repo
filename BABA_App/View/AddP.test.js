import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";
import effectCall from '../DAOs/AddPlayerDao';
import insertPlay from '../DAOs/AddPlayerDao';
import viewPlay from '../DAOs/AddPlayerDao';

export var db = openDatabase({name: 'PlayerDatabase.db'});

export default function AddPlayer({ navigation }){
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [age, setAge] = useState("");
    const [number, setNumber] = useState("");
    const [height, setHeight] = useState("");

    useEffect(() => {
        effectCall();
        
        // take this code out and put it into a new class/function
        // we only have one layer right now, need to seperate it
    }, []);

    const insertPlayer = () => {
        insertPlay();
    }
    
    const viewPlayer = () => {
        viewPlay();
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