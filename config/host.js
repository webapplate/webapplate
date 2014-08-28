/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  express: {
    options: {
      port: 8000
    },
    dev: {
      options: {
        script: 'server.js'
      }
    },
    prod: {
      options: {
        script: 'server.js',
        node_env: 'production'
      }
    },
    test: {
      options: {
        script: 'server.js'
      }
    }
  },
  watch: {
    express: {
      files: ['server.js', '<%= config.src %>/js/**/*.js', 'routes/**/*.js'],
      tasks: ['express:dev'],
      options: {
        livereload: true, //reloads the browser
        spawn: false
      }
    }
  },
};
