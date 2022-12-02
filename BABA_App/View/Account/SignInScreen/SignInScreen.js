import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../../src/components/CustomInput';
import CustomButton from '../../../src/components/CustomButton';
import { NavigationContainer } from 'react-native';
import { Account } from '../../../Objects/AccountCont';

export default function SignInScreen({navigation}){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    var account = new Account(username, password);
    console.log(account.userName);
    if(account.search()){
      Alert.alert("Unable to login","No account matching this Username.");
    } else if(!account.passCheck()){
      Alert.alert("Unable to login","Incorrect Password.");
    } else{
      if(account.logInAccount()){
        Alert.alert("Error","Problem Logging in. Try again.");
      }else{
        if(account.accountType == null){
          Alert.alert("Success", "You have logged in!");
          navigation.navigate('HomeScreen', {paramUserName: account.userName, paramAccountType: account.accountType});
        } else if(account.accountType == 'Admin'){
          Alert.alert("Success", "You have logged in as admin!");
          navigation.navigate('AdminScreen');
        } else if(account.accountType == 'Manager'){
          Alert.alert("Success", "You have logged in as manager!");
          navigation.navigate('ManagerHome', {paramUserName: account.userName});
        }
      }
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const onGuest = () => {
    navigation.navigate('HomeScreen', {paramUserName: username});
  };

  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 20}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton text="Guest mode" onPress={onGuest} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
  logo: {
    width: '3000%',
    maxWidth: 400,
    maxHeight: 300,
  },
});
