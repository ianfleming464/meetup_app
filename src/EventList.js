import React, { Component } from "react";
import Event from "./Event";

export default class EventList extends Component {
  state = {
    events: [],
  };

  render() {
    return (
      <ul className="EventList">
        {this.state.events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}
