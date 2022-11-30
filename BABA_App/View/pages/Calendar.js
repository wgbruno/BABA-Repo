import React from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import MainStyle from '../../Style/Main.style';
import FormStyle from '../../Style/Form.style';
import Realm from 'realm';
import Gameformat from './components/Gameformat';
import { NavigationContainer } from 'react-native';
import { getAllDBGames } from '../../DAOs/GameDao';

let realm;
 
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
                    <Text style={styles.section}>Games This Week</Text>
                    <Gameformat teamName1='Ballers' teamName2='Hoopers' time='8:00pm'/>
                    <Text style={styles.section}>Upcoming</Text>
                    <Button 
                        style={FormStyle.formButton} 
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