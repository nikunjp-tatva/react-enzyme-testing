import React from 'react';
import { shallow } from 'enzyme';
import ListComponent from '../ListComponent';

describe('ListComponent', () => {
  it('renders a list with items', () => {
    const items = ['Apple', 'Banana', 'Orange'];
    const wrapper = shallow(<ListComponent items={items} />);
    expect(wrapper.find('li')).toHaveLength(items.length);
    items.forEach((item, index) => {
      expect(wrapper.find('li').at(index).text()).toEqual(item);
    });
  });

  it('renders an empty list when no items are provided', () => {
    const wrapper = shallow(<ListComponent items={[]} />);
    expect(wrapper.find('li')).toHaveLength(0);
  });
});
