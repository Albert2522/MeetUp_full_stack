import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { fetchSampleEvents } from '../../actions/sample_events_action';
import * as Selectors from '../../reducers/selectors.js';
import SampleEvent from './sample_event';
import React from 'react';

const mapStateToProps = (state = {}, ownProps) => {
  return {
  currentUser: state.session.currentUser,
  events: Selectors.allEvents(state.sampleEvents)
}};

const mapDispatchToProps = dispatch => ({
  fetchSampleEvents: events => dispatch(fetchSampleEvents(events))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SampleEvent));
