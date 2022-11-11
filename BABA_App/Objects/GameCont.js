import GameDao from '../DAOs/GameDao.js';

export class Game{
    constructor(teamName1, teamName2, date, tipoff, teamScore1, teamScore2){
        this.team1 = teamName1;
        this.team2 = teamName2;
        this.date = date;
        this.startTime = tipoff;
        this.teamScore1 = teamScore1;
        this.teamScore2 = teamScore2;

        CreateGame(navigation, this.getGameProfile);
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
    }
}

 