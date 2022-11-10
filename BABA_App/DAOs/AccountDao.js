import React from "react";
import { Alert } from "react-native";
import Realm from "realm";
import { Account } from '../Objects/AccountCont';

class AccountSchema extends Realm.Object {}
AccountSchema.schema = {
    name: 'Account',
    primaryKey: 'userName',
    properties:{
        userName: 'string',
        email: 'string',
        password: 'string',
        accountType: 'string?',
        verifyCode: 'int',
        logStatus: 'bool'
    }
};

//Creates account in DB, returns 0 on success, 1 on failure or duplicate username
export function createAccount(_userName, _email, _password){
    if(!(findAccount(_userName, false))){
        realm.write(() => {
            const account = realm.create('Account', {
                primaryKey: _userName,
                userName: _userName,
                email: _email,
                password: _password,
                verifyCode: 0,
                logStatus: false
            });
        });
        return 0;
    }
    else{
        return 1;
    }
}

export function findAccount(_userName, verify){
    var account = realm.objectForPrimaryKey("Account", _userName);
    if(verify){
        if(account == undefined){
            return 1;
        }
        else{
            console.log("Found matching account");
            return 0;
        }
    }
    else{
        if(account != undefined){
            return 1;
        }
        else{
            console.log("Unique Username");
            return 0;
        }
    }
}

export function checkPassword(_userName, _password){
    var correctLogin = realm.objectForPrimaryKey('Account', _userName);
    if(correctLogin['password'] == _password){
        return 0
    }
    else{
        return 1;
    }
}

export function addCode(_userName, _code){
    realm.write(() => {
        var acc = realm.objectForPrimaryKey('Account',_userName);
        acc['verifyCode'] = _code;
    })
}

export function checkCode(_userName, _code){
    var acc = realm.objectForPrimaryKey('Account', _userName);
    if(acc['verifyCode'] == _code){
        return 0;
    }
    return 1;
}

export function changePassword(_userName, _newPassword){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        account['password'] = _newPassword;
        console.log(account);
        return 0;
    })
}

export function removeAccount(_userName){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        realm.delete(account);
        return 0;
    })
}

export function removeAll(){
    realm.write(() => {
        realm.deleteAll();
        return 0;
    })
}

export function loggedIn(_userName){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        console.log(account);
        account['logStatus'] = true;
        return 0;
    })
}

export function loggedOff(_userName){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        account['logStatus'] = false;
        return 0;
    })
}

export function findLoggedIn(){
    var account = realm.objects("Account").filtered('logStatus == true');
    if(account == undefined || account.length > 1){
        console.log("Error finding logged in account");
        return 1;
    } else{
        console.log("Account correctly logged in");
        return 0;
    }
}

export function findPassword(_userName){
    var account = realm.objectForPrimaryKey("Account", _userName);
    return new Account(_userName, account['email'], account['password']);
}

let realm = new Realm({schema: [AccountSchema], schemaVersion: 5});

export default realm;