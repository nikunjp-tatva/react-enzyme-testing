import React from "react";
import { shallow } from "enzyme";
import LifecycleComponent from "../LifecycleComponent";
import axios from "axios";

jest.mock("axios");

describe("LifecycleComponent", () => {
  it("fetches data from API and renders correctly", async () => {
    const mockData = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    const wrapper = shallow(<LifecycleComponent />);

    // Initially, it should display 'Loading...'
    expect(wrapper.find("p").text()).toEqual("Loading...");

    // Wait for the axios request to resolve
    await new Promise((resolve) => setTimeout(resolve)); // Simulate asynchronous behavior

    wrapper.update();

    // After data is loaded, it should render the loaded data
    expect(wrapper.find("p").text()).toEqual(
      `Data loaded: ${JSON.stringify(mockData)}`
    );
  });

  it("handles error when fetching data", async () => {
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch data"));

    const wrapper = shallow(<LifecycleComponent />);

    // Initially, it should display 'Loading...'
    expect(wrapper.find("p").text()).toEqual("Loading...");

    // Wait for the axios request to reject
    await new Promise((resolve) => setTimeout(resolve)); // Simulate asynchronous behavior

    wrapper.update();

    // After handling error, it should render 'Data not loaded' again
    expect(wrapper.find("p").text()).toEqual("Data not loaded");
  });
});
