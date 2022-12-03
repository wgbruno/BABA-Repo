import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import EditTeam from '../../View/EditTeam';

test("Edit Team Screen", function (){
    const et_tree = renderer.create(<EditTeam/>).toJSON();
    expect(et_tree).toMatchSnapshot();
})