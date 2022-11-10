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

//Return whether the database is empty
let DBisEmpty = () => {
    return realm.length == 0;
}

//Get individual team by name
let getDBTeam = (_teamName) => {
    let team = getAllDBTeams().filter(userTeam => userTeam.teamName == _teamName);
    return team;
}

//Delete individual team by name
let deleteDBTeam = (_teamName) => {
    realm.write(() => {
        realm.delete(getAllDBTeams().filter(userTeam => userTeam.teamName == _teamName));
    })
}

//Delete all teams in database
let deleteAllDBTeams = () =>{
    realm.write(() => {
        realm.delete(getAllDBTeams());
    })
}

//Update team name
let updateDBName = (teamName, newName) => {
    let team = getDBTeam(teamName);
    team.teamName = newName;
}

//Update team wins
let updateDBWins = (teamName, newWins) => {
    let team = getDBTeam(teamName);
    team.wins = newWins;
}

//Update team losses
let updateDBLosses = (teamName, newLosses) => {
    let team = getDBTeam(teamName);
    team.losses = newLosses;
}

//Update team seed
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
    deleteAllDBTeams,
    updateDBName,
    updateDBWins,
    updateDBLosses,
    updateDBSeed,
    DBisEmpty
}