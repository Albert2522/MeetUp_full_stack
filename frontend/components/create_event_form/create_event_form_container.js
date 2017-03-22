import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { receiveEvent, createEvent, fetchEvent, createFakeEvent } from '../../actions/sample_events_action';
import { fetchCategories } from '../../actions/categories_actions';
import { createRelationship } from '../../actions/images_actions';
import { getCategories } from '../../actions/categories_actions';
import CreateEventForm from './create_event_form';
import * as Selectors from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  categories: Selectors.allCategories(state.categoriesRed.categories),
  event: state.sampleEvents.event,
  eventErrors: state.sampleEvents.eventErrors,
  events: Selectors.allEvents(state.sampleEvents.events)
}};

const mapDispatchToProps = dispatch => ({
  receiveEvent: event => dispatch(receiveEvent(event)),
  createEvent: event => dispatch(createEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id)),
  createRelationship: img_rel => dispatch(createRelationship(img_rel)),
  fetchCategories: () => dispatch(fetchCategories()),
  createFakeEvent: (event) => dispatch(createFakeEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateEventForm));
