import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    eventNumber: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input className="eventNumberInput" type="number" value={this.state.eventNumber} onChange={this.handleInputChanged} />
      </div>
    );
  }
}
