import {expect, jest, test} from '@jest/globals';
import { Player } from '../Objects/PlayerCont';

var player = new Player(20, "Hunter", "Malone", 27, 21, "6ft1", 25,10,10,5,5,3,2,"Ballers");

test("Create Player", function(){
    expect(player.createPlayer()).toBe(0);
})

test("Get Team Name", function(){
    expect(player.getTeamName()).toBe("Ballers");
})

test("Get Profile", function(){
    expect(player.getProfile()).toStrictEqual("");
})

test("Get ID", function(){
    expect(player.getID()).toBe(20);
})

test("Get First Name", function(){
    expect(player.getFirstName()).toBe("Hunter");
})

test("Get Last Name", function(){
    expect(player.getLastName()).toBe("Malone");
})

test("Get Number", function(){
    expect(player.getNumber()).toBe(27);
})

test("Get Age", function(){
    expect(player.getAge()).toBe(21);
})

test("Get Height", function(){
    expect(player.getHeight()).toBe("6ft1");
})

test("Get Points", function(){
    expect(player.getPoints()).toBe(25);
})

test("Get Rebounds", function(){
    expect(player.getRebounds()).toBe(10);
})

test("Get Assists", function(){
    expect(player.getAssists()).toBe(10);
})

test("Get Blocks", function(){
    expect(player.getBlocks()).toBe(5);
})

test("Get Steals", function(){
    expect(player.getSteals()).toBe(5);
})

test("Get Fouls", function(){
    expect(player.getFouls()).toBe(3);
})

test("Get ID", function(){
    expect(player.getTurnovers()).toBe(2);
})