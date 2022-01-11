'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the hunky-dory ${chalk.red('generator-google-cloud-function')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What gcf name?',
        default: this.appname.replace(/\s+/g, '-')
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {name: this.props.name}
    );
    this.fs.copy(this.templatePath('env'), this.destinationPath('.env'));
    this.fs.copy(this.templatePath('.gcloudignore'), this.destinationPath('.gcloudignore'));
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('index.js'), this.destinationPath('index.js'));
  }

  install() {
    this.npmInstall();
  }
};
