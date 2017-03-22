
import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import sampleEventsReducer from './sample_events_reducer';
import UserEditReducer from './user_edit_reducer';
import ImageReducer from './image_reducer';
import GroupReducer from './group_reducer';
import CategoryReducer from './category_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  sampleEvents: sampleEventsReducer,
  userEdit: UserEditReducer,
  images: ImageReducer,
  groupsRed: GroupReducer,
  categoriesRed: CategoryReducer,
  searchRed: SearchReducer
});

export default RootReducer;
