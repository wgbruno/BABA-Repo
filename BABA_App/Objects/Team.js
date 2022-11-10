import { insertDBTeam, deleteDBTeam, updateDBName, updateDBWins, updateDBLosses, updateDBSeed, addDBPlayer} from '../DAOs/AddTeamDao.js';

export class Team {
    // Create team
    constructor(teamName, wins, losses, seed, players){
        this.teamName = teamName;
        this.record = record;
        this.wins = wins;
        this.losses = losses;
        this.seed = seed;
        this.players = players;

        RegisterTeam(navigation, this.getProfile);
    }

    //needed for sqlite execute call from RegisterTeam
    getTeam(){
        return [this.teamName, this.wins, this.losses, this.seed, this.players]
    }

    //view team
    getName(){
        return this.teamName;
    }

    getWins(){
        return this.wins;
    }

    getLosses(){
        return this.losses;
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
        updateDBName(newName);
    }

    updateWins(newWins){
        this.wins = newSeed;
        updateDBWins(newWins);
    }

    updateLosses(newLosses){
        this.losses = newSeed;
        updateDBLosses(newLosses);
    }

    updateSeed(newSeed){
        this.seed = newSeed;
        updateDBSeed(newSeed);
    }

    // Needs work
    addPlayer(newPlayer){
        this.player = newPlayer;
        addDBPlayer(newPlayer);
    }

    deleteTeam(_teamName){
        this.teamName = null;
        this.wins = null;
        this.losses = null;
        this.seed = null;
        this.players = null;
        deleteDBTeam(_teamName);
    }
}