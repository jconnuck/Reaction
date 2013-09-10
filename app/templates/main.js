var React = require('React');
var Application = require('Application');

document.addEventListener("DOMContentLoaded", function() {
  React.renderComponent(
    Application(null ), 
    document.getElementById('tableslip')
  );
});