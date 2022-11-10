import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../../src/components/CustomInput';
import CustomButton from '../../../src/components/CustomButton';
import { NavigationContainer } from 'react-native';
import { Account } from '../../../Objects/AccountCont';

export default function ConfirmEmailScreen({navigation}){
  const [userName, setUserName] = useState('');
  const [code, setCode] = useState('');
  var account = new Account(userName, null, null, null, code);
  
  const onConfirmPressed = () => {
    if(account.checkAccount(code)){
      console.log("Verify didnt work");
    }
    else{
      Alert.alert("Success","Account Created!");
      navigation.navigate('SignIn')
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = () => {
    account.sendEmail();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your username"
          value={userName}
          setValue={setUserName}
        />

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
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
