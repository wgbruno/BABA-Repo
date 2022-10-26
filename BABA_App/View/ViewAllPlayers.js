import React, {useEffect, useState} from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { db } from './AddPlayer';

export default function ViewAllPlayers(){
    const [items, setItems] = useState([]);
    const [empty, setEmpty] = useState([]);

    useEffect(() =>{
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM Player_Table', [], (tx, results) => {
                    var temp = [];
                    for(let i = 0; i < results.rows.length; i++){
                        temp.push(results.rows.item(i));
                    }
                    setItems(temp);

                    if(results.rows.length >= 1){
                        setEmpty(false);
                    } else{
                        setEmpty(true);
                    }
                }
            );
        });
    }, []);

    const listAllPlayers = () => {
        return(
            <View 
            style={{height: 1, width: '100%', backgroundColor: '#000'}}
            />
        );
    };

    const emptyDatabase = () => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize: 25, textAlign: 'center'}}>
                    No Players Have Registered Yet
                </Text>
            </View>
        );
    }

    const styles = StyleSheet.create({
        itemsStyle:{
            fontSize:22,
            color: '#000'
        }
    });

    return(<>
        <View style={{flex: 1}}>
            {empty ? emptyDatabase(empty):
            <FlatList
                data={items}
                ItemSeparatorComponent={listAllPlayers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View key={item.number} style={{ padding: 20}}>
                    <Text style={styles.itemsStyle}>First Name: {item.firstName}</Text>
                    <Text style={styles.itemsStyle}>Last Name: {item.lastName}</Text>
                    <Text style={styles.itemsStyle}>Age: {item.age}</Text>
                    <Text style={styles.itemsStyle}>Number: {item.number}</Text>
                    <Text style={styles.itemsStyle}>Height: {item.height}</Text>
                </View>
                }
            />
            }
        </View>
    </>);
}