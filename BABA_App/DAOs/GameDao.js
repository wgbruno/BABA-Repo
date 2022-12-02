import React from 'react';
import { Game } from '../Objects/GameCont';
import realm from "./SchemaDao";

export function getGameDB(_gameID){
    var game = realm.objectForPrimaryKey("Game", _gameID);
    return new Game(_gameID, game['team1Name'], game['team2Name'], game['date'], game['startTime'], game['team1Score'], game['team2Score']);
}

export function insertDBGame(_name1, _name2, _start, _gameDate){
    realm.write(() => {
        const game = realm.create('Game', {
            gameID: realm.objects('Game').length + 1, //This creates a gameID that can be used to search for games
            team1Name: _name1,
            team2Name: _name2,
            startTime: _start,
            team1Score: 0,
            team2Score: 0,
            date: Date(_gameDate)
        });
        return 0;
    });
   
}

export function addPointsDB(_gameID, _points, _teamID){
    if(findGame(_gameID)){
        realm.write(() => {
            var game = realm.objectForPrimaryKey('Game', _gameID);
            if(_teamID == 1){
                game["team1Score"] += _points;
            } else if(_teamID == 2){
                game["team2Score"] += _points;
            }else{
                return 1;
            }
            return 0;
        })
    } else {
        return 1;
    }
}

export function findGame(_gameID){
    var game = realm.objectForPrimaryKey("Game", _gameID);
    if(game == undefined){
        return 1;
    }
    else{
        //console.log("Found matching game");
        return 0;
    }
}

export function getAllDBGames(){
    return realm.objects('Game');
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
*/



