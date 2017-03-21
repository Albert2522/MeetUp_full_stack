import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const REMOVE_GROUP = "REMOVE_GROUP";

export const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveGroupErrors = groupErrors => ({
  type: RECEIVE_GROUP_ERRORS,
  groupErrors
});

export const removeGroup = group => ({
  type: REMOVE_GROUP,
  group
});


export const fetchGroups = () => dispatch => (
  APIUtil.fetchGroups().then(data => dispatch(receiveGroups(data)))
);

export const fetchGroup = (id) => dispatch => (
  APIUtil.fetchGroup(id).then(data => dispatch(receiveGroup(data)))
);

export const fetchGroupByTitle = (group) => dispatch => (
  APIUtil.fetchGroup(group).then(data => dispatch(receiveGroups(data)))
);

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group).then(data => dispatch(receiveGroup(data)), err => dispatch(receiveGroupErrors(err.responseJSON)))
);

export const deleteGroup = (id) => dispatch => (
  APIUtil.deleteGroup(id).then(data => dispatch(receiveGroup(data)), err => dispatch(receiveGroupErrors(err.responseJSON)))
);
