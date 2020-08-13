import React, { Component } from "react";
import { getSuggestions } from "./api";
import { InfoAlert } from "./Alert";

export default class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then((suggestions) => {
      this.setState({ suggestions });
      if (value && suggestions.length === 0) {
        this.setState({
          infoText: "We cannot find the city you are searching for. Please try again!",
        });
      } else {
        this.setState({
          infoText: "",
        });
      }
    });
  };

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  };

  render() {
    return (
      <div className="CitySearch">
        <input type="text" className="city" placeholder="city" value={this.state.query} onChange={this.handleInputChanged} />
        <div className="alerts">
          <InfoAlert text={this.state.infoText} />{" "}
        </div>
        <ul className="suggestions">
          {this.state.suggestions.map((item) => (
            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>
              {item.name_string}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
