import API_ROOT from './api-config';

export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}

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
