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
            {this.props.events.map( event => {
              const style = {
                backgroundImage: `url(${event.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              };
              return (
                <div key={`${event.title} - ${event.id}`}>
                  <Link to={`/events/${event.id}`}>
                  <div className="event-li" style={style}>
                    <p className="text-li">{event.title}</p>
                  </div>
                  </Link>
                </div>
              );
            })}
        </div>
      );
    } else {
      return null;
    }
  }


}

export default SampleEvent;
