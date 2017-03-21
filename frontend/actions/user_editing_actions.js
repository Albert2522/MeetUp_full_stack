import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ERRORS_USER_EDIT = "RECEIVE_ERRORS_USER_EDIT";
export const RECEIVE_FETCHED_USER = "RECEIVE_FETCHED_USER";

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(user => console.log(user),
      err => dispatch(receiveErrorsUserEdit(err.responseJSON)))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => dispatch(receiveFetchedUser(user)),
    err => dispatch(receiveErrorsUserEdit(err.responseJSON)))
);


export const receiveErrorsUserEdit = errors => {
  return {
  type: RECEIVE_ERRORS_USER_EDIT,
  errors
  };
};

export const receiveFetchedUser = user => {
  return {
  type: RECEIVE_FETCHED_USER,
    user
  };
};
