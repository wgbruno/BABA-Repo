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
import Player from '../Objects/Player';

export var db = openDatabase({name: 'TestDatabase.db'});

export default function AddPlayer({ navigation }){
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [age, setAge] = useState("");
    const [number, setNumber] = useState("");
    const [height, setHeight] = useState("");

    const p = new Player(firstName,lastName,age,number,height);

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