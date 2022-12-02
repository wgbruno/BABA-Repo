import React, { useEffect, useState } from "react";
import { NavigationContainer } from 'react-native';
import { Player } from "../../Objects/PlayerCont";
import { Account } from "../../Objects/AccountCont";

export default function SendTeamRequestScreen({navigation}){
    const [playerID, setPlayerID] = useState("");
    const [managerID, setManagerID] = useState("");

    useEffect(() => {
        setPlayerID(navigation.getParam("paramPlayerID", 0));
        setManagerID(navigation.getParam("paramManagerID", "N/A"));
    })

    const toSendRequest = () => {
        
    }

};
