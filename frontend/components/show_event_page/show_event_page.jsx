import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveEvent, createEvent, fetchEvent } from '../../actions/sample_events_action';
import { createRelationship } from '../../actions/images_actions';
import { getCategories } from '../../actions/categories_actions';
import { createMembership, deleteMembership } from '../../actions/memberships_actions';
import * as Selectors from '../../reducers/selectors.js';
import ImageUpploadForm from '../images/image_upload';
import {allImages} from '../../reducers/selectors';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: Selectors.arrayOfCategories(state),
  event: state.sampleEvents.event,
  eventId: ownProps.params.eventId
}};

const mapDispatchToProps = dispatch => ({
  receiveEvent: event => dispatch(receiveEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id)),
  createRelationship: img_rel => dispatch(createRelationship(img_rel)),
  createMembership: membership => dispatch(createMembership(membership)),
  deleteMembership: id => dispatch(deleteMembership(id))
});

class ShowEventPage extends React.Component {
  constructor (props) {
    super(props);
    this.membershipComponent = this.membershipComponent.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
    this.leaveEvent = this.leaveEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  componentWillReceiveProps(newProps) {
  }

  joinEvent(e) {
    e.preventDefault();
    let membership = {user_id: this.props.currentUser.id, event_id: this.props.eventId}
    this.props.createMembership(membership);
    this.props.fetchEvent(this.props.eventId);
  }

  leaveEvent(e) {
    e.preventDefault();
    let membership = {user_id: this.props.currentUser.id, event_id: this.props.eventId};
    this.props.deleteMembership(membership);
    this.props.fetchEvent(this.props.eventId);
  }

  membershipComponent() {
    let members_ids = [];
    this.props.event.members.forEach((member) => members_ids.push(member.id));
    if (members_ids.includes(this.props.currentUser.id)) {
      return (
        <button onClick = {this.leaveEvent}>Leave Event</button>
      );
    } else if (this.props.event.author.id === this.props.currentUser.id) {
      return null;
    } else {
      return (
        <button onClick = {this.joinEvent}>Join Event</button>
      );
    }
  }

  render() {
    let event = this.props.event
    if (this.props.event.id) {
      return (
        <div className="home_page">
          <div>Title - {event.title}</div>
          <div>Description - {event.description}</div>
          <div>Author - {event.author.email}</div>
          <div>
            Members:
            <ul>
              {event.members.map((user) => (
                <li key={`${user.email} - ${user.id}`}>{user.email}</li>
              ))}
            </ul>
          </div>
          <div>
            Images:
            <ul>
              {event.images.map((image) => (
                <li key={`${image.url} - ${image.id}`}><img src={image.url} alt="Should be image of event"/></li>
              ))}
            </ul>
          </div>
          {this.membershipComponent()}
          <Link to={`/user/${this.props.currentUser.id}`}>Back to User's profile</Link>
          {this.props.chidren}
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
)(withRouter(ShowEventPage));
