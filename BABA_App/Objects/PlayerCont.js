import { Alert } from 'react-native';
import { addPlayerDB, getFirstNameDB, getLastNameDB, getTeam } from '../DAOs/PlayerDao';

// rename this to PlayerController?? or PlayerDao?
export class Player{
    //create player
    constructor(ID, firstName, lastName, number, age, height, points, rebounds, assists, blocks, steals, fouls, turnovers, teamName){
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.age = age;
        this.height = height;
        this.points = points;
        this.rebounds = rebounds;
        this.assists = assists;
        this.blocks = blocks;
        this.steals = steals;
        this.fouls = fouls;
        this.turnovers = turnovers;
        this.teamName = teamName
    }

    createPlayer(){
        return addPlayerDB(this.ID, this.firstName, this.lastName, this.number, this.age, this.height);
    }

    getTeamName(){
        return getTeam(this.ID);
    }

    //call this method to use in sqllite execute call from AddPlayer
    getProfile(){
        return [this.ID, this.firstName, this.lastName, this.age, this.number, this.height, this.points, this.rebounds, this.assists, this.blocks, this.steals, this.fouls, this.turnovers];
    }

    //view player
    getID(){
        return this.ID;
    }
    getFirstName(){
        return getFirstNameDB(this.ID);
    }
    getLastName(){
        return getLastNameDB(this.ID);
    }
    getNumber(){
        return this.number;
    }
    getAge(){
        return this.age;
    }
    getHeight(){
        return this.height;
    }
    getPoints(){
        return this.points;
    }
    getRebounds(){
        return this.rebounds;
    }
    getAssists(){
        return this.assists;
    }
    getBlocks(){
        return this.blocks;
    }
    getSteals(){
        return this.steals;
    }
    getFouls(){
        return this.fouls;
    }
    getTurnovers(){
        return this.turnovers;
    }
}

 