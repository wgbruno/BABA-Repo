
import React from "react";
import { Text, StyleSheet, View} from 'react-native';

const Gameformat = (props) => {
    return (
        <View>
            <Text>{props.teamName1} vs. {props.teamName2}</Text>
            <Text>Tipoff @ {props.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    matchup: {
        color: '#111825',
        fontSize: 18,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
    },
});
export default Gameformat;
