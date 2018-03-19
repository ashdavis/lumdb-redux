import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({messageVisible, dispatch}) => (
  <div>
    {messageVisible &&
      <p>You will see this if the Redux Action is toggled</p>
    }
    <button onClick={() => dispatch({type: 'TOGGLE_MESSAGE'})}>
      Toggle Me
    </button>
  </div>
);

const mapStateToProps = ({message}) => ({
  messageVisible: message.messageVisible,
}); 

export default connect(mapStateToProps)(Toggle);
