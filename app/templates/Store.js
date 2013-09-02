var Arbiter = require('./Arbiter');
var Dispatcher = require('./Dispatcher');
// var Lawnchair = require('../vendor/lawnchair/test/lib/lawnchair.js');

var Store = Lawnchair;

// register to a dispatcher event

Store.prototype.subscribe = Arbiter.subscribe;

Store.prototype.publish = Arbiter.publish;

module.exports = Store;