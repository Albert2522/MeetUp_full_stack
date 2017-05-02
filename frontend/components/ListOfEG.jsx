import React from 'react';
import { Link } from 'react-router';

export default class ListOfEG extends React.Component {

  constructor(props) {
    super(props)
    this.state = {data: props.data, type: props.type}
  }



  render() {
    if (this.state.type !== "" && this.state.data.length !== 0) {
      console.log(this.state.data);
      let name = this.state.type == "events" ? "title" : "name"
      return (
        <div className = "scrollmenu">
            {this.state.data.map( event => {
              const style = {
                backgroundImage: `url(${event.image_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              };
              return (
                <div key={`${event[name]} - ${event.id}`}>
                  <Link to={`/events/${event.id}`}>
                  <div className= "event-li" style={style}>
                    <span className="text-li">
                      {event[name]}
                    </span>
                  </div>
                  </Link>
                </div>
              );
            })}
        </div>
      )
    } else {
      return (
        <span>
          Nothing to show
        </span>
      );
    }
  }
}
