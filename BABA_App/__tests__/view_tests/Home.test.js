import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Home from '../../View/Home';

test("Home Screen", function (){
    //const p1 = "Keenan Admin";
    //const p2 = "Admin";
    const home_tree = renderer.create(<Home /*navigation=*//>).toJSON();
    expect(home_tree).toMatchSnapshot();
});