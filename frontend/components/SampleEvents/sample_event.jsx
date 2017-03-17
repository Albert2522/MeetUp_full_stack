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
    let background = "https://a248.e.akamai.net/secure.meetupstatic.com/photo_api/event/dt2737ffxffc600/sg19ee043d91/446920018.jpeg"
    let styles = {
      backgroundImage: `url(${background})`
    };
    if (this.props.events) {
      return (
        <div className = "SampleEvent">
          <ul className="list-of-sample-events">
            {this.props.events.map( event => (
              <li className="sample-event-li" key={`${event.title} - ${event.id}`}>
              <Link to='/'>
                <div className="event-li" style={styles}>
                  {event.title}
                </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }


}

export default SampleEvent;
