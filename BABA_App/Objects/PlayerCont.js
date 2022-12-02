import { Alert } from 'react-native';
import { addPlayerDB, getTeam } from '../DAOs/PlayerDao';

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
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
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
    updateProfile(p){
        this.firstName = p.firstName;
        this.lastName = p.lastName;
        this.number = p.number;
        this.age = p.age;
        this.height = p.height;
        this.points = p.points;
        this.rebounds = p.rebounds;
        this.assists = p.assists;
        this.blocks = p.blocks;
        this.steals = p.steals;
        this.fouls = p.fouls;
        this.turnovers = p.turnovers;
        InsertPlayerDao(p);
    }
    //update player
    updateFirstName(newFirst){
        this.firstName = newFirst;
    }
    updateLastName(newLast){
        this.lastName = newLast;
    }
    updateNumber(newNumber){
        this.number = newNumber;
    }
    updateAge(newAge){
        this.age = newAge;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }
    updatePoints(newPoints){
        this.points = newPoints;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }
    updateHeight(newHeight){
        this.height = newHeight;
    }

 

    /*
    deletePlayer(){
        //nullify all the attributes and do something to remove from db?
    }*/
    //delete player: anything needed here, or just remove entry from db?
}

 