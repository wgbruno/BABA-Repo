import React, { useEffect, useState } from "react";
import { NavigationContainer } from 'react-native';
import CustomButton from "../../src/components/CustomButton";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../../assets/images/Logo_1.png'
import { Account } from "../../Objects/AccountCont";
import { Player } from "../../Objects/PlayerCont";
import { getNewIDDB } from "../../DAOs/PlayerDao";

export default function ManagerHomeScreen({navigation}){
  const {height} = useWindowDimensions();
  const [userName, setUser] = useState("");

  useEffect(() => {
    setUser(navigation.getParam('paramUserName', "test"));
  })

  const toTeam = () => {
    navigation.navigate("DisplayTeam", {paramTeamName: teamName});
  }
  
  const freeAgents = () => {
    navigation.navigate('FreeAgent', {paramUserName: userName});
  }
  
  
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 20}]}
            resizeMode="contain"
          />
          <CustomButton
            text={"View Team"}
            onPress={toTeam}
          />

          <CustomButton
            text={"Free Agents"}
            onPress={freeAgents}
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
      maxWidth: 200,
      maxHeight: 150,
    },
  });