const callToApi = (search) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${search}`).then(
    (response) => response.json()
  );
};

export default callToApi;
