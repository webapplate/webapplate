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
    },
    pkg: grunt.file.readJSON('package.json'),
    param: { // Project settings
      src: 'public',
      build: 'build',
      tmp: '.tmp',
      dst: 'dist',
      pack: 'pack'
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
    'welcome', 'clean:dist',
    'optimize',
    'copy:static',
    'copy:vendor', // customize tasks/configs/vendor_copy.js
    'manifest',
    'copy:appcache',
    'clean:tests'
  ]);

  // generate package app to pack/
  grunt.registerTask('pack', [
    'welcome', 'clean:dist',
    'optimize',
    'clean:parts',
    'copy:static',
    'copy:vendor', // customize tasks/configs/vendor_copy.js
    'copy:backgroundJs',
    'copy:installPage',
    'clean:pack',
    'zip:pack'
  ]);

  // generate static web to dist/
  grunt.registerTask('dynamic', [
    'welcome', 'clean:dist',
    'copy:dynamic',
    'clean:tests'
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
