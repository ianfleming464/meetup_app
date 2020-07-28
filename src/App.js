import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  state = {
    events: [],
  };

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then((events) => this.setState({ events }));
  };

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
