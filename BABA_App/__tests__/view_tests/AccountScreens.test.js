import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import DeleteAccountScreen from '../../View/Account/DeleteAccount/DeleteAccount';
import ForgotPasswordScreen from '../../View/Account/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../../View/Account/NewPasswordScreen/NewPasswordScreen';
import SignInScreen from '../../View/Account/SignInScreen/SignInScreen';
import SignUpScreen from '../../View/Account/SignUpScreen/SignUpScreen';

test("Delete Account Screen", function (){
    const das_tree = renderer.create(<DeleteAccountScreen/>).toJSON();
    expect(das_tree).toMatchSnapshot();
});

test("Forgot Password Screen", function (){
    const fps_tree = renderer.create(<ForgotPasswordScreen/>).toJSON();
    expect(fps_tree).toMatchSnapshot();
});

test("New Password Screen", function (){
    const nps_tree = renderer.create(<NewPasswordScreen/>).toJSON();
    expect(nps_tree).toMatchSnapshot();
});

test("Sign In Screen", function (){
    const sis_tree = renderer.create(<SignInScreen/>).toJSON();
    expect(sis_tree).toMatchSnapshot();
});

test("Sign Up Screen", function (){
    const sus_tree = renderer.create(<SignUpScreen/>).toJSON();
    expect(sus_tree).toMatchSnapshot();
});