import { TOGGLE_MESSAGE } from './actions';

const initialState = {
  messageVisible: false,
};

export default function(state = initialState, action) {
  const {type} = action;

  switch(type) {
    case TOGGLE_MESSAGE:
      return {...state, messageVisible: !state.messageVisible};
    default:
      return state;
  }
}
