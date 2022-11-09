import {Alert, Linking} from 'react-native';
import AddAccountDao from '../DAOs/AccountDao.js';
import realm, {createAccount, findAccount, changePassword, checkPassword, checkCode, addCode} from '../DAOs/AccountDao.js';

export class Account{
    constructor(userName, email, password, accountType, verifyCode){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.verifyCode = verifyCode;
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
    sendEmail(){
        var code = Math.floor(1000 + Math.random() * 9000);
        this.verifyCode = code;
        let url = 'mailto:$'+this.email;
        let sub = '?subject=Email Verification for BABA';
        let message = '&body=This is your 4 digit verification code: '+code+' Please enter this code in app to verify your account.';
        url += sub;
        url += message;
        console.log(this.getAccount());
        if(addCode(this.userName, this.verifyCode)){
            console.log("Unable to add code to account.")
            return 1;
        }
        return Linking.openURL(url);
    }
    checkAccount(){
        return checkCode(this.userName, this.verifyCode);
    }
    newPassword(newPassword){
        return changePassword(this.userName, this.password, newPassword)
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