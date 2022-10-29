import { Player } from '/Player.js';
import RegisterTeam from '../View/AddTeamDao.js';


export class Team {
    //create team
    constructor(teamName, record, seed, players, navigation){
        this.teamName = teamName;
        this.record = record;
        this.seed = seed;
        this.players = players;

        RegisterTeam(navigation, this.getProfile);
    }

    //needed for sqlite execute call from RegisterTeam
    getProfile(){
        return [this.teamName, this.record, this.seed, this.players]
    }

    //view team
    getName(){
        return this.teamName;
    }

    getRecord(){
        return this.record;
    }

    getSeed(){
        return this.seed;
    }

    getPlayers(){
        return this.players;
    }

    //update team
    updateTeamName(newName){
        this.teamName = newName;
    }

    updateRecord(newRecord){
        this.record = newRecord;
    }

    updateSeed(newSeed){
        this.seed = newSeed;
    }

    updatePlayers(newPlayers){
        this.players = newPlayers;
    }

    /*
    deleteTeam(){
        //nullify team attributes and do something to remove from db
        //keep player objects? would make sense so users don't have to make a new profile
    }*/
}