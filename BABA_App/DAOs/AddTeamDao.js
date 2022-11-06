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

export function insertTeam(_teamName, _wins, _losses, _seed, _players){
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

export function getAllTeams(){
    return realm.objects("Team");
}

let realm = new Realm({schema: [teamSchema], schemaVersion: 1});

// Export the realm
export default realm;