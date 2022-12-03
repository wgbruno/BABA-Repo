import {expect, jest, test} from '@jest/globals';
import { Player } from '../Objects/PlayerCont';
import { addPlayerDB, getFirstNameDB, getLastNameDB, getNewIDDB, getTeam, findPlayer } from '../DAOs/PlayerDao';
import realm from "../DAOs/SchemaDao";

test("Create Player", function (){
    expect(addPlayerDB(10, "Hunter", "Malone", 27, 21, "6ft1")).toBe(0);
})

test("Get First Name", function (){
    expect(getFirstNameDB(10)).toBe("Hunter");
})

test("Get Last Name", function (){
    expect(getLastNameDB(10)).toBe("Malone");
})

test("Get New ID", function (){
    expect(getNewIDDB()).toBe(realm.objects('Player').length + 1);
})

test("Get Team Name", function (){
    expect(getTeam(10)).toBe("Free Agent");
})

test("Find Player", function(){
    expect(findPlayer(11)).toBe(1);
    addPlayerDB(11, "Hunter", "Malone", 27, 21, "6ft1");
    expect(findPlayer(11)).toBe(0);
})

