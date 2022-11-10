import {Alert, Linking} from 'react-native';
import AddAccountDao, { findPassword } from '../DAOs/AccountDao.js';
import realm, {createAccount, findAccount, changePassword, checkPassword, checkCode, addCode, removeAccount, removeAll, loggedIn, sendPassword} from '../DAOs/AccountDao.js';

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
<<<<<<< Updated upstream
    sendEmail(){
        var code = Math.floor(1000 + Math.random() * 9000);
        this.verifyCode = code;
        let url = 'mailto:'+this.email;
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
        return changePassword(this.userName, newPassword)
    }
    deleteAccount(){
        return removeAccount(this.userName);
    }
    deleteAll(){
        return removeAll();
    }
    logInAccount(){
        return loggedIn(this.userName);
    }
    sendPassword(){
        var account = findPassword(this.userName);
        let url = 'mailto:'+account.email;
        let sub = '?subject=BABA Account Password';
        let message = '&body=This is your account password for BABA: '+account.password;
        url += sub;
        url += message;
        console.log(account.getAccount());
        return Linking.openURL(url);
    }
=======
>>>>>>> Stashed changes
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