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

export function getAccountDB(_userName){
    var account = realm.objectForPrimaryKey("Account", _userName);
    return new Account(_userName, account['email'], account['password'], account['accountType'], account['verifyCode'], account['logStatus']);
}

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
            return 0;
        }
    }
    else{
        if(account != undefined){
            return 1;
        }
        else{
            return 0;
        }
    }
}

export function checkPassword(_userName, _password){
    var account = realm.objectForPrimaryKey("Account", _userName);
    if(account["password"] == _password){
        return 0;
    }
    return 1;
}

export function addCode(_userName, _code){
    realm.write(() => {
        var acc = realm.objectForPrimaryKey('Account',_userName);
        acc['verifyCode'] = _code;
    })
    if(realm.objectForPrimaryKey("Account", _userName)["verifyCode"] == _code){
        return 0;
    }
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
    })
    if(realm.objectForPrimaryKey("Account", _userName)["password"] == _newPassword){
        return 0;
    }
}

export function removeAccount(_userName){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        realm.delete(account);
    })
    if(findAccount(_userName, true)){
        return 0;
    }
}

export function removeAll(){
    realm.write(() => {
        realm.deleteAll();
    })
    if(realm.objects("Account").length == 0){
        return 0;
    }
}

export function loggedIn(_userName){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        account['logStatus'] = true;
    })
    if(realm.objectForPrimaryKey("Account", _userName)["logStatus"] == true){
        return 0;
    }
}

export function loggedOff(_userName){
    realm.write(() => {
        var account = realm.objectForPrimaryKey('Account', _userName);
        account['logStatus'] = false;
    })
    if(realm.objectForPrimaryKey("Account", _userName)["logStatus"] == false){
        return 0;
    }
}

export function findLoggedIn(){
    var account = realm.objects("Account").filtered('logStatus =='+true);
    console.log(account);
    if(account != undefined){
        return 0;
    } else{
        return 1;
    }
}

let realm = new Realm({schema: [AccountSchema], schemaVersion: 5});

export default realm;