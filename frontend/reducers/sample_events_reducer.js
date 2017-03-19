import {RECEIVE_SAMPLE_EVENTS, RECEIVE_EVENT, RECEIVE_EVENT_ERRORS} from '../actions/sample_events_action';
import merge from 'lodash/merge';

const _nullEvent = Object.freeze({
  events: [],
  event: {},
  eventErrors: []
});

const sampleEventsReducer = (state = _nullEvent, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SAMPLE_EVENTS:
      let events = action.events;
      return merge({}, _nullEvent, {events});
    case RECEIVE_EVENT:
      newState = merge({}, state);
      let event = action.event;
      newState.events[event.id] = event;
      return merge({}, newState, {event});
    case RECEIVE_EVENT_ERRORS:
      let eventErrors = action.eventErrors;
      newState = merge({}, state);
      return merge({}, newState, {eventErrors});
    default:
      return state;
  }
};

export default sampleEventsReducer;
