import React from "react";
import { Alert } from "react-native";
import Realm from "realm";

const BABA_DB = new Realm({
    schema:[{
        name: 'Account',
        primaryKey: 'userName',
        properties:{
            userName: 'string',
            email: 'string',
            password: 'string',
            accountType: 'string?',
            verifyCode: 'int',
            logStatus: 'bool'
        }
    }, {
        name : "Team",
        properties : {
            teamName : 'string',
            wins : 'int',
            losses : 'int',
            seed : 'int',
            players : {type : "list", objectType : "string"}
        }
    }, {
        name: 'Game',
        properties:{
            team1Name: 'string',
            team2Name: 'string',
            startTime: 'string',
            team1Score: 'int',
            team2Score: 'int',
            date: 'int' 
        } 
    }]
});

let realm = new Realm({schema: [AccountSchema], schemaVersion: 1});

export default realm;
