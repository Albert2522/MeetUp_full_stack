export const fetchSampleEvents = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/events'
  });
};

export const fetchEvent = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  });
};

export const fetchEventByTitle = (event) => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {event}
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    dataType: 'json',
    data: {event}
  });
};

export const deleteEvents = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  });
};
