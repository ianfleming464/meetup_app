import React, { Component } from "react";

export default class Event extends Component {
  state = {
    // by default the full details aren't visible
    showDetails: false,
    // state populated with mock data
    events: [
      // {
      //   created: 1594736289000,
      //   duration: 10800000,
      //   id: "271919061",
      //   name: "In-Person get together for IT freelancers",
      //   rsvp_limit: 20,
      //   date_in_series_pattern: false,
      //   status: "upcoming",
      //   time: 1595262600000,
      //   local_date: "2020-07-20",
      //   local_time: "18:30",
      //   updated: 1594813978000,
      //   utc_offset: 7200000,
      //   waitlist_count: 0,
      //   yes_rsvp_count: 1,
      //   venue: {
      //     id: 26618511,
      //     name: "Velvet Space",
      //     lat: 48.15055847167969,
      //     lon: 11.57834243774414,
      //     repinned: true,
      //     address_1: "Amalienstraße 71, RGB",
      //     city: "München",
      //     country: "de",
      //     localized_country_name: "Germany",
      //   },
      //   is_online_event: false,
      //   group: {
      //     created: 1533499918000,
      //     name: "IT Freelancers Network Developers/Designers/Product Munich",
      //     id: 29450427,
      //     join_mode: "open",
      //     lat: 48.13999938964844,
      //     lon: 11.579999923706055,
      //     urlname: "IT-Freelancers-Network-Munich",
      //     who: "Mitglieder",
      //     localized_location: "München, Germany",
      //     state: "",
      //     country: "de",
      //     region: "en_US",
      //     timezone: "Europe/Berlin",
      //   },
      //   link: "https://www.meetup.com/IT-Freelancers-Network-Munich/events/271919061/",
      //   description:
      //     "<p>Let's have an informal in-person exchange about dev, freelance and tech. We meet at the beautiful Velvet Space Co-Working and if the weather allows it have an outside table. The ticket has a price because of current attendee number limitation to prevent no-shows. The money will be spent on food or returned when you attend</p> ",
      //   visibility: "public",
      //   member_pay_fee: false,
      // },
    ],
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const showDetails = this.state.showDetails;
    const event = this.props.event;
    console.log(this.props);

    return (
      <div className="event">
        <p className="date">
          {event.local_date} - {event.local_time}
        </p>
        <p className="name">{event.name}</p>
        <p className="group">Group: {event.group.name}</p>
        <p className="going">{event.yes_rsvp_count} people are going</p>
        <button className="details-btn" onClick={() => this.handleShowDetails()}>
          Details
        </button>
        {showDetails && (
          <div className="event_details">
            <p className="event_description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}
