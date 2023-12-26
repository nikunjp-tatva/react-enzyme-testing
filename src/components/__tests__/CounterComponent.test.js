import React from "react";
import { shallow } from "enzyme";
import CounterComponent from "../CounterComponent";

describe("CounterComponent", () => {

  it("renders with initial count of 0", () => {
    const wrapper = shallow(<CounterComponent />);
    const countText = wrapper.find("p").text();
    expect(countText).toEqual("Count: 0");
  });

  it("increments count when the Increment button is clicked", () => {
    const wrapper = shallow(<CounterComponent />);
    const incrementButton = wrapper.find("button").at(0);
    incrementButton.simulate("click");
    const countText = wrapper.find("p").text();
    expect(countText).toEqual("Count: 1");
  });

  it("decrements count when the Decrement button is clicked", () => {
    const wrapper = shallow(<CounterComponent />);
    const decrementButton = wrapper.find("button").at(1);
    decrementButton.simulate("click");
    const countText = wrapper.find("p").text();
    expect(countText).toEqual("Count: -1");
  });

  it('increments and decrements count properly', () => {
    const wrapper = shallow(<CounterComponent />);
    let count = wrapper.find('p').text().split(' ')[1]; // Get the count value as a number
    expect(Number(count)).toEqual(0);
    
    wrapper.find('button').at(0).simulate('click'); // Increment
    count = wrapper.find('p').text().split(' ')[1];
    expect(Number(count)).toEqual(1);
    
    wrapper.find('button').at(1).simulate('click'); // Decrement
    count = wrapper.find('p').text().split(' ')[1];
    expect(Number(count)).toEqual(0);
  });
});
