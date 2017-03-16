import {RECEIVE_SAMPLE_EVENTS, RECEIVE_EVENT} from '../actions/sample_events_action';
import merge from 'lodash/merge';

const sampleEventsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_SAMPLE_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT:
      let newState = merge({}, state);
      newState[action.event.id] = action.event;
      return newState;
    default:
      return state;
  }
};

export default sampleEventsReducer;
