import {Alert} from 'react-native';
import AddAccountDao from '../DAOs/AddAccountDao.js';

export class Account{
    constructor(userName, email, password, accountID, accountType){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.accountID = accountID;
        this.accountType = accountType;
        
        //AddAccountDao();
    }
    //Get methods
    getAccount(){
        return [this.userName, this.email, this.password, this.accountID, this.accountType];
    }
    getUserName(){
        return this.userName;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getAccountID(){
        return this.accountID;
    }
    getAccountType(){
        return this.accountType;
    }
    //Set methods
    setUserName(newUserName){
        this.userName = newUserName;
    }
    setEmail(newEmail){
        this.email = newEmail;
    }
    setPassword(newPassword){
        this.password = newPassword;
    }
    setAccountID(newAccountID){
        this.accountID = newAccountID;
    }
    setAccountType(newAccountType){
        this.accountType = newAccountType;
    }
} 