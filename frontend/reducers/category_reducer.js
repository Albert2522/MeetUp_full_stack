import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY} from '../actions/categories_actions';
import merge from 'lodash/merge';

const _nullEvent = Object.freeze({
  categories: {},
  category: {},
});

const CategoryReducer = (state = _nullEvent, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      let categories = action.categories;
      return merge({}, _nullEvent, {categories});
    case RECEIVE_CATEGORY:
      let category = action.category;
      newState = merge({}, state);
      newState.category = category;
      newState.categories[category.id] = category;
      return newState;
    default:
      return state;
  }
};

export default CategoryReducer;
