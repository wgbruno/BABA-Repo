import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import ViewAllTeams from '../../View/ViewAllTeams';


test("View All Teams Screen", function (){
    const temp = renderer.create(<ViewAllTeams/>).toJSON();
    expect(temp).toMatchSnapshot();
})