import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  // Check that component is rendered
  test("render NumberOfEvents component", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  // Check that input for event number is rendered
  test("render input for event number", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  // Scenario 3.1 - default number of events is 32
  test("default event number is 32", () => {
    expect(NumberOfEventsWrapper.state("eventNumber")).toBe(32);
  });

  // Scenario 3.2 - change number of events (i.e. change state when event number is changed)
  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      eventNumber: 20,
    });
    const numberObject = { target: { value: 50 } };
    NumberOfEventsWrapper.find(".number-of-events").simulate("change", numberObject);
    expect(NumberOfEventsWrapper.state("eventNumber")).toBe(50);
  });
});
