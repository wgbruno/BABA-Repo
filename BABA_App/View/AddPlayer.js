import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Player } from "../Objects/Player.js";
import { Stats } from "../Objects/Stats.js";
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";

export default function AddPlayer(){
    const [firstName, setFirst] = React.useState("");
    const [lastName, setLast] = React.useState("");
    const [age, setAge] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [height, setHeight] = React.useState("");

    function handlePlayer(pFirst, pLast, pAge, pNumber, pHeight){
        const newPlayer = new Player (pFirst, pLast, pNumber, pAge, pHeight, null);

        console.log(JSON.stringify(newPlayer));
        alert( JSON.stringify(newPlayer));
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

            <TouchableOpacity style={FormStyle.formButton} onPress={()=> handlePlayer(firstName, lastName, age, number, height)}>
                <Text style={FormStyle.formButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};