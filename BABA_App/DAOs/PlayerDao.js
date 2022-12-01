import React, {useState} from "react";
import { Alert } from "react-native";
import realm from "./SchemaDao";

export function getTeam(_ID){
    var player = realm.objectForPrimaryKey("Player", _ID);
    if(player['teamName'] != null){
        return player['teamName'];
    }else{
        return 1;
    }
}