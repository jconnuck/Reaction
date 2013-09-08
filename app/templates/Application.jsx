/** @jsx React.DOM */
var React = require('React');

var Application = React.createClass({
  render: function () {
    return (
      <div class="Application">
        <%= appName %>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  React.renderComponent(
    <Application />, 
    document.getElementById('<%= _.camelize(_.slugify(appName)) %>')
  );
});

module.exports = Application;