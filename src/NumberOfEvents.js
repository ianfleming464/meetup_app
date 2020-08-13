import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

export default class NumberOfEvents extends Component {
  state = {
    eventNumber: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });
    this.setState({ errorText: "" });

    if (value < 1) {
      this.setState({
        errorText: "Event number must be a valid number. Please try again!",
      });
    } else {
      this.props.updateEvents(null, null, value);
      this.setState({
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <span>Events: </span>
        <input className="number-of-events" type="number" value={this.state.eventNumber} onChange={this.handleInputChanged} />
        <div className="alerts">
          <ErrorAlert text={this.state.errorText} />
        </div>
      </div>
    );
  }
}
