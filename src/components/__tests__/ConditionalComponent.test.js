import React from 'react';
import { shallow } from 'enzyme';
import ConditionalComponent from '../ConditionalComponent';

describe('ConditionalComponent', () => {
  it('renders content when condition is true', () => {
    const wrapper = shallow(<ConditionalComponent condition={true} />);
    expect(wrapper.find('p').text()).toEqual('True');
  });

  it('renders different content when condition is false', () => {
    const wrapper = shallow(<ConditionalComponent condition={false} />);
    expect(wrapper.find('p').text()).toEqual('False');
  });
});
