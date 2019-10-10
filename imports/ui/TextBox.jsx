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
    <label>
      <input
        type='text'
        className='message-input'
        value={message}
        ref={inRef}
        onChange={onChangeInutMessage}
        onKeyPress={handleKeyPress}
      />
      <input type='submit' value='Send' onClick={handleClick}/>
    </label>
  );
};


export default TextBox;