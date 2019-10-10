import React, { useState, useRef } from 'react';
import { Meteor } from 'meteor/meteor';

const TextBox = () => {
  const [message, setName] = useState('');
  const inRef = useRef();

  const onChangeInutMessage = () => {
    setName(inRef.current.value);
  };

  const handleKeyPress = (evt) => {
    if(evt.key === 'Enter'){
      evt.preventDefault();
      sendMessage();
    }
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    Meteor.call('messages.insert', message);
    setName('');
  };

  return (
    <label className="chatwrapper">
    <div className="row">
    <div className="col-md-11">
      <input
        type='text'
        className='message-input chatbox'
        value={message}
        ref={inRef}
        onChange={onChangeInutMessage}
        onKeyPress={handleKeyPress}
      />
    </div>
    <div className="col-md-1">
      <input className="btn btn-primary" type='submit' value='💬' onClick={handleClick}/>
    </div>
    </div>
    </label>
  );
};


export default TextBox;