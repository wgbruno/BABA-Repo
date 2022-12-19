import React, { Component, useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert, ScrollView, StyleSheet, Image, useWindowDimensions} from 'react-native';
import FormStyle from "../Style/Form.style";
import CustomButton from "../src/components/CustomButton";
import Logo from '../assets/images/Logo_1.png'
import { NavigationContainer } from 'react-native';

export default function Home ({navigation}){
    const {height} = useWindowDimensions();
    const [userName, setUserName] = useState("");
    const [accountType, setAccountType] = useState("");

    useEffect(() => {
        setUserName(navigation.getParam("paramUserName", "N/A"));
        setAccountType(navigation.getParam('paramAccountType', "N/A"));
    })

    const toPlayerReg = () => {
        navigation.navigate('PlayerReg');
    }
    const toViewPlayers = () => {
        navigation.navigate('ViewPlayers');
    }
    const toTeamReg = () => {
        navigation.navigate('TeamReg');
    }
    const toViewTeams = () => {
        navigation.navigate('ViewTeams');
    }
    const toSignIn = () => {
        navigation.navigate('SignIn');
    }
    const toSignUp = () => {
        navigation.navigate('SignUp');
    }
    const toForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }
    const toNewPassword = () => {
        navigation.navigate('NewPassword');
    }
    const toDeleteAccount = () => {
        navigation.navigate('DeleteAccount');
    }
    const toCalendarScreen = () => {
        navigation.navigate('CalendarScreen');
    }
    const toRequestManager = () => {
        navigation.navigate('RequestManager', {paramUserName: userName});
    }
    const toPlayoffScreen = () => {
        navigation.navigate('PlayoffScreen');
    }

    return(<>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
          />
            <Text>{userName}        {accountType}</Text>
            <CustomButton 
                onPress={toPlayerReg}
                text={"Register Player"}
            />
            <CustomButton 
                onPress={toViewPlayers}
                text={"View Players"}
            />
            <CustomButton 
                onPress={toTeamReg}
                text={"Register Team"}
            />
            <CustomButton 
                onPress={toViewTeams}
                text={"View Teams"}
            />
            <CustomButton 
                onPress={toSignIn}
                text={"Sign In"}
            />
            <CustomButton 
                onPress={toSignUp}
                text={"Sign Up"}
            />
            <CustomButton 
                onPress={toForgotPassword}
                text={"Forgot Password"}
            />
            <CustomButton 
                onPress={toNewPassword}
                text={"Change Password"}
            />
            <CustomButton 
                onPress={toDeleteAccount}
                text={"Delete Account"}
            />
            <CustomButton 
                onPress={toCalendarScreen}
                text={"Calendar"}
            />
            <CustomButton 
                onPress={toRequestManager}
                text={"Request Manager"}
            />
            <CustomButton 
                onPress={toPlayoffScreen}
                text={"View Playoffs"}
            />
        </View>
    </ScrollView>
    </>);
};

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '3000%',
      maxWidth: 200,
      maxHeight: 150,
    },
  });
