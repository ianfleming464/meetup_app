import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      created: 1578988881000,
      duration: 10800000,
      id: "267900600",
      name: "München OutSystems Meetup - Save the date",
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1597248000000,
      local_date: "2020-08-12",
      local_time: "18:00",
      updated: 1578988881000,
      utc_offset: 7200000,
      waitlist_count: 0,
      yes_rsvp_count: 1,
      is_online_event: false,
      group: {
        created: 1560928375000,
        name: "Offizielle OutSystems München Meetup Gruppe",
        id: 32208133,
        join_mode: "open",
        lat: 48.13999938964844,
        lon: 11.579999923706055,
        urlname: "Munchen-OutSystems-Community",
        who: "Members",
        localized_location: "München, Germany",
        state: "",
        country: "de",
        region: "en_US",
        timezone: "Europe/Berlin",
      },
      link: "https://www.meetup.com/Munchen-OutSystems-Community/events/267900600/",
      description: "Das Thema wird in Kürze veröffentlicht.",
      visibility: "public",
      member_pay_fee: false,
    };
    EventWrapper = shallow(<Event event={event} />);
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
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  // Scenario 2.2 - Press button to see full details
  test("details button expands full details", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  // Scenario 2.3 - Press button to hide details
  test("details button expands full details", () => {
    expect(EventWrapper.setState({ showDetails: true }));
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
});
