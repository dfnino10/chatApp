import React from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
const Message = (props) => {
  return (
    <li>{props.message.text}</li>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;