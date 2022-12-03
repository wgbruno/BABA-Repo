import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import CreateGame from '../../View/AddGame';

test("New Game Screen", function (){
    const tree = renderer.create(<CreateGame/>).toJSON();
    expect(tree).toMatchSnapshot();
})