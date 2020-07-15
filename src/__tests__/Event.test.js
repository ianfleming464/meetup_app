import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  // Given the event list is loaded..
  test("test for event container", () => {
    expect(EventWrapper.find(".eventContainer")).toHaveLength(1);
  });

  test("test for actual event", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  // Scenario 2.1 - Hidden by default
  test("details minimised by default", () => {
    expect(EventWrapper.state("showDetails")).toBe(false);
  });

  // Check for presence of 'Details' button
  test("details toggle button present", () => {
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  // Scenario 2.2 - Press button to see full details
  test("details button expands full details", () => {
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  // Scenario 2.3 - Press button to hide details
  test("details button expands full details", () => {
    expect(EventWrapper.setState({ showDetails: true }));
    EventWrapper.find(".details").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
});
