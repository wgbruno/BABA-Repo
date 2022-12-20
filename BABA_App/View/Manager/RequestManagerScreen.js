import React, { useEffect, useState } from "react";
import { NavigationContainer } from 'react-native';
import CustomButton from "../../src/components/CustomButton";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import { Account } from "../../Objects/AccountCont";

export default function RequestManagerScreen({navigation}){
    const {height} = useWindowDimensions();
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setUserName(navigation.getParam("paramUserName", "N/A"));
    })
    
    const toChangeAccount = () => {
        var tmp = new Account(userName);
        const account = tmp.getAccount();
        if(account.changeType()){
            Alert.alert("Failed!", "Failed to convert to manager account!");
        }else{
            Alert.alert("Success!", "Converted account to manager!");
            navigation.navigate("PlayerHome");
        }
    }
    

    return(
        
        <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
        />
        <CustomButton
            text={"Convert " +userName+ " to manager"}
            onPress={toChangeAccount}
        />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        marginTop: 8, 
        fontWeight: 'bold', 
        color: 'red', 
        fontSize: 20
    },
    root: {
      alignItems: 'center',
      padding: 10,
      flex: 1
    },
    logo: {
      width: '3000%',
      maxWidth: 200,
      maxHeight: 150,
    },
});