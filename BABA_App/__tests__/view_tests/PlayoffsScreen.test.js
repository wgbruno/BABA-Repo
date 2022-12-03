import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import Playoff from '../../View/Playoffs';

test("Playoff Schedule Screen", function () {
    const ps_tree = renderer.create(<Playoff/>).toJSON();
    expect(ps_tree).toMatchSnapshot();
});