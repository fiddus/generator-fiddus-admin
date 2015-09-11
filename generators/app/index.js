(function () {
    'use strict';

    var yeoman = require('yeoman-generator'),
        chalk = require('chalk'),
        yosay = require('yosay');

    module.exports = yeoman.generators.Base.extend({
        prompting: function () {
            var done = this.async();

            // Have Yeoman greet the user.
            this.log(yosay(
                'Welcome to the impeccable ' + chalk.red('FiddusClient') + ' generator!'
            ));

            var prompts = [
                {
                    type: 'input',
                    name: 'projectName',
                    message: 'What is your project\'s name?',
                    default: this.appname
                }, {
                    type: 'input',
                    name: 'organization',
                    message: 'Enter your organization name:',
                    default: this.config.get('organization') || 'fiddus'
                }, {
                    type: 'input',
                    name: 'projectDescription',
                    message: 'Enter your project description:'
                }, {
                    type: 'input',
                    name: 'projectKeyWords',
                    message: 'Enter the project keywords:'
                }, {
                    type: 'input',
                    name: 'projectRepo',
                    message: 'Enter your project repository:',
                    default: (this.config.get('organization') || 'fiddus') + '/' + this.appname
                }, {
                    type: 'input',
                    name: 'author',
                    message: 'Enter project author:',
                    default: this.config.get('author')
                }, {
                    type: 'input',
                    name: 'angularModuleName',
                    message: 'What will be your Angular module name:',
                    default: this.config.get('angularModuleName') || 'fiddus'
                }
            ];

            this.prompt(prompts, function (props) {
                this.props = props;
                // To access props later use this.props.someOption;

                done();
            }.bind(this));
        },

        writing: {
            app: function () {
                this.fs.copyTpl(
                    this.templatePath('app'),
                    this.destinationPath('app'),
                    this.props
                );
                this.fs.copy(
                    this.templatePath('assets'),
                    this.destinationPath('assets')
                );
                this.fs.copy(
                    this.templatePath('components'),
                    this.destinationPath('components')
                );
                this.fs.copyTpl(
                    this.templatePath('_bower.json'),
                    this.destinationPath('bower.json'),
                    this.props
                );
                this.fs.copyTpl(
                    this.templatePath('_Gruntfile.js'),
                    this.destinationPath('Gruntfile.js'),
                    this.props
                );
                this.fs.copyTpl(
                    this.templatePath('_index.html'),
                    this.destinationPath('index.html'),
                    this.props
                );
                this.fs.copy(
                    this.templatePath('_karma.conf.js'),
                    this.destinationPath('karma.conf.js')
                );
                this.fs.copyTpl(
                    this.templatePath('_package.json'),
                    this.destinationPath('package.json'),
                    this.props
                );
                this.fs.copyTpl(
                    this.templatePath('_README.md'),
                    this.destinationPath('README.md'),
                    this.props
                );
                this.fs.copy(
                    this.templatePath('_project.sh'),
                    this.destinationPath('project.sh')
                );
            },

            projectfiles: function () {
                this.fs.copy(
                    this.templatePath('bowerrc'),
                    this.destinationPath('.bowerrc')
                );
                this.fs.copy(
                    this.templatePath('editorconfig'),
                    this.destinationPath('.editorconfig')
                );
                this.fs.copy(
                    this.templatePath('gitignore'),
                    this.destinationPath('.gitignore')
                );
                this.fs.copy(
                    this.templatePath('jscsrc'),
                    this.destinationPath('.jscsrc')
                );
                this.fs.copy(
                    this.templatePath('jshintrc'),
                    this.destinationPath('.jshintrc')
                );
                this.fs.copy(
                    this.templatePath('nvmrc'),
                    this.destinationPath('.nvmrc')
                );
            }
        },

        install: function () {
            this.installDependencies();
        },

        end: function () {
            console.log('Job done.');
        }
    });
})();
