import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { updateUser, fetchUser } from '../../actions/user_editing_actions';
import ListOfEG from '../ListOfEG'
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
    console.log(this.props.user);
    if (this.props.user.id) {
      return (
        <div className="user-form">
        <div>
          <div id="container">
            <div id="link" >Welcome</div>
            <div id="menu">
              <div className="front face">
                <p>WE'RE OPEN!</p>
              </div>
            </div>
            </div>
          </div>
          <h1>Hi {this.props.user.email}!</h1>
          <div>
            <Link className="push_button red" to={`/user/${this.props.currentUser.id}/change_password`}>Change password</Link>
          </div>

          <div> Joined Groups:
            <ListOfEG data={this.props.user.groups} type={"groups"} />
          </div>
          <div>
            Joined Events:
            <ListOfEG data={this.props.user.events} type={"events"} />
          </div>
          <div>
            Created Groups:
            <ListOfEG data={this.props.user.groups_created} type={"groups"} />
          </div>
          <div> Created Events:
            <ListOfEG data={this.props.user.events_created} type={"events"} />
          </div>
          <div>
            <Link className="push_button blue" to={`/user/${this.props.currentUser.id}/create_group`}>Create Group</Link>
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
