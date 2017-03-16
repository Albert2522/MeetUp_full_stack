
import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import sampleEventsReducer from './sample_events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  sampleEvents: sampleEventsReducer
});

export default RootReducer;
