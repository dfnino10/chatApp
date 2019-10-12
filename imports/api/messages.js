import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('messages', function messagesPublication() {
    return Messages.find();
  });
}

Meteor.methods({
  'messages.insert'(message){
    Messages.insert({
      message,
      sentAt: new Date()
    });
  }
});
