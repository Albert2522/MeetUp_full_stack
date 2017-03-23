import React from 'react';
import { Link, withRouter } from 'react-router';

class SampleEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSampleEvents();
  }

  componentWillReceiveProps(newProps) {
    this.setState({events: newProps.events});
  }

  render() {
    if (this.props.events) {
      return (
        <div className = "scrollmenu">
            {this.props.events.map( event => (
              <div key={`${event.title} - ${event.id}`}>
                <Link to={`/events/${event.id}`}>
                <div className="event-li" style={{backgroundImage: `url(${event.image_url})`}}>
                  {event.title}
                </div>
                </Link>
              </div>
            ))}
        </div>
      );
    } else {
      return null;
    }
  }


}

export default SampleEvent;
