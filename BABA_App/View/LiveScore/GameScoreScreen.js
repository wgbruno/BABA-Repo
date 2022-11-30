import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import { NavigationContainer } from 'react-native';

export default function GameScoreScreen({navigation}){
  const {height} = useWindowDimensions();


  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
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
      maxWidth: 132,
      maxHeight: 99,
    },
  });
  