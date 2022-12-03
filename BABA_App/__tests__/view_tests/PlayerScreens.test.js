import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import AddPlayerScreen from '../../View/Player/AddPlayerScreen';
import EditPlayerScreen from '../../View/Player/EditPlayerScreen';
import ViewAllPlayersScreen from '../../View/Player/ViewAllPlayersScreen';

test("Add Player Screen", function () {
    const ap_tree = renderer.create(<AddPlayerScreen/>).toJSON();
    expect(ap_tree).toMatchSnapshot();
});
test("Edit Player Screen", function () {
    const ep_tree = renderer.create(<EditPlayerScreen/>).toJSON();
    expect(ep_tree).toMatchSnapshot();
});
test("View All Players Screen", function () {
    const vap_tree = renderer.create(<ViewAllPlayersScreen/>).toJSON();
    expect(vap_tree).toMatchSnapshot();
});