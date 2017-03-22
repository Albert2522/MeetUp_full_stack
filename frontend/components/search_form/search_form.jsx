import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { allGroups } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
  events: allGroups(state.searchRed.result.events),
  groups: allGroups(state.searchRed.result.groups)
}};

const mapDispatchToProps = dispatch => ({

});

class CategoryShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    if (true) {
      return (
        <div className="home_page">
          <div>
            Events:<br />
            <ul>
              {this.props.events.map((event) => (
                <li key={`${event.title} - ${event.id}`}>
                <Link to={`events/${event.id}`}>
                  {event.title}<br />
                <img src={event.image_url} alt="Should be the image of the event"/>
                </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            Groups:
            {this.props.groups.map((group) => (
              <li key={`${group.name} - ${group.id}`}><Link to={`/groups/${group.id}`} >
                {group.name}<br />
                <img src={group.image_url} alt="Image for group" />
                </Link>
              </li>
            ))}<br />
          </div>
          <button onClick={(e) => this.props.history.goBack()}>Back</button>
        </div>
      );
    } else {
      return null;
    }
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShowPage);
