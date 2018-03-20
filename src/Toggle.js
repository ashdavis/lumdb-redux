import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';

const Toggle = ({messageVisible, toggleMessage}) => (
  <div>
    {messageVisible &&
      <p>You will see this if the Redux Action is toggled</p>
    }
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
  </div>
);

const mapStateToProps = ({message}) => ({
  messageVisible: message.messageVisible,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
