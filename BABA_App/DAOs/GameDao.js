import React from 'react';
import realm from "./SchemaDao";

/*class GameSchema extends Realm.Object {}
GameSchema.schema = {
    name: 'Game',
    properties:{
        team1Name: 'string',
        team2Name: 'string',
        startTime: 'string',
        team1Score: 'int',
        team2Score: 'int',
        date: 'string' //ideally input this as an int with no delimeters to calculate games occuring in next week(7), month(30)
        //look into if there is a data type that is better to use here
    }
};*/


let insertDBGame = (name1, name2, start, gameDate) => {
    realm.write(() => {
        const game = realm.create('Game', {
            team1Name: name1,
            team2Name: name2,
            startTime: start,
            team1Score: 0,
            team2Score: 0,
            date: gameDate
        });
    });
}

/*
let getAllDBGames = () => {
    return realm.objects('Game');
}

let DBisEmpty = () => {
    return realm.length == 0;
}*/

//export default realm;
//let realm = new Realm({schema: [GameSchema], schemaVersion: 5});


export {
    insertDBGame
    //getAllDBGames,
    //DBisEmpty
}

/*
export function CreateGame(name1, name2, start, gameName, gameDate){
    realm.write(() => {
        const account = realm.create('Game', {
            primaryKey: gameName,
            team1Name: name1,
            team2Name: name2,
            startTime: start,
            team1Score: 0,
            team1Score: 0,
            date: gameDate
            //logStatus: false needed?
            //verifyCode needed here?
        });
    });
}

export function findGame(gameName, verify){
    var game = realm.objectForPrimaryKey("Game", gameName);
    if(verify){
        if(game == undefined){
            return 1;
        }
        else{
            console.log("Found matching account");
            return 0;
        }
    }
    else{
        if(game != undefined){
            return 1;
        }
        else{
            console.log("Unique GameName");
            return 0;
        }
    }
}

//let realm = new Realm({schema: [AccountSchema], schemaVersion: 5});
*/
