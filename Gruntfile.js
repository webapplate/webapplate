/* global module, require */
module.exports = function(grunt) {
  'use strict';

  // measures the time each task takes
  require('time-grunt')(grunt);

  // Load the plugin that provides tasks.
  require('load-grunt-tasks')(grunt);

  // inherit center configs
  var webapplateConfigs = require('./config');

  // Load all custom tasks
  grunt.loadTasks('grunt');

  // Load grunt configurations
  var options = {
    config: { // set default configs location
      src: 'grunt/configs/*.js'
    },
    pkg: grunt.file.readJSON('package.json'),
    param: { // Project settings
      debug: webapplateConfigs.debug,
      src: 'public',
      build: 'build',
      tmp: '.tmp',
      dst: 'dist',
      pack: 'pack',
      www: 'www'
    }
  };
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  // Server
  grunt.registerTask('server', ['express:dev', 'watch']);

  // intemediate task to optimize resources
  grunt.registerTask('optimize', [
    'copy:build',
    'babel', 'myth', // js/css transpiler
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'htmlmin',
    'usemin'
  ]);

  // generate static web to dist/
  grunt.registerTask('static', [
    'welcome', 'clean:dist',
    'optimize',
    'copy:static',
    'copy:vendor', // customize grunt/configs/vendor_copy.js
    'manifest',
    'copy:appcache',
    'clean:tests',
    'fileExists:static' // test result
  ]);

  // generate cordova/phonegap package to www/
  grunt.registerTask('cordova', [
    'welcome', 'clean:dist',
    'optimize',
    'copy:static',
    'copy:vendor', // customize grunt/configs/vendor_copy.js
    'clean:tests',
    'copy:cordova',
    'clean:cordova',
    'fileExists:cordova'
  ]);

  // generate package app to pack/
  grunt.registerTask('pack', [
    'welcome', 'clean:dist',
    'optimize',
    'copy:static',
    'copy:vendor', // customize grunt/configs/vendor_copy.js
    'copy:backgroundJs',
    'copy:installPage',
    'clean:pack',
    'zip:pack',
    'fileExists:pack' // test result
  ]);

  // generate dynamic web to dist/
  grunt.registerTask('dynamic', [
    'welcome', 'clean:dist',
    'copy:dynamic',
    'clean:dynamic',
    'fileExists:dynamic' // test result
  ]);

  // copy firefox webapp manifest to chrome webapp json
  grunt.registerTask('f2c', [
    'welcome', 'copy:backupChrome', 'copy:firefox'
  ]);
  // copy chrome webapp json to firefox webapp manifest
  grunt.registerTask('c2f', [
    'welcome', 'copy:backupFirefox', 'copy:chrome'
  ]);

  // lint
  grunt.registerTask('lint', [
    'welcome', 'jshint', 'jscs', 'jsonlint', 'csslint', 'sloc'
  ]);

  // Default server test task.
  grunt.registerTask('default', [
    'lint', 'mochacov:test'
  ]);

  // Default client test task.
  grunt.registerTask('test', [
    'lint', 'mocha_phantomjs'
  ]);

  // generate docs
  grunt.registerTask('docs', [
    'clean:docs', 'lint', 'jsdoc'
  ]);

  // deploy github page
  grunt.registerTask('github', [
    'static', 'gh-pages'
  ]);
};
