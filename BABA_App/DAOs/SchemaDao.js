import React from "react";
import { Alert } from "react-native";
import Realm from "realm";
import { ObjectId } from 'bson';

//appID = data-npbmz; 
//app = new App(new AppConfiguration.Builder(data-npbmz).build());
/*
class BABA_DB {
    constructor({
        name,
        partition,
        status = BABA_DB.STATUS_OPEN,
        id = new ObjectId(),
      }) {
        this._partition = partition;
        this._id = id;
        this.name = name;
        this.status = status;
      }
      static STATUS_OPEN = 'Open';
      static STATUS_IN_PROGRESS = 'InProgress';
      static STATUS_COMPLETE = 'Complete';

      static schema = {
        name: 'Account',
        primaryKey: 'userName',
        properties:{
            userName: 'string',
            email: 'string',
            password: 'string',
            accountType: 'string?',
            verifyCode: 'int',
            logStatus: 'bool'
        },
        primaryKey: '_id',
      };

      static schema = {
        name : "Team",
        properties : {
            teamName : 'string',
            wins : 'int',
            losses : 'int',
            seed : 'int',
            players : {type : "list", objectType : "string"}
        },
        primaryKey: '_id',
      };

      static schema = {
        name: 'Game',
        properties:{
            team1Name: 'string',
            team2Name: 'string',
            startTime: 'string',
            team1Score: 'int',
            team2Score: 'int',
            date: 'int' 
        }, 
        primaryKey: '_id',
      };
}*/

//export {BABA_DB};

// Returns the shared instance of the Realm app.
/*export function getRealmApp() {
    const appId = 'data-npbmz'; // Set App ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
    };
   return new Realm.App(appConfig);
 }

export async function openRealm() {
    let user;
    let realm;
    try {
      // ...
      console.log(`Logged in with the user: ${user.identity}`);
      const config = {
        schema: [Account.schema],
        schema: [Team.schema],
        schema: [Game.schema],
        sync: {
          user: user,
          partitionValue: "myPartition",
        },
      };
      realm = await Realm.open(config);
    } catch (error) {
        throw `Error opening realm: ${JSON.stringify(error,null,2)}`;
    }
  }*/

//export default new Realm({schema: schemasArray});


const BABA_DB = new Realm({
    schema:[{
        name: 'Account',
        primaryKey: 'userName',
        properties:{
            userName: 'string',
            email: 'string',
            password: 'string',
            accountType: 'string?',
            verifyCode: 'int',
            logStatus: 'bool',
            playerID: 'string'
        }
    }, {
        name: "Player",
        primaryKey: 'playerID',
        properties:{
            playerID: 'int',
            firstName: 'string',
            lastName: 'string',
            age: 'int',
            number: 'int',
            height: 'string',
            points: 'int',
            rebounds: 'int',
            assists: 'int',
            blocks: 'int',
            steals: 'int',
            fouls: 'int',
            turnovers: 'int',
            teamName: 'string'
        }
    }, {
        name : "Team",
        //primaryKey: 'teamName',
        properties : {
            teamName : 'string',
            wins : 'int',
            losses : 'int',
            seed : 'int',
            players : {type : "list", objectType : "string"}
        }
    }, {
        name: 'Game',
        primaryKey: 'gameID',
        properties:{
            gameID: 'int',
            team1Name: 'string',
            team2Name: 'string',
            startTime: 'string',
            team1Score: 'int',
            team2Score: 'int',
            date: 'date' 
        } 
    }],
    schemaVersion: 11
});

export default BABA_DB;
    //sync: { user, flexible: true },
    //schemaVersion: 5
//});
