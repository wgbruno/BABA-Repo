import {Alert} from 'react-native';
import AddAccountDao from '../DAOs/AccountDao.js';
import realm, {createAccount, findAccount, changePassword, checkPassword} from '../DAOs/AccountDao.js';

export class Account{
    constructor(userName, email, password, accountType){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
    }
    //Creates account in DB, returns 0 on success, 1 on failure or duplicate username
    create(){
        return createAccount(this.userName, this.email, this.password);
    }
    update(){

    }
    //Finds an account in DB based on username, returns 0 on success, 1 on failure
    search(){
        return findAccount(this.userName, true);
    }
    passCheck(){
        return checkPassword(this.userName, this.password);
    }
    confirmEmail(){
        Email
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