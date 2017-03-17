import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveEvent, createEvent, fetchEvent } from '../../actions/sample_events_action';
import { getCategories } from '../../actions/categories_actions';
import userPage from './user_form';
import * as Selectors from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  errors: state.session.errors
}};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(userPage));
