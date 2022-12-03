import {expect, jest, test} from '@jest/globals';
import { Game } from '../Objects/GameCont';
import { DBisEmpty, deleteAllDBGames, getGameDB } from '../DAOs/GameDao.js'

test("Create a Game in Database", function (){
    let game = new Game("Ballers", "Ringers", "11/20", "9", 10, 4);
})


test('Get specific game', function(){
    let game = getGameDB();
    expect(game.team1Name).toBe("testTeam2");
    expect(team.team2Name).toBe(0);
    expect(team.losses).toBe(5);
    expect(team.seed).toBe(3);
    expect(team.players).toBe(['Ron', 'Harry', 'Hermione']);
})

test("Delete all games in Database", function (){
    deleteAllDBGames();
})

test("Empty Database Detected", function (){
    expect(DBisEmpty()).toBeTruthy();
})

/*
test("Get all Games from DB", function (){
    //need to figure this one out
    expect(DBisEmpty).toBeTruthy();
})*/


