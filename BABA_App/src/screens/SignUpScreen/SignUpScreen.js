import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/core';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  const onRegisterManager = () => {
    navigation.navigate('AddTeam');
  };

  const onRegisterPlayer = () => {
    navigation.navigate('AddPlayer');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');

  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <View style = {styles.container}>
          <View style = {styles.checkboxContainer}>
            <CheckBox
              value = {isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>I'm a manager.</Text>
          </View>
        </View>
        
        <CustomButton text="Register" onPress={isSelected ? onRegisterPlayer : onRegisterManager} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Have an account? Sign in"
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
    padding: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 30,
  },
  link: {
    color: '#FDB075',
  },
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default SignUpScreen;
