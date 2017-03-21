import {
  RECEIVE_ERRORS_USER_EDIT, RECEIVE_FETCHED_USER } from '../actions/user_editing_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user: {},
  errors: []
});

const UserEditReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_FETCHED_USER:
      let user = action.user
      return merge(newState, {user});
    case RECEIVE_ERRORS_USER_EDIT:
      const errors = action.errors;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UserEditReducer;
