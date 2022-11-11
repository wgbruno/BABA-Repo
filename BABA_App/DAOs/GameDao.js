import Realm from "realm";
import { Account } from '../Objects/AccountCont';

class GameSchema extends Realm.Object {}
GameSchema.schema = {
    name: 'Game',
    primaryKey: 'gameName',
    properties:{
        team1Name: 'string',
        team2Name: 'string',
        startTime: 'string',
        team1Score: 'int',
        team2Score: 'int',
        date: 'int' //ideally input this as an int with no delimeters to calculate games occuring in next week(7), month(30)
        //look into if there is a data type that is better to use here
    }
};

export function createGame(name1, name2, start, gameName, gameDate){
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

let realm = new Realm({schema: [AccountSchema], schemaVersion: 5});

export default realm;