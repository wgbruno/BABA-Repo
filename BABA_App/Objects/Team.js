import { Player } from '/Player.js';
export class Team {
    constructor(teamName, record, seed, players){
        this.teamName = teamName;
        this.record = record;
        this.seed = seed;
        this.players = players;
    }
}