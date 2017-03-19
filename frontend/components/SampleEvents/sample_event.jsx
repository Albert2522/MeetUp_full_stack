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
        <div className = "SampleEvent">
          <ul className="list-of-sample-events">
            {this.props.events.map( event => (
              <li className="sample-event-li" key={`${event.title} - ${event.id}`}>
              <Link to='/'>
                <div className="event-li" style={{backgroundImage: `url(${event.image_url})`}}>
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
