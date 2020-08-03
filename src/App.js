import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";

class App extends Component {
  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
  };

  componentDidMount() {
    this.updateEvents();
  }
  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((events) => this.setState({ events, lat, lon }));
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((events) => this.setState({ events, page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then((events) => this.setState({ events }));
    }
  };

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} />
      </div>
    );
  }
}

export default App;
