module.exports = function(grunt) {
  'use strict';

  // measures the time each task takes
  require('time-grunt')(grunt);

  // Load the plugin that provides tasks.
  require('load-grunt-tasks')(grunt);

  // Load all custom tasks
  grunt.loadTasks('tasks');

  // Load grunt configurations
  var options = {
    config: { // set default configs location
      src: 'tasks/configs/*.js'
    }
  };
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  // Server
  grunt.registerTask('server', ['express:dev', 'watch']);

  // intemediate task to optimize web components
  grunt.registerTask('polymermin', [
    'copy:webComponent',
    'vulcanize', // index.html -> index-csp.html/index-csp.js
    'clean:unvulcanized', // rm index.html
    'copy:vulcanized', // index-csp.html -> index.html & move script element
    'clean:vulcanized', // rm index-csp.html
  ]);

  // intemediate task to optimize resources
  grunt.registerTask('optimize', [
    'welcome', 'clean:dist',
    'copy:build',
    /*'polymermin',*/
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'htmlmin',
    'usemin'
  ]);

  // generate static web to dist/
  grunt.registerTask('static', [
    'optimize',
    'copy:static',
    'manifest',
    'copy:appcache',
    'clean:static'
  ]);

  // generate package app to pack/
  grunt.registerTask('pack', [
    'optimize',
    'clean:parts',
    'copy:static',
    'copy:backgroundJs',
    'copy:installPage',
    'clean:pack',
    'zip:pack'
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
