import {expect, jest, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import GameScoreScreen from '../../View/LiveScore/GameScoreScreen';

test("Live Score Screen", function () {
    const ls_tree = renderer.create(<GameScoreScreen/>).toJSON();
    expect(ls_tree).toMatchSnapshot();
});