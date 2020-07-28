import React, { Component } from "react";
import Event from "./Event";

export default class EventList extends Component {
  render() {
    return (
      <ul className="EventList">
        {this.props.events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}
