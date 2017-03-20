import * as APIUtil from '../util/events_api_util';

export const RECEIVE_SAMPLE_EVENTS = "RECEIVE_SAMPLE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";

export const receiveSampleEvents = events => ({
  type: RECEIVE_SAMPLE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEventErrors = eventErrors => ({
  type: RECEIVE_EVENT_ERRORS,
  eventErrors
});

export const fetchSampleEvents = () => dispatch => (
  APIUtil.fetchSampleEvents().then(data => dispatch(receiveSampleEvents(data)))
);

export const fetchEvent = (id) => dispatch => (
  APIUtil.fetchEvent(id).then(data => dispatch(receiveEvent(data)))
);

export const fetchEventByTitle = (event) => dispatch => (
  APIUtil.fetchEvent(event).then(data => dispatch(receiveSampleEvents(data)))
);

export const createEvent = (event) => dispatch => (
  APIUtil.createEvent(event).then(data => dispatch(receiveEvent(data)), err => dispatch(receiveEventErrors(err.responseJSON)))
);
