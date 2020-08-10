import React, { Component } from "react";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // by default the full details aren't visible
      showDetails: false,
    };
  }

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const showDetails = this.state.showDetails;
    const event = this.props.event;

    return (
      <div className="event">
        <p className="date">
          {event.local_date} - {event.local_time}
        </p>
        <p className="name">{event.name}</p>
        {event.group && event.group.name && <p className="group-name">Group: {event.group.name}</p>}
        <p className="going">{event.yes_rsvp_count} people are going</p>
        <button className="details-btn" onClick={() => this.handleShowDetails()}>
          Details
        </button>
        {showDetails && (
          <div className="extra">
            <p className="description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
          </div>
        )}
      </div>
    );
  }
}
