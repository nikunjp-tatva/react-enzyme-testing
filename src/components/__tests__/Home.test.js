// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  it('renders text correctly', () => {
    const wrapper = shallow(<Home text="Hello, World!" />);
    expect(wrapper.find('h1').text()).toEqual('Hello, World!');
  });
});
