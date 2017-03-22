import {RECEIVE_SEARCH_RESULT} from '../actions/search_actions';
import merge from 'lodash/merge';

const _nullEvent = Object.freeze({
  result: {},
});

const SearchReducer = (state = _nullEvent, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SEARCH_RESULT:
      let result = action.result;
      newState = merge({}, state);
      newState.result = result;
      return merge({}, newState, {result});
    default:
      return state;
  }
};

export default SearchReducer;
