import {expect, jest, test} from '@jest/globals';
import { Account } from '../Objects/AccountCont.js';

var account = new Account("TestName", "TestEmail", "TestPassword", null, 0, false);

test("Create Account", function (){
    expect(account.create()).toBe(0);
})

test("Search Account", function (){
    expect(account.search()).toBe(0);
})

test("Password Check", function (){
    expect(account.passCheck()).toBe(0);
})

test("Send Email", function (){
    expect(account.sendEmail()).toBe(undefined);
})

test("Confirm Account", function (){
    addCode('TestName', 123);
    expect(account.checkAccount(12)).toBe(1);
    expect(account.checkAccount(123)).toBe(0);
})

test("New Password", function (){
    expect(account.newPassword("NewPassword")).toBe(0);
})

test("Delete Account", function (){
    expect(account.deleteAccount("TestName")).toBe(0)
})

test("Login Account", function (){
    account.create();
    expect(account.logInAccount()).toBe(0);
})

test("Send Password", function (){
    expect(account.sendPassword()).toBe(undefined);
})

test("Get this Account", function (){
    var test = new Account("TestName", "TestEmail", "TestPassword", null, 0, true);
    expect(account.getAccount()).toStrictEqual(test);
})

test("Set Account", function (){
    var test2 = new Account("TestName1", "TestEmail1", "TestPassword1", null, 0, false)
    expect(account.setAccount("TestName1", "TestEmail1", "TestPassword1", null, 0, false)).toBe(0);
    expect(account.getAccount()).toStrictEqual(test2);
})

test("Delete All", function (){
    expect(account.deleteAll()).toBe(0);
})

test("Get Player ID", function(){
    expect(account.getPlayerID()).toBe(0);
})

test("Change Type", function(){
    expect(account.changeType()).toBe(0);
})

test("Get Type", function(){
    expect(account.getAccountType()).toBe("Free Agent");
})