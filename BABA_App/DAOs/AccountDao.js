import React, {useState} from "react";
import { Alert } from "react-native";
import realm from "./SchemaDao";
//import getRealm from './RealmConfig';
import { Account } from '../Objects/AccountCont';

export function getAccountDB(_userName){
    var account = realm.objectForPrimaryKey("Account", _userName);
    return new Account(_userName, account['email'], account['password'], account['accountType'], account['verifyCode'], account['logStatus'], account['playerID']);
}

//Creates account in DB, returns 0 on success, 1 on failure or duplicate username
export /*async*/ function createAccount(_userName, _email, _password){
    //try{
        //const realm = await getRealm();
        if(!(findAccount(_userName, false))){
            realm.write(() => {
                const account = realm.create('Account', {
                    primaryKey: _userName,
                    userName: _userName,
                    email: _email,
                    password: _password,
                    accountType: "Manager",
                    verifyCode: 0,
                    logStatus: false,
                    playerID: 0
                });
            });
            return 0;
        }
        else{
            return 1;
        }
    //} catch(error){
        //if(error){
            //console.log(error.message); 
        //}
    //}
}

export /*async*/ function findAccount(_userName, verify){
    //try{
        //const realm = await getRealm();
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
    //} catch(error){
        //if(error){
            //console.log(error.message); 
        //}
    //}
}

export /*async*/ function checkPassword(_userName, _password){
    //try{
        //const realm = await getRealm();
        var account = realm.objectForPrimaryKey("Account", _userName);
        console.log(account);
        if(account["password"] == _password){
            return 0;
        }
        return 1;
    //} catch(error){
        //if(error){
            //console.log(error.message); 
        //}
    //}
}

export /*async*/ function addCode(_userName, _code){
    //try{
        //const realm = await getRealm();
        realm.write(() => {
            var acc = realm.objectForPrimaryKey('Account',_userName);
            acc['verifyCode'] = _code;
        })
        if(realm.objectForPrimaryKey("Account", _userName)["verifyCode"] == _code){
            return 0;
        }
    //} catch(error){
        //if(error){
            //console.log(error.message); 
        //}
    //}
}

export /*async*/ function checkCode(_userName, _code){
    //try{
        //const realm = await getRealm();
        var acc = realm.objectForPrimaryKey('Account', _userName);
        if(acc['verifyCode'] == _code){
            return 0;
        }
        return 1;
    //} catch(error){
        //if(error){
            //console.log(error.message); 
        //}
    //}
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

export /*async*/ function removeAll(){
    //try{
        //const realm = await getRealm();
        realm.write(() => {
            realm.deleteAll();
        })
        if(realm.objects("Account").length == 0){
            return 0;
        }
    //} catch(error){
        //if(error){
            //console.log(error.message); 
        //}
    //}
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

export function getID(_userName){
    var account = realm.objectForPrimaryKey("Account", _userName);
    if(account['playerID'] != null){
        return account['playerID'];
    }else{
        return 1;
    }
}
