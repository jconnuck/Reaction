'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReactionGenerator = module.exports = function ReactionGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactionGenerator, yeoman.generators.Base);

ReactionGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'appName',
    message: 'Would you like to name this app?',
    default: 'Reaction'
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};

ReactionGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/components');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('index.html', 'index.html');
};

ReactionGenerator.prototype.framework = function framework() {
  this.copy('Application.jsx', 'app/components/Application/Application.jsx');
  this.copy('grid.scss', 'app/styles/Grid.scss');
  this.directory('react', 'app/lib/react');

  this.directory('Lawnchair.js', 'app/lib/Lawnchair.js');
  this.copy('Arbiter.js', 'app/lib/Arbiter.js');
  this.copy('ArbiterMixin.js', 'app/components/mixins/ArbiterMixin.js');
  this.copy('Store.js', 'app/lib/Store.js');
  this.copy('Dispatcher.js', 'app/lib/Dispatcher.js');
};

ReactionGenerator.prototype.modules = function modules() {
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
};

ReactionGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};

ReactionGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
