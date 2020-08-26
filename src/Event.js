import React, { Component } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line, Tooltip } from "recharts";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // by default the full details aren't visible
      showDetails: false,
      events: [],
    };
  }

  handleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  getData = () => {
    const taken = this.props.event.yes_rsvp_count;
    const limit = this.props.event.rsvp_limit;
    const remaining = limit - this.props.event.yes_rsvp_count;

    return [
      { name: "Spots Taken", value: taken },
      { name: "Spots Remaining", value: remaining },
    ];
  };

  render() {
    const showDetails = this.state.showDetails;
    const event = this.props.event;
    let colors = ["#8884d8", "#82ca9d"];

    return (
      <div className="event">
        <p className="date">
          {event.local_date} - {event.local_time}
        </p>
        <p className="name">{event.name}</p>
        {event.group && event.group.name && <p className="group-name">Group: {event.group.name}</p>}
        {event.venue && event.venue.name && <p className="venue-name">Location: {event.venue.name}</p>}

        <button className="details-btn" onClick={this.handleShowDetails}>
          Details
        </button>

        {showDetails && (
          <div className="newDetails">
            {event.yes_rsvp_count && event.rsvp_limit ? (
              <ResponsiveContainer height={200}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={this.getData()}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    label
                  >
                    {this.getData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend verticalAlign="top" height={36}>
                    <Line name="Attending" type="monotone" dataKey="taken" stroke="#8884d8" />
                    <Line name="Spots Open" type="monotone" dataKey="remaining" stroke="#82ca9d" />
                  </Legend>
                </PieChart>
              </ResponsiveContainer>
            ) : null}

            <p className="description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
          </div>
        )}
      </div>
    );
  }
}
