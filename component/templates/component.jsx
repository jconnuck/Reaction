/** @jsx React.DOM */

var React = require('React');
var ArbiterMixin = require('mixins/ArbiterMixin');

var <%= _.classify(name) %> = React.createClass({
  mixins: [ArbiterMixin],
  
  render: function () {
    return (
      <div class="<%= _.classify(name) %>">
      </div>
    );
  }
});

module.exports = <%= _.classify(name) %>;