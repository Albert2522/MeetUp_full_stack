
import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import sampleEventsReducer from './sample_events_reducer';
import UserEditReducer from './user_edit_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  sampleEvents: sampleEventsReducer,
  userEdit: UserEditReducer
});

export default RootReducer;
