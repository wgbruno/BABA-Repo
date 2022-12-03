import React from 'react';
import renderer from 'react-test-renderer';
import Playoffs from '../View/Playoffs';

test('renders correctly', () => {
  const tree = renderer.create(<Playoffs />).toJSON();
  expect(tree).toMatchSnapshot();
});