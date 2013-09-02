var Arbiter = require('./Arbiter');

var Dispatcher = Arbiter.create();

var dispatchUserEvent = function(publisherData, message, subscriberData) {
  var publishMessage = message.replace(/^action/, 'payload');
  Dispatcher.publish(publishMessage, publisherData);
};

// listen to user actions
Arbiter.subscribe('action/*', dispatchUserEvent);
// TODO listen to server actions


module.exports = Dispatcher;