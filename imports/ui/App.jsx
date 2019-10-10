import React from 'react';
import Message from './Message.jsx';
import TextBox from './TextBox.jsx';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import PropTypes from 'prop-types';

import { Meteor } from 'meteor/meteor';

const App = (props) => {

  const renderMessages = () => {
    console.log('Messages', props.messages);
    return props.messages.map( msg => (
      <Message key={msg._id} message={msg} />
    ));
  };

  return (
    <div>
      <header>
        <h1>Chatting App!</h1>
      </header>
      <main>
        <ul>
          {renderMessages()}
        </ul>
      </main>
      <div className='textBox'>
        <TextBox></TextBox>
      </div>
    </div>
  );
};

App.propTypes = {
  messages : PropTypes.arrayOf(PropTypes.object),
};

export default withTracker(() => {
  Meteor.subscribe('messages');

  return {
    messages: Messages.find({}).fetch(),
  };
})(App);
