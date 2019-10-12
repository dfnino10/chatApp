import React from 'react';
import Message from './Message.jsx';
import TextBox from './TextBox.jsx';
import NavBar from './NavBar.jsx';
import { withTracker } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import PropTypes from 'prop-types';

import { Meteor } from 'meteor/meteor';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';


const App = (props) => {

  const renderMessages = () => {
    console.log('Messages', props.messages);
    console.log(props);
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
      <div className="row">
        <nav id="sidebar" className="col-md-3">
          <ul className="list-unstyled components">
            <li className="active">
              <AccountsUIWrapper></AccountsUIWrapper>
            </li>
          </ul>
        </nav>

      
      <main className="col-md-9">
        <ul>
          {renderMessages()}
        </ul>
        <div className='textBox'>

          <TextBox user={props.user}></TextBox>
          
        </div>
      </main>
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
    user: Meteor.user(),
    messages: Messages.find({}).fetch(),
  };
})(App);
