import React, { Component } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import FormStyle from "../Style/Form.style";
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
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('TeamReg')}
                    title="Register Team">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('ViewTeams')}
                    title="View Teams">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('SignIn')}
                    title="Sign In">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    title="Sign Up">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('ConfirmEmail')}
                    title="Confirm Email">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    title="Forgot Password">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('NewPassword')}
                    title="Change Password">
                </Button>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('DeleteAccount')}
                    title="Delete Account">
                </Button>
            </View>    
        </>);
    }
}
