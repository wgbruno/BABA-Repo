import React from 'react';
import renderer from 'react-test-renderer';
import ViewAllPlayersScreen from '../View/Player/ViewAllPlayersScreen';

test('renders correctly', () => {
  const tree = renderer.create(<ViewAllPlayersScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});