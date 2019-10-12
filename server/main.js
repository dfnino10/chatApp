import { Meteor } from 'meteor/meteor';
import '../imports/api/messages.js';
import { WebApp } from 'meteor/webapp';

Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: 'en' }));
});