import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../../src/components/CustomInput'
import CustomButton from '../../../src/components/CustomButton';
import { NavigationContainer } from 'react-native';
import { Account } from '../../../Objects/AccountCont';

export default function NewPasswordScreen({navigation}){
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onSubmitPressed = () => {
    const account = new Account(userName, null, password);
    if(newPassword != rePassword){
      Alert.alert("New passwords Do Not Match!", "Please submit passwords again.");
    } else if(account.search()){
      Alert.alert("Username does not exist","The username you entered does not exist. Try again.");
    }else if(account.passCheck()){
      Alert.alert("Incorrect Password","Please reenter your current password.");
    }
    else{
      account.newPassword(newPassword)
      Alert.alert('Password Changed', 'You have succesfully changed your password.');
      navigation.navigate('HomeScreen');
    }
    
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Change your password</Text>

        <CustomInput placeholder="Username" value={userName} setValue={setUserName} />
        
        <CustomInput placeholder="Old password" value={password} setValue={setPassword} />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomInput
          placeholder="Reenter your new password"
          value={rePassword}
          setValue={setRePassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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