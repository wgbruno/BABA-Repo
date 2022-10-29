import { Stats } from './Stats.js';
import AddPlayer from '../DAOs/AddPlayerDao.js';

// rename this to PlayerController?? or PlayerDao?
export class Player {
    //create player
    constructor(firstName, lastName, number, age, height, stats){
        this.firstName = firstName;
        this.lastName = lastName;
        this.number = number;
        this.age = age;
        this.height = height;
        this.stats = stats;

        AddPlayer(this.getProfile());
    }

    //call this method to use in sqllite execute call from AddPlayer
    getProfile(){
        return [this.firstName, this.lastName, this.age, this.number, this.height, 0, 0, 0, 0, 0, 0, 0]
    }

    //view player
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
    getStats(){
        return this.stats;
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

    updateStats(newStats){
        this.stats = newStats;
    }

    //delete player: anything needed here, or just remove entry from db?
}

 