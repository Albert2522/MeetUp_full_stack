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
  categories: state.categoriesRed.categories,
  event: state.sampleEvents.event,
  eventId: ownProps.params.eventId,
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
        <button className="group-header-join-btn" onClick = {this.leaveEvent}>Not Going!</button>
      );
    } else if (this.props.event.author.id === this.props.currentUser.id) {
      return null;
    } else {
      return (
        <button className="group-header-join-btn" onClick = {this.joinEvent}>Going!</button>
      );
    }
  }

  photosComponent(event) {
    if (event.images.length !== 0) {
      return (
        <div className="event-photos">
          <h3 className="organizer">Event photos:</h3>
          <nav>
            <ul id="nav-ul" className="ul-event-images">
              {event.images.map((image) => (
                <li key={`${image.url} - ${image.id}`}><img className="image1" src={image.url} alt="Should be image of event"/></li>
              ))}
            </ul>
          </nav>
        </div>
      );
    } else {
      return null
    }
  }

  render() {
    let event = this.props.event;
    console.log(event);
    if (this.props.event.id) {
      let data = event.data.toString();
      let date = data.substring(0, 10);
      let time = data.substring(11, 16);
      data = date + ' ' + time;
      return (
        <div style={{backgroundColor: "#fafafa"}}>
          <div className="group-header">
            <div className="group-header-name-container">
              <h1 className="group-header-name">{event.title}</h1>
            </div>
            <nav className="group-header-nav">
              <ul className="group-header-nav ul">
                <li id="li-button-back">
                  <button className="group-header-join-btn" onClick={(e) => this.props.history.goBack()}>Back</button>
                </li>
                <li id="li-button-going">
                  {this.membershipComponent()}
                </li>
              </ul>
            </nav>
          </div>
          <div className="group-information-container">
            <div className="group-info">
              <img className="image" src={event.image_url} />
              <h3 className="location">Location: {event.location}</h3>
              <h3 className="founded_on">Event date: {data}</h3>
              <p className="num-huddles">Going: {event.members.length}</p>
              <h3 className="organizer">Organizer:</h3>
              <div className="organizer-container">
                <h4>{event.author.email}</h4>
              </div>
              {this.photosComponent(event)}
            </div>
            <div className="group-description-container">
              <div className="description">{event.description}</div>
            </div>
            <div className="right-side-bar">
              <h3>Going:</h3>
              <div className="vertical-scrollbar">
                <ul>
                  {event.members.map((user) => (
                    <li key={`${user.email} - ${user.id}`}>{user.email}</li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
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
