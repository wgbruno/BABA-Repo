import React from 'react';
import { Text, View } from 'react-native';
import Realm from 'realm';
import Gameformat from './components/Gameformat';
import Mytext from './components/Mytext';
let realm;
 
export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        realm = new Realm({ path: 'UserDatabase.realm' });
        /*
            //figure out how this is going to work/are games states?
            //game objects/where do games exist? how to access them to be displayed here
        */
    }

    render() {
        return (<>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    flexDirection: 'column'
                }}>
                <Mytext text="Schedule"/>
                <Mytext text="Games This Week"/>
                <Gameformat teamName1='Ballers' teamName2='Hoopers' time='8:00pm'/>
                <Mytext text="Upcoming"/>
            </View></>
        )
    }
}