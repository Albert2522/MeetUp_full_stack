import {RECEIVE_IMAGES, RECEIVE_IMAGE, RECEIVE_IMAGES_ERRORS, REMOVE_IMAGE} from '../actions/images_actions';
import merge from 'lodash/merge';

const _nullEvent = Object.freeze({
  images: {},
  imageErrors: []
});

const ImageReducer = (state = _nullEvent, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_IMAGES:
      let images = action.images;
      return merge({}, _nullEvent, {images});
    case RECEIVE_IMAGE:
      newState = merge({}, state);
      let image = action.image;
      newState.images[image.id] = image;
      return newState;
    case REMOVE_IMAGE:
      newState = merge({}, state);
      let id = action.image.id;
      delete newState.images[id];
      return newState;
    case RECEIVE_IMAGES_ERRORS:
      let imageErrors = action.imageErrors;
      newState = merge({}, state);
      return merge({}, newState, {imageErrors});
    default:
      return state;
  }
};

export default ImageReducer;
