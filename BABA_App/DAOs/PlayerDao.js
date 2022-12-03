import React, {useState} from "react";
import { Alert } from "react-native";
import realm from "./SchemaDao";

export function addPlayerDB(_ID, _first, _last, _number, _age, _height){
        realm.write(() => {
            const player = realm.create("Player", {
                primaryKey: _ID,
                playerID: _ID,
                firstName: _first,
                lastName: _last,
                age: _age,
                number: _number,
                height: _height,
                points: 0,
                rebounds: 0,
                assists: 0,
                blocks: 0,
                steals: 0,
                fouls: 0,
                turnovers: 0,
                teamName: 'Free Agent'
            });
        });
    return 0;
}

export function getNewIDDB(){
    return realm.objects('Player').length + 1
}

export function getTeam(_ID){
    var player = realm.objectForPrimaryKey("Player", _ID);
    return player['teamName'];
}

export function getFreeAgents(){
    return realm.objects('Player').filtered("teamName == 'Free Agent'");
}

export function getAllPlayers(){
    return realm.objects('Player');
}

export function findPlayer(_ID){
    var player = realm.objectForPrimaryKey("Player", _ID);
    if(player == undefined){
        return 1;
    }
    else{
        return 0;
    }
}

export function getFirstNameDB(_ID){
    var player = realm.objectForPrimaryKey("Player", _ID);
    return player['firstName'];
}

export function getLastNameDB(_ID){
    var player = realm.objectForPrimaryKey("Player", _ID);
    return player['lastName'];
}