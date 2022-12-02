import { insertDBTeam, DBisEmpty, getAllDBTeams, getDBTeam, updateDBName, updateDBWins, updateDBLosses, updateDBSeed, deleteDBTeam, deleteAllDBTeams } from "../DAOs/TeamDao"
import {expect, test} from '@jest/globals';
import realm from "../DAOs/SchemaDao";

test('Delete all teams', function(){
    deleteAllDBTeams();
    expect(DBisEmpty());
})

let players = ['Ron', 'Harry', 'Hermione'];

test('Insert Teams', function(){
    insertDBTeam('testTeam1', 5, 0, 1, players);
    insertDBTeam('testTeam2', 0, 5, 3, players);
    insertDBTeam('testTeam3', 2, 3, 2, players);
})

test('Test all teams in realm', function(){
    let teams = getAllDBTeams();
    
})
/*
test('Get specific team', function(){
    let team = getDBTeam("testTeam2");
    expect(team.teamName).toBe("testTeam2");
    expect(team.wins).toBe(0);
    expect(team.losses).toBe(5);
    expect(team.seed).toBe(3);
    expect(team.players).toBe(['Ron', 'Harry', 'Hermione']);
})*/

test('Deleting Team', function(){
    deleteDBTeam('testTeam1');
    //deleteDBTeam('testTeam2');
    //deleteDBTeam('testTeam3');
})

test('Delete all teams', function(){
    deleteAllDBTeams();
    expect(DBisEmpty());
})