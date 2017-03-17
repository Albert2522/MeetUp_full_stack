import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { updateUser } from '../../actions/session_actions';
import { getCategories } from '../../actions/categories_actions';
import * as Selectors from '../../reducers/selectors.js';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => ({

});


class userPage extends React.Component {


  render() {
    return (
      <div>
        <Link to={`/user/${this.props.currentUser.id}/change_password`}>Change password</Link>
        <div> User groups</div>
        <div> User events</div>
        { this.props.children }
      </div>  
    );
  }


}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(userPage));
