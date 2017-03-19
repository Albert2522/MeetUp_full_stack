import * as APIUtil from '../util/images_api_util';

export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES_ERRORS = "RECEIVE_IMAGE_ERRORS";
export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

export const receiveImagesErrors = imageErrors => ({
  type: RECEIVE_IMAGES_ERRORS,
  imageErrors
});

export const removeImage = image => ({
  type: REMOVE_IMAGE,
  image
});


export const createImage = (image) => dispatch => (
  APIUtil.createImage(image).then(data => dispatch(receiveImage(data)), err => dispatch(receiveImagesErrors(err.responseJSON)))
);

export const deleteImage = (id) => dispatch => (
  APIUtil.deleteImage(id).then(image => dispatch(removeImage(image)), err => dispatch(receiveImagesErrors(err.responseJSON)))
);
