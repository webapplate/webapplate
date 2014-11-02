/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  copy: {
    cordova: {
      files: [{
        expand: true,
        cwd: '<%= param.dst %>/',
        src: '**/*',
        dest: '<%= param.www %>/'
      }]
    }
  },
  clean: {
    cordova: ['<%= param.dst %>']
  },
  fileExists: {
    cordova: [
      '<%= param.www %>/js/app.min.js',
      '<%= param.www %>/js/body.min.js',
      '<%= param.www %>/style/app.min.css',
      '<%= param.www %>/locales/manifest.json'
    ]
  }
};
