import React from "react";
import { Alert } from "react-native";
import Realm from "realm";

class AccountSchema extends Realm.Object {}
AccountSchema.schema = {
    name: 'Account',
    primaryKey: 'userName',
    properties:{
        userName: 'string',
        email: 'string',
        password: 'string',
        accountType: 'string?'
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
                password: _password
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
    if(realm.objects("Account").filtered('password == $0', _password)){
        return 0;
    } else{
        return 1;
    }
}

export function changePassword(_username, _password){

}


let realm = new Realm({schema: [AccountSchema], schemaVersion: 1});

export default realm;