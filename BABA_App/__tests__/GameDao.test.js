import {expect, jest, test} from '@jest/globals';
import { Game } from '../Objects/GameCont';
import { DBisEmpty } from '../DAOs/GameDao.js'

test("Empty Database Detected", function (){
    expect(DBisEmpty).toBeTruthy();
})

test("Create a Game in Database", function (){
    let game = new Game("Ballers", "Ringers", "11/20", "9", 10, 4);
    expect(DBisEmpty).toBeFalsy();
})

/*
test("Get all Games from DB", function (){
    //need to figure this one out
    expect(DBisEmpty).toBeTruthy();
})*/

