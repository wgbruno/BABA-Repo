import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Home from '../../View/Home';

test("Home Screen", function (){
    const home_tree = renderer.create(<Home/>).toJSON();
    expect(home_tree).toMatchSnapshot();
})