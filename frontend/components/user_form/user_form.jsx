import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { updateUser, fetchUser } from '../../actions/user_editing_actions';
import { getCategories } from '../../actions/categories_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  user: state.userEdit.user,
  errors: state.userEdit.errors,
}};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user))
});


class userPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(newProps) {
  }


  render() {
    if (this.props.user.groups_created) {
      return (
        <div>
          <h1>Hi {this.props.user.email}!</h1>
          <Link to={`/user/${this.props.currentUser.id}/change_password`}>Change password</Link>
          <div> Joined groups: <br />
          </div>
          <div>
            Joined Events:
          </div>
          <div className= "scrollmenu">
            {this.props.user.events.map((event) => (
              <div key={`${event.title} - ${event.id}`}>
                <Link to={`/events/${event.id}`}>
                <div className="event-li" style={{backgroundImage: `url(${event.image_url})`}}>
                  {event.title}
                </div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            Created Groups:
            {this.props.user.groups_created.map((group) => (
              <li key={`${group.name} - ${group.id}`}><Link to={`/groups/${group.id}`} >
                {group.name}<br />
            <img src={group.image_url} alt="Image for group" />
            </Link>
              </li>
            ))}<br />
            <Link to={`/user/${this.props.currentUser.id}/create_group`}>Create Group</Link>
          </div>
          <div> Created Events:
          </div>
          <div className="scrollmenu">
            {this.props.user.events_created.map((event) => (
              <div key={`${event.title} - ${event.id}`}>
                <Link to={`/events/${event.id}`}>
                <div className="event-li" style={{backgroundImage: `url(${event.image_url})`}}>
                  {event.title}
                </div>
                </Link>
              </div>
            ))}
          </div>

          { this.props.children }
        </div>
      );
    } else {
      return null;
    }
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(userPage));
