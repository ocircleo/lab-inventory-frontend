const queryParams = (query) => {
  let window_location = window.location.search;
  if (window_location) {
    let urlSearchParams = new URLSearchParams(window_location);
    if (query) return urlSearchParams.get(query);
    return urlSearchParams;
  }
  return null;
};

export default queryParams;
