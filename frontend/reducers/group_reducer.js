import {RECEIVE_GROUPS, RECEIVE_GROUP, RECEIVE_GROUPS_ERRORS, REMOVE_GROUP} from '../actions/groups_actions';
import merge from 'lodash/merge';

const _nullEvent = Object.freeze({
  groups: {},
  group: {},
  groupErrors: []
});

const GroupReducer = (state = _nullEvent, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_GROUPS:
      let groups = action.groups;
      return merge({}, _nullEvent, {groups});
    case RECEIVE_GROUP:
      let group = action.group;
      newState = merge({}, state);
      newState.group = group;
      newState.groups[group.id] = group;
      return newState;
    case REMOVE_GROUP:
      newState = merge({}, state);
      let id = action.group.id;
      delete newState.groups[id];
      return newState;
    case RECEIVE_GROUPS_ERRORS:
      let groupErrors = action.groupErrors;
      newState = merge({}, state);
      return merge({}, newState, {groupErrors});
    default:
      return state;
  }
};

export default GroupReducer;
