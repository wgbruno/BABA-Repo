import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../../src/components/CustomInput';
import CustomButton from '../../../src/components/CustomButton';
import { NavigationContainer } from 'react-native';
import { Account } from '../../../Objects/AccountCont';

export default function DeleteAccountScreen({navigation}){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const account = new Account(userName, null, password);

    const onDeletePressed = () => {
        if(account.search()){
            Alert.alert("Incorrect Account","An account does not exist with this username.");
        } else if(account.passCheck()){
            Alert.alert("Unable to login","Incorrect Password.");
        } else{
            if(!(account.deleteAccount())){
                Alert.alert("Account Deleted","You have succesfully deleted this account.")
                navigation.navigate("SignIn")
            }
        }
    };
    
    const onDeleteAllPressed = () => {
        if(!(account.deleteAll())){
            Alert.alert("Delete Succesfull", "All account objects deleted.");
            navigation.navigate("HomeScreen");
        }
        else{
            Alert.alert("Delete Failed");
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Delete Account</Text>

            <CustomInput placeholder="Username" value={userName} setValue={setUserName} />
            
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>

            <CustomButton text="Delete" onPress={onDeletePressed} />

            <CustomButton text="Delete All (Testing)" onPress={onDeleteAllPressed} />

        </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});
