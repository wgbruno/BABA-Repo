import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import FreeAgentScreen from '../../View/Manager/FreeAgentScreen';
import ManagerHomeScreen from '../../View/Manager/ManagerHomeScreen';
import RequestManagerScreen from '../../View/Manager/RequestManagerScreen';
import SendTeamRequestScreen from '../../View/Manager/SendTeamRequestScreen';

test("Free Agent Screen", function () {
    const fa_tree = renderer.create(<FreeAgentScreen/>).toJSON();
    expect(fa_tree).toMatchSnapshot();
});
test("Manager Home Screen", function () {
    const tree = renderer.create(<ManagerHomeScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
test(" Screen", function () {
    const tree = renderer.create(<RequestManagerScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
test("Free Agent Screen", function () {
    const tree = renderer.create(<SendTeamRequestScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});