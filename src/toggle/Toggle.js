import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { toggleMessage } from './actions';

const Toggle = ({messageVisible, toggleMessage}) => (
  <div>
    <ToggleButton onClick={toggleMessage} onMouseDown={e => e.preventDefault()}>
      Toggle Me
    </ToggleButton>
    {messageVisible &&
      <ToggleMessage>
        You will see this message if the messageVisible state property is set to true.
      </ToggleMessage>
    }
  </div>
);

const mapStateToProps = ({toggle}) => ({
  messageVisible: toggle.messageVisible,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

const ToggleMessage = styled.p`
  color: white;
  font-weight: 200;
  line-height: 25px;
  margin-top: 0;
  margin-bottom: 16px;
`;

const ToggleButton = styled.button`
  cursor: pointer;
  background-color: #111111;
  color: #DDDDDD;
  border: 1px solid #DDDDDD;
  margin-top: 16px;
  margin-bottom: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 0.85rem;
  height: 35px;
  font-weight: 600;
`;
