import React from 'react';
import { shallow } from 'enzyme';
import FormComponent from '../FormComponent';

describe('FormComponent', () => {
  it('updates input value and state correctly', () => {
    const wrapper = shallow(<FormComponent />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Testing' } });
    expect(wrapper.find('p').text()).toEqual('Typed value: Testing');
    expect(wrapper.find('input').prop('value')).toEqual('Testing');
  });
});
