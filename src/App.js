import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then((events) => this.setState({ events }));
  };

  componentDidMount() {
    this.updateEvents(null, null);
  }

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
