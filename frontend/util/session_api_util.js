import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: user
  });
}

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
};
