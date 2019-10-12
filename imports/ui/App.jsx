import React from 'react';
import Message from './Message.jsx';
import TextBox from './TextBox.jsx';
import NavBar from './NavBar.jsx';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import PropTypes from 'prop-types';

import { Meteor } from 'meteor/meteor';

const App = (props) => {

  const renderMessages = () => {
    console.log('Messages', props.messages);
    return props.messages.map( msg => (
      <ul key={msg._id}>
        <li key={msg._id}>
          <Message key={msg._id} message={msg} />
        </li>
      </ul>
    ));
  };

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <br/>
      <main>
        <ul>
          {renderMessages()}
        </ul>
        <div className='textBox'>
          <TextBox></TextBox>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  messages : PropTypes.arrayOf(PropTypes.object),
};

export default withTracker(() => {
  Meteor.subscribe('messages');

  return {
    user: Meteor.user(),
    messages: Messages.find({}).fetch(),
  };
})(App);
