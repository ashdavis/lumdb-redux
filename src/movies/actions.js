import API_ROOT from '../api-config';

export const GET_MOVIES = 'GET_MOVIES';

export function getMovies() {
  return async function(dispatch) {
    const results = await fetch(`${API_ROOT}/discover`);
    const movies = await results.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}
