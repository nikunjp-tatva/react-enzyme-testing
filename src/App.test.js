import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('MyComponent', () => {
test('renders learn react link', () => {
  const component = shallow(<App debug/>);
  expect(component).toMatchSnapshot();
});
});