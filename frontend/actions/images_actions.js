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


export const createRelationship = (img_rel) => dispatch => (
  APIUtil.createRelationship(img_rel).then(data => console.log(data), err => dispatch(receiveImagesErrors(err.responseJSON)))
);

export const updateRelationship = (img_rel) => dispatch => (
  APIUtil.updateRelationship(img_rel).then(data = console(data), err => dispatch(receiveImagesErrors(err.responseJSON)))
);

export const deleteRelationship = (id) => dispatch => (
  APIUtil.deleteRelationship(id).then(data => console.log(data), err => dispatch(receiveImagesErrors(err.responseJSON)))
);
