'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the component subgenerator with the argument ' + this.name + '.');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {
  this.template('component.jsx', 'app/components/' + this._.classify(this.name) + '/' + this._.classify(this.name) + '.jsx');
  this.copy('component.scss', 'app/components/' + this._.classify(this.name) + '/' + this._.classify(this.name) + '.scss');
};
