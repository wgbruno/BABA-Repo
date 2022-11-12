import {expect, jest, test} from '@jest/globals';
import { Game } from '../Objects/GameCont';
import Realm, {createAccount, findAccount, changePassword, checkPassword, checkCode, addCode, removeAccount, removeAll, loggedIn, getAccountDB, findLoggedIn, loggedOff} from '../DAOs/AccountDao.js';

var game = null;
beforeEach(function(){
    game = new Game("Ballers", "Ringers", "11/20", "9", 10, 4);
})

test("Get Team 1 Info", function (){
    expect(game.getTeamName1()).toBe("Ballers");
    expect(game.getTeamScore1()).toBe(10);
})

test("Get Team 2 Info", function (){
    expect(game.getTeamName2()).toBe("Ringers");
    expect(game.getTeamScore2()).toBe(4);
})

test("Get Game Date", function (){
    expect(game.getDate()).toBe("11/20");
})

test("Get Game Time", function (){
    expect(game.getStartTime()).toBe("9");
})