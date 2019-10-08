import React from 'react';
import Message from './Message.jsx';

const App = () => {

  const getMessages = () => {
    return [
      { _id: 1, text: 'Message 1' },
      { _id: 2, text: 'Message 2' },
      { _id: 3, text: 'Message 3' },
    ];
  };

  const renderMessages = () => {
    return getMessages().map((msg) => (
      <Message key={msg._id} message={msg} />
    ));
  };

  return (
    <div>
      <h1>Chatting App!</h1>
      <ul>
        {renderMessages()}
      </ul>
    </div>
  );
};

export default App;
