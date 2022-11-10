import Realm from "realm";

// Returns the shared instance of the Realm app.
/*export function getRealmApp() {
    const appId = '<enter your App ID here>'; // Set App ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
    };
   return new Realm.App(appConfig);
 }*/

class teamSchema extends Realm.Object {}

//export default function RegisterTeam({ navigation }){
teamSchema.schema = {
    name : "Team",
    properties : {
        teamName : 'string',
        wins : 'int',
        losses : 'int',
        seed : 'int',
        players : {type : "list", objectType : "string"}
    }
};

export function getAllTeams(){
    return realm.objects("Team");
}

// Create Realm
let realm = new Realm({schema: [teamSchema], schemaVersion: 1});

//Functions
//Insert Team
let insertDBTeam = (_teamName, _wins, _losses, _seed, _players) => {
    realm.write(() => {
        const team = realm.create('Team', {
            teamName : _teamName,
            wins: _wins,
            losses : _losses,
            seed : _seed,
            players : _players
        });
    });
}

//Get all teams in JSON form
let getAllDBTeams = () => {
    return realm.objects('Team');
}
//Get individual team by name
let getDBTeam = (_teamName) => {
    return realm.objects('Team').filtered(`teamName="${_teamName}"`);
}
//Delete individual team by name
let deleteDBTeam = (_teamName) => {
    realm.write(() => {
        realm.delete(realm.objects("Team").filtered(_teamName));
    })
}
let updateDBName = (teamName, newName) => {
    let team = getDBTeam(teamName);
    team.teamName = newName;
}
let updateDBWins = (teamName, newWins) => {
    let team = getDBTeam(teamName);
    team.wins = newWins;
}
let updateDBLosses = (teamName, newLosses) => {
    let team = getDBTeam(teamName);
    team.losses = newLosses;
}
let updateDBSeed = (teamName, newSeed) => {
    let team = getDBTeam(teamName);
    team.seed = newSeed;
}

// Needs work
/*
export function addDBPlayer(teamName, newPlayer){
    
}*/

// Export the realm
export default realm;

export {
    insertDBTeam,
    getAllDBTeams,
    getDBTeam,
    deleteDBTeam,
    updateDBName,
    updateDBWins,
    updateDBLosses,
    updateDBSeed
}