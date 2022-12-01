import { insertDBGame, addPointsDB } from '../DAOs/GameDao.js';
import realm from "../DAOs/SchemaDao";

export class Game{
    constructor(gameID, teamName1, teamName2, date, tipoff, teamScore1, teamScore2){
        this.team1 = teamName1;
        this.team2 = teamName2;
        this.date = date;
        this.startTime = tipoff;
        this.teamScore1 = teamScore1;
        this.teamScore2 = teamScore2;
        if(gameID == 0){
            this.gameID = realm.objects('Game').length
        }else{
            this.gameID = gameID;
        }
    }

    addPoints(team, points, teamID){
        var result = addPointsDB(this.gameID, team, points);
        if(result == 0 && points == 1 && teamID == 1){
            this.teamScore1 += 1;
            return 0;
        }else if(result == 0 && points == -1 && teamID == 1){
            this.teamScore1 -= 1;
            return 0;
        }else if(result == 0 && points == 1 && teamID == 2){
            this.teamScore2 += 1;
            return 0;
        }else if(result == 0 && points == -1 && teamID == 2){
            this.teamScore2 -= 1;
            return 0;
        }
        return 1;
    }
    
    getGameID(){
        return this.gameID;
    }

    getTeamName1(){
        return this.team1;
    }

    getTeamName2(){
        return this.team2;
    }

    getDate(){
        return this.date;
    }

    getStartTime(){
        return this.startTime;
    }

    getTeamScore1(){
        return this.teamScore1;
    }

    getTeamScore2(){
        return this.teamScore2;
    }

    /*
    updateDate(newDate){
        this.date = newDate;
    }

    updateStartTime(newTime){
        this.startTime = newTime;
    }

    updateTeamScore1(newScore){
        this.teamScore1 = newScore;
    }

    updateTeamScore2(newScore){
        this.teamScore2 = newScore;
    }*/
}

 