import React from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
const Message = (props) => {

  return (
    <div>
    {Meteor.user() ? (
      Meteor.user().username === props.message.user ? (
      <div className="row speech-bubble-self limit">
        <div className="col-md-11 explicitmessage-self"><span className="username">{props.message.user+": "}</span>{props.message.message}</div>
        {<div className="col-md-1 hour">{props.message.sentAt.getHours()+":"+props.message.sentAt.getMinutes()}</div>}
      </div>) : (
      <div className="row speech-bubble limit">
        <div className="col-md-11 explicitmessage"><span className="username">{props.message.user+": "}</span>{props.message.message}</div>
        {<div className="col-md-1 hour">{props.message.sentAt.getHours()+":"+props.message.sentAt.getMinutes()}</div>}
      </div>)
      
    ) : (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Bienvenido!</h5>
          <h6 className="card-subtitle mb-2 text-muted">Querido usuario</h6>
          <p className="card-text">Ingrese o registre sus datos para poder continuar</p>
        </div>
      </div>)}
      <br/>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;