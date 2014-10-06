/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  copy: {
    dynamic: {
      files: [{
        expand: false,
        src: 'server.js',
        dest: '<%= param.dst %>/server.js'
      },
      {
        expand: false,
        src: 'package.json',
        dest: '<%= param.dst %>/package.json'
      },
      {
        expand: true,
        src: 'routes/**/*',
        dest: '<%= param.dst %>/'
      },
      {
        expand: true,
        src: 'views/**/*',
        dest: '<%= param.dst %>/'
      },
      { // copy entire public/
        expand: true,
        src: '<%= param.src %>/**/*',
        dest: '<%= param.dst %>/'
      }]
    }
  }
};
