var Store = require('Store');

var <%= _.classify(record) %>Store = new Store({name: '<%= _.camelize(_.slugify(records))%>', record: '<%= _.camelize(_.slugify(record))%>'}, function (<%= _.camelize(_.slugify(records))%>) {

});

module.exports = <%= _.classify(record) %>Store;