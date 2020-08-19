import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";
import { OfflineAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    offlineText: "",
  };

  componentDidMount() {
    this.updateEvents();
  }
  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ offlineText: "Currently offline. Events loaded from last search." });
    } else {
      this.setState({ offlineText: "" });
    }
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
        <NumberOfEvents updateEvents={this.updateEvents} />
        <div className="alerts">
          <OfflineAlert text={this.state.offlineText} />
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
