import React from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
const Message = (props) => {
  return (
    <div>
      <div className="row speech-bubble limit">
        <div className="col-md-8">{props.message.sentAt.getHours()+':'+props.message.sentAt.getMinutes()+'  '+props.message.message}</div>
      </div>
      <br/>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;