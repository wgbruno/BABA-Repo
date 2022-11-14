import {Alert, Linking} from 'react-native';
import {createAccount, findAccount, changePassword, checkPassword, checkCode, addCode, removeAccount, removeAll, loggedIn, getAccountDB, AddAccountDB, findPassword} from '../DAOs/AccountDao';

export class Account{
    constructor(userName, email, password, accountType, verifyCode, logStatus){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.verifyCode = verifyCode;
        this.logStatus = logStatus
    }
    //Creates account in DB, returns 0 on success, 1 on failure or duplicate username
    create(){
        return createAccount(this.userName, this.email, this.password);
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
        let url = 'mailto:'+this.email;
        let sub = '?subject=Email Verification for BABA';
        let message = '&body=This is your 4 digit verification code: '+code+' Please enter this code in app to verify your account.';
        url += sub;
        url += message;
        addCode(this.userName, code)
        return Linking.openURL(url);
    }
    checkAccount(code){
        return checkCode(this.userName, code);
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
        var account = getAccountDB(this.userName);
        let url = 'mailto:'+account.email;
        let sub = '?subject=BABA Account Password';
        let message = '&body=This is your account password for BABA: '+account.password;
        url += sub;
        url += message;
        return Linking.openURL(url);
    }
    //Get method
    getAccount(){
        return getAccountDB(this.userName);
    }

    //Set method
    setAccount(_userName, _email, _password, _accountType, _verifyCode, _logStatus){
        removeAccount(this.userName);
        this.userName = _userName;
        this.email = _email;
        this.password = _password;
        this.accountType =_accountType;
        this.verifyCode = _verifyCode;
        this.logStatus = _logStatus;
        return createAccount(this.userName, this.email, this.password);
    }
} 