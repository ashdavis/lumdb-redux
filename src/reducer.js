import { TOGGLE_MESSAGE, GET_MOVIES } from './actions';

const initialState = {
  messageVisible: false,
  movies: [],
};

export default function(state = initialState, action) {
  const {type, data} = action;

  switch(type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        messageVisible: !state.messageVisible
      };
    case  GET_MOVIES:
      return {
        ...state,
        movies: data,
      }
    default:
      return state;
  }
}
