import * as APIUtil from '../util/membership_api_util';

export const createMembership = (membership) => dispatch => (
  APIUtil.createMembership(membership).then(data => console.log(data), err => console.log(err.responseJSON))
);

export const deleteMembership = (membership) => dispatch => (
  APIUtil.deleteMembership(membership).then(data => console.log(data), err => console.log(err.responseJSON))
);
