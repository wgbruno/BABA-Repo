import React, { Component } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import FormStyle from "../Style/Form.style";
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import { NavigationContainer } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(<>
            <View style={FormStyle.groupView}>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('PlayerReg')}
                    title="Register Player">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('ViewPlayers')}
                    title="View Players">
                </Button>
            </View>    
        </>);
    }
}
