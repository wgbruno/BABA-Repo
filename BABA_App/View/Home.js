import React, { Component, useState, useEffect } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import FormStyle from "../Style/Form.style";
import { NavigationContainer } from 'react-native';

export default function Home ({navigation}){
    const [userName, setUserName] = useState("");
    const [accountType, setAccountType] = useState("");

    useEffect(() => {
        setUserName(navigation.getParam("paramUserName", "N/A"));
        setAccountType(navigation.getParam('paramAccountType', "N/A"));
    })


    return(<>
        <View style={FormStyle.groupView}>
            <Text>{userName}        {accountType}</Text>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('PlayerReg')}
                title="Register Player">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('ViewPlayers')}
                title="View Players">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('TeamReg')}
                title="Register Team">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('ViewTeams')}
                title="View Teams">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('SignIn')}
                title="Sign In">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('SignUp')}
                title="Sign Up">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('ForgotPassword')}
                title="Forgot Password">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('NewPassword')}
                title="Change Password">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('DeleteAccount')}
                title="Delete Account">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('CalendarScreen')}
                title="Calendar">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('RequestManager', {paramUserName: userName})}
                title="Request Manager">
            </Button>
            <Button 
                style={FormStyle.formButton} 
                onPress={() => navigation.navigate('PlayoffScreen')}
                title="View Playoffs"></Button>
        </View>    
    </>);
}
