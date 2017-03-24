import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveGroup, createGroup, fetchGroup } from '../../actions/groups_actions';
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
  group: state.groupsRed.group,
  groupId: ownProps.params.groupId
}};

const mapDispatchToProps = dispatch => ({
  receiveGroup: group => dispatch(receiveGroup(group)),
  fetchGroup: id => dispatch(fetchGroup(id)),
  createRelationship: img_rel => dispatch(createRelationship(img_rel)),
  createMembership: membership => dispatch(createMembership(membership)),
  deleteMembership: id => dispatch(deleteMembership(id))
});

class ShowGroupPage extends React.Component {
  constructor (props) {
    super(props);
    this.membershipComponent = this.membershipComponent.bind(this);
    this.joinGroup = this.joinGroup.bind(this);
    this.leaveGroup = this.leaveGroup.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);
  }

  componentWillReceiveProps(newProps) {
  }

  joinGroup(e) {
    e.preventDefault();
    let membership = {user_id: this.props.currentUser.id, group_id: this.props.groupId}
    this.props.createMembership(membership);
    this.props.fetchGroup(this.props.groupId);
  }

  leaveGroup(e) {
    e.preventDefault();
    let membership = {user_id: this.props.currentUser.id, group_id: this.props.groupId};
    this.props.deleteMembership(membership);
    this.props.fetchGroup(this.props.groupId);
  }

  membershipComponent() {
    let members_ids = [];
    this.props.group.members.forEach((member) => members_ids.push(member.id));
    if (members_ids.includes(this.props.currentUser.id)) {
      return (
        <button className="group-header-join-btn" onClick = {this.leaveGroup}>Leave Group</button>
      );
    } else if (this.props.group.author.id === this.props.currentUser.id) {
      return null;
    } else {
      return (
        <button className="group-header-join-btn" onClick = {this.joinGroup}>Join Group</button>
      );
    }
  }

  photosComponent(group) {
    if (group.images.length !== 0) {
      return (
        <div className="event-photos">
          <h3 className="organizer">Event photos:</h3>
          <nav>
            <ul id="nav-ul" className="ul-event-images">
              {group.images.map((image) => (
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
    let group = this.props.group;
    let array = [1, 2, 3, 4, 5, 16, 7, ,8 ,9 , 9, 11, 12, 13, 14, 15, 6, 17, 18];
    if (this.props.group.id) {
      return (
        <div style={{backgroundColor: "#fafafa"}}>
          <div className="group-header">
            <div className="group-header-name-container">
              <h1 className="group-header-name">{group.name}</h1>
            </div>
            <nav className="group-header-nav">
                <div>
                  <button className="group-header-join-btn" onClick={(e) => this.props.history.goBack()}>Back</button>
                  <Link id="create-event-button" to={`/create_event?groupId=${this.props.group.id}`}>Create Event</Link>
                </div>
                <div>
                  {this.membershipComponent()}
                </div>
            </nav>
          </div>
          <div className="group-information-container">
            <div className="group-info">
              <img className="image" src={group.image_url} />
              <h3 className="location">Location: {group.location}</h3>
              <p className="num-huddles">Going: {group.members.length}</p>
              <h3 className="organizer">Organizer:</h3>
              <div className="organizer-container">
                <h4>{group.author.email}</h4>
              </div>
              {this.photosComponent(group)}
            </div>
            <div className="group-description-container">
              <div className="description">{group.description}</div>
            </div>
            <div className="right-side-bar">
              <h3>Members:</h3>
              <br /><br />
              <div className="scrollbars">
                <div className="vertical-scrollbar">
                  <ul>
                    {group.members.map((user) => (
                      <li key={`${user.email} - ${user.id}`}>{user.email}</li>
                    ))}
                  </ul>
                </div>
                <h3>Events:</h3>
                <br /><br />
                <div className = "vertical-scrollbar">
                    {group.events.map( event => {
                      const style = {
                        backgroundImage: `url(${event.image_url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      };
                      return (
                        <div key={`${event.title} - ${event.id}`}>
                          <Link to={`/events/${event.id}`}>
                          <div className="event-li" style={style}>
                            {event.title}
                          </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
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
)(withRouter(ShowGroupPage));
