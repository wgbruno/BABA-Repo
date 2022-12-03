import {createAccount, findAccount, changePassword, checkPassword, checkCode, addCode, removeAccount, removeAll, loggedIn, getAccountDB, findLoggedIn, loggedOff, getID, changeTypeDB, getAccountTypeDB} from '../DAOs/AccountDao.js';
import {expect, jest, test} from '@jest/globals';
import { Account } from '../Objects/AccountCont.js';

test("Create Account", function (){
    expect(createAccount("TestName1", "TestEmail1", "TestPassword1")).toBe(0);
    expect(createAccount("TestName1", "TestEmail1", "TestPassword1")).toBe(1);
})

test("Get Account", function (){
    createAccount("TestName2", "TestEmail2", "TestPassword2");
    let account = new Account("TestName2", "TestEmail2", "TestPassword2", null, 0, false);
    expect(getAccountDB("TestName2")).toStrictEqual(account);
})

test("Find Account", function (){
    createAccount("TestName3", "TestEmail3", "TestPassword3");
    expect(findAccount("TestName3", true)).toBe(0);
    expect(findAccount("Invalid", false)).toBe(0);
    expect(findAccount("Invalid", true)).toBe(1);
    expect(findAccount("TestName3", false)).toBe(1);
})

test("Check Password", function (){
    createAccount("TestName4", "TestEmail4", "TestPassword4");
    expect(checkPassword("TestName4", "TestPassword4")).toBe(0);
    expect(checkPassword("TestName4", "Invalid")).toBe(1);
})

test("Add Code", function (){
    createAccount("TestName5", "TestEmail5", "TestPassword5");
    expect(addCode("TestName5", 1234)).toBe(0);
})

test("Check Code", function (){
    expect(checkCode("TestName5", 1234)).toBe(0);
    expect(checkCode("TestName5", 5678)).toBe(1);
})

test("Change Password", function (){
    createAccount("TestName6", "TestEmail6", "TestPassword6");
    expect(changePassword("TestName6", "NewPassword")).toBe(0);
})

test("Remove Account", function (){
    createAccount("TestName7", "TestEmail7", "TestPassword7");
    expect(removeAccount("TestName7")).toBe(0);
})

test("Delete All", function (){
    expect(removeAll()).toBe(0);
})

test("Log In", function (){
    createAccount("TestName8", "TestEmail8", "TestPassword8");
    expect(loggedIn("TestName8")).toBe(0);
})

test("Log Off", function (){
    expect(loggedOff("TestName8")).toBe(0);
})

test("Find Logged In", function (){
    createAccount("TestName9", "TestEmail9", "TestPassword9");
    expect(findLoggedIn()).toBe(0);
    loggedIn("TestName9");
    expect(findLoggedIn()).toBe(1);
})

test("Get Player ID", function(){
    expect(getID("TestName9")).toBe(0);
})

test("Change Account Type", function(){
    expect(changeTypeDB("TestName9")).toBe(0);
})

test("Get Account Type", function(){
    expect(getAccountTypeDB("TestName9")).toBe("Manager");
})