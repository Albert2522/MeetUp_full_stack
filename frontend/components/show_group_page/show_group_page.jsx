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
        <button onClick = {this.leaveGroup}>Leave Group</button>
      );
    } else if (this.props.group.author.id === this.props.currentUser.id) {
      return null;
    } else {
      return (
        <button onClick = {this.joinGroup}>Join Group</button>
      );
    }
  }

  render() {
    let group = this.props.group
    if (this.props.group.id) {
      return (
        <div className="home_page">
          <div>Name - {group.name}</div>
          <div>Description - {group.description}</div>
          <div>Author - {group.author.email}</div>
          <div>
            Members:
            <ul>
              {group.members.map((user) => (
                <li key={`${user.email} - ${user.id}`}>{user.email}</li>
              ))}
            </ul>
          </div>
          <div>
            Images:
            <ul>
              {group.images.map((image) => (
                <li key={`${image.url} - ${image.id}`}><img src={image.url} alt="Should be image of group"/></li>
              ))}
            </ul>
          </div>
          {this.membershipComponent()}
          <button onClick={(e) => this.props.history.goBack()}>Back</button>
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
