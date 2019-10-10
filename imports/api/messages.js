import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
  'messages.insert'(message){
    Messages.insert({
      message,
      sentAt: new Date(),
    });
  }
});
