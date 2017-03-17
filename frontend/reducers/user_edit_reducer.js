import {
  RECEIVE_ERRORS_USER_EDIT } from '../actions/user_editing_action';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  errors: []
});

const UserEditReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ERRORS_USER_EDIT:
      const errors = action.errors;
      let newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UserEditReducer;
