import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULT = "RECEIVE_SEARCH_RESULT";

export const receiveSearchResult = result => ({
  type: RECEIVE_SEARCH_RESULT,
  result
});

export const fetchSearchResult = (data) => dispatch => (
  APIUtil.fetchSearchResult(data).then(result => dispatch(receiveSearchResult(result)))
);
