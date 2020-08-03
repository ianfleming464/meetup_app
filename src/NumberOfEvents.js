import React, { Component } from "react";

export default class NumberOfEvents extends Component {
  state = {
    eventNumber: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });
    this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <span>Display </span>
        <input className="number-of-events" type="number" value={this.state.eventNumber} onChange={this.handleInputChanged} />
        <span> events</span>
      </div>
    );
  }
}
