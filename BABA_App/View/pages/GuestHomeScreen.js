import React, { Component, useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert, ScrollView, StyleSheet, Image, useWindowDimensions} from 'react-native';
import FormStyle from "../../Style/Form.style";
import CustomButton from "../../src/components/CustomButton";
import Logo from '../../assets/images/Logo_1.png'
import { NavigationContainer } from 'react-native';

export default function GuestHomeScreen ({navigation}){
    const {height} = useWindowDimensions();

    const toViewPlayers = () => {
      navigation.navigate('ViewPlayers');
  }
    const toViewTeams = () => {
        navigation.navigate('ViewTeams');
    }
    const toCalendarScreen = () => {
        navigation.navigate('CalendarScreen');
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
          <CustomButton 
                onPress={toViewPlayers}
                text={"View Players"}
          />
          <CustomButton 
                onPress={toViewTeams}
                text={"View Teams"}
          />
          <CustomButton 
                onPress={toCalendarScreen}
                text={"Calendar"}
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
