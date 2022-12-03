import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import RegisterTeam from '../../View/AddTeam';

test("Register New Team Screen", function (){
    const at_tree = renderer.create(<RegisterTeam/>).toJSON();
    expect(at_tree).toMatchSnapshot();
})