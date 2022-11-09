import React, {useState, useEffect} from 'react';
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";
import { NavigationContainer } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";
import { Player } from '../Objects/PlayerCont';
import AddPlayerDao from '../DAOs/AddPlayerDao';
import InsertPlayerDao from '../DAOs/InsertPlayerDao';

export default function AddPlayer(){
    var player = new Player();
    
    return (<>
        <View style={FormStyle.groupView}>
            <Text style={MainStyle.emphasisText}>Player Registration</Text>
        </View>
        <View style={FormStyle.groupView}>
            <Text style={FormStyle.label}>First Name:</Text>
            <TextInput onChangeText={player.setFirst} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Last Name:</Text>
            <TextInput onChangeText={player.setLast} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Age:</Text>
            <TextInput onChangeText={player.setAge} style={FormStyle.input} autoCapitalize={false} />
            
            <Text style={FormStyle.label}>Number:</Text>
            <TextInput onChangeText={player.setNumber} style={FormStyle.input} autoCapitalize={false} />

            <Text style={FormStyle.label}>Height:</Text>
            <TextInput onChangeText={player.setHeight} style={FormStyle.input} autoCapitalize={false} />

            <TouchableOpacity style={FormStyle.formButton} onPress={InsertPlayerDao(player)}>
                <Text style={FormStyle.formButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};