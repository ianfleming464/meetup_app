import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { shallow, mount } from "enzyme";
import App from "../App";

import { mockEvents } from "../mock-events";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    when("the events are loaded", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
    });

    then("events details are collapsed/hidden by default", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details.", ({ given, and, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    and("the events are loaded", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockEvents.events.length);
    });

    when("the user clicks the details button", () => {
      AppWrapper.find(".details-btn").at(0).simulate("click");
    });

    then("event details are expanded", () => {
      expect(AppWrapper.find(".description")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details.", ({ given, and, when, then }) => {
    let AppWrapper;
    given("the app is loaded", () => {
      AppWrapper = mount(<App />);
    });

    and("the event details are expanded", () => {
      AppWrapper.update();
      AppWrapper.find(".details-btn").at(0).simulate("click");
      expect(AppWrapper.find(".description")).toHaveLength(1);
    });

    when("the user clicks the details button", () => {
      AppWrapper.find(".details-btn").at(0).simulate("click");
    });

    then("event details are collapsed/hidden", () => {
      expect(AppWrapper.find(".description")).toHaveLength(0);
    });
  });
});
