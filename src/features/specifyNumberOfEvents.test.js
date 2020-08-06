import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

import { mockEvents } from "../mock-events";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number.", ({ given, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user hasn't entered a number", () => {});

    then("the default number of events is 32", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test("User can change the number of events they want to see.", ({ given, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the user specifies the number of events they want to see", () => {
      const numberObject = { target: { value: 69 } };
      AppWrapper.find(".number-of-events").simulate("change", numberObject);
    });

    then("the desired number of events are displayed", () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("eventNumber")).toBe(69);
    });
  });
});
