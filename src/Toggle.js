import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage, getMovies } from './actions';

const Toggle = ({messageVisible, toggleMessage, getMovies}) => (
  <div>
    {messageVisible &&
      <p>You will see this if the Redux Action is toggled</p>
    }
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
    <button onClick={getMovies}>
      Load Movies
    </button>
  </div>
);

const mapStateToProps = ({message}) => ({
  messageVisible: message.messageVisible,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
  getMovies
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
