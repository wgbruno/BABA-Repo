import React, {useEffect, useState} from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MainStyle from '../../Style/Main.style';
import FormStyle from '../../Style/Form.style';
import Realm from 'realm';
import Gameformat from './components/Gameformat';
import { NavigationContainer, SafeAreaView, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getAllDBGames } from '../../DAOs/GameDao';
import Logo from '../../assets/images/Logo_1.png'

let realm;
 
export default function ViewAllGames({ navigation }){
    const [games, setGames] = useState(getAllDBGames());
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        console.log(games);
        if(games != undefined){
            setEmpty(false);
        }
    })
    
    const emptyDatabase = () => {
        return(
            <View style={styles.root}>
                <Text style={styles.teamText}>
                    No Games Have Been Scheduled Yet
                </Text>
            </View>
        );
    }

// remove safe area view and JSON stuff when done
//flat list is what makes them a list
    return(<>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{padding: 8}}>
        <Text>{JSON.stringify(getAllDBGames())}</Text>
        </SafeAreaView>
        {/* Above is just for testing, REMOVE when done!!!!*/}
        {/* List for all games*/}
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => navigation.navigate('ScheduleGame')}
                    title="Schedule New Game">
                </Button>
                <Text style={styles.teamText}>Upcoming Games</Text>
            </View>
            {empty ? emptyDatabase():
            <FlatList
                data={games}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('GameView', {
                                paramTeam1: item.teamName1,
                                paramTeam2: item.teamName2,
                                paramDate: item.date,
                                paramStart: item.tipoff,
                                paramScore1: item.teamScore1,
                                paramScore2: item.teamScore2,
                                paramID: item.gameID });}}>
                            <Text>{item.teamName1}      {item.teamName2}</Text>
                            <Text>{item.teamScore1}      {item.teamScore2}</Text>
                            <Text>{item.date}</Text>
                            <Text>{item.tipoff}</Text>

                        </TouchableOpacity>
                    </View>
                } />
            }
        </ScrollView>
    </>);
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    teamText: {
      color: 'darkblue',
      marginVertical: 10,
      fontSize: 25,
    }
  });

  /*  
const listAllGames = () => {
    return(
        <View 
        style={{height: 1, width: '100%', backgroundColor: '#000'}}
        />
    );
};

const styles = StyleSheet.create({
    itemsStyle:{
        fontSize:22,
        color: '#000'
    }
});*/

/*
export default class Calendar extends React.Component {
    //is this constructor even needed?
    constructor(props) {
        super(props);
        realm = new Realm({ path: 'UserDatabase.realm' });
        
            //figure out how this is going to work/are games states?
            //game objects/where do games exist? how to access them to be displayed here   
        
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Text style={styles.title}>Calendar</Text>
                    <Text style={styles.section}>Upcoming Games</Text>
                    <Gameformat teamName1='Ballers' teamName2='Hoopers' time='8:00pm'/>
                    <Button 
                        //style={FormStyle.formButton} 
                        onPress={() => this.props.navigation.navigate('ScheduleGame')}
                        title="Schedule New Game">
                    </Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    section: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
  });

/*
<StatusBar barStyle="light-content" />
                <SafeAreaView style={{padding: 8}}>
                <Text>{JSON.stringify(getAllDBGames())}</Text>
                </SafeAreaView>
                {/* List for all games }
                <Text style={{marginTop: 8, fontWeight: 'bold'}}>Game                          Wins            Losses             Seed Players</Text>
                        {empty ? this.emptyDatabase(empty):
                        <FlatList
                            data={teams}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => {
                                return (
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text>{item.teamName}</Text>
                                        <Text>{item.wins}</Text>
                                        <Text>{item.losses}</Text>
                                        <Text>{item.seed}</Text>
                                        <Text>{item.players}</Text>
                                    </View>
                                )
                            }} />
                        }
                */