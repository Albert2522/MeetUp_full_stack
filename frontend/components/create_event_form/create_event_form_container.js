import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveEvent, createEvent, fetchEvent } from '../../actions/sample_events_action';
import { getCategories } from '../../actions/categories_actions';
import CreateEventForm from './create_event_form';
import * as Selectors from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: Selectors.arrayOfCategories(state)
}};

const mapDispatchToProps = dispatch => ({
  receiveEvent: event => dispatch(receiveEvent(event)),
  createEvent: event => dispatch(createEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateEventForm));
