import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Player } from "../Objects/Player.js";
import { Team } from "../Objects/Team.js";
import { Stats } from "../Objects/Stats.js";
import MainStyle from "../Style/MainStyle.style";
import FormStyle from "../Style/Form.style";

export default function RegisterTeam(){
    const [teamName, setName] = React.useState("");
    const [record, setRecord] = React.useState("");
    const [seed, setSeed] = React.useState("");
    const [players, setPlayers] = React.useState("");

    function handleTeam(pName, pRecord, pSeed, pPlayers){
        const newTeam = new Team (pName, pRecord, pSeed, pPlayers, null);

        console.log(JSON.stringify(newTeam));
        alert( JSON.stringify(newTeam));
    }

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

            <TouchableOpacity style={FormStyle.formButton} onPress={()=> handleTeam(teamName, record, seed, players)}>
                <Text style={FormStyle.formButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};