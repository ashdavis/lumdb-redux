import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({messageVisible}) => (
  <div>
    {messageVisible &&
      <p>You will see this if the Redux Action is toggled</p>
    }
    <button>Toggle Me</button>
  </div>
);

const mapStateToProps = ({message}) => ({
  messageVisible: message.messageVisible,
}); 

export default connect(mapStateToProps)(Toggle);
