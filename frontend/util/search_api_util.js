export const fetchSearchResult = (search) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search',
    data: {search}
  });
};
