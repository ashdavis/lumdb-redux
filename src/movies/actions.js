import API_ROOT from '../api-config';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

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

export function getMovie(id) {
  return async function(dispatch) {
    const response = await fetch(`${API_ROOT}/movie/${id}`);
    const movie = await response.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  }
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  }
}
