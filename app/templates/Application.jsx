/** @jsx React.DOM */
var React = require('React');
var ArbiterMixin = require('mixins/ArbiterMixin');

var Application = React.createClass({
  mixins: [ArbiterMixin],
  
  render: function () {
    return (
      <div class="Application">
        <%= appName %>
      </div>
    );
  }
});

module.exports = Application;