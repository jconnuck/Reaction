'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var StoreGenerator = module.exports = function StoreGenerator(args, options, config) {

  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the store subgenerator with the argument ' + this.name + '.');
};

util.inherits(StoreGenerator, yeoman.generators.NamedBase);

StoreGenerator.prototype.names = function names() {
  var cb = this.async();

  var prompts = [
  {
    name: 'record',
    message: 'What would you like to call a single record in the store?',
    default: 'record'
  },
  {
    name: 'records',
    message: 'What would you like to call multiple records in the store?',
    default: 'records'
  },
  ];

  this.prompt(prompts, function (props) {
    this.record = props.record;
    this.records = props.records;

    cb();
  }.bind(this));
};

StoreGenerator.prototype.files = function files() {
  this.template('store.js', 'app/stores/' + this._.classify(this.name) + '.js');
};
