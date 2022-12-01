import React from "react";
import { NavigationContainer } from 'react-native';
import CustomButton from "../../src/components/CustomButton";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'

export default function ManagerHomeScreen({navigation}){
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
      maxWidth: 400,
      maxHeight: 300,
    },
  });