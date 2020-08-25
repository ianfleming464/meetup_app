import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

export default class NumberOfEvents extends Component {
  state = {
    eventNumber: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value <= 0) {
      this.setState({
        errorText: "Number should be at least 1!",
      });
      // alert("Look!");
    } else {
      this.setState({
        errorText: "",
      });
      this.setState({ eventNumber: value });
      this.props.updateEvents(null, null, value);
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
