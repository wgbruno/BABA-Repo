import React from 'react';
import { Button, Text, View } from 'react-native';
import Realm from 'realm';
import Gameformat from './components/Gameformat';
import Mytext from './components/Mytext';
import { NavigationContainer } from 'react-native';
import { getAllDBGames } from '../../DAOs/GameDao';

let realm;
 
export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        realm = new Realm({ path: 'UserDatabase.realm' });
        /*
            //figure out how this is going to work/are games states?
            //game objects/where do games exist? how to access them to be displayed here   
        
    */}
    //const [games, setGames] = useState(getAllDBGames());

    /*
    emptyDatabase = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center'}}>
                    No Games Scheduled
                </Text>
            </View>
        );
    }*/

    render() {
        return (<>
            <View
                style={{ //or just use FormStyle like in Home.js
                    flex: 1,
                    backgroundColor: 'white',
                    flexDirection: 'column'
                }}>
                <Mytext text="Schedule"/>
                <Button 
                    style={FormStyle.formButton} 
                    onPress={() => this.props.navigation.navigate('ScheduleGame')}
                    title="Schedule New Game">
                </Button>
                <Mytext text="Games This Week"/>
                <Gameformat teamName1='Ballers' teamName2='Hoopers' time='8:00pm'/>
                <Mytext text="Upcoming"/>
            </View></>
        )
    }
}

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