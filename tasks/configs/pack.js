/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  copy: {
    backgroundJs: {
      files: [{
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'js/background.js',
        dest: '<%= param.dst %>/'
      }]
    },
    installPage: {
      files: [{
        expand: true,
        cwd: 'helper/',
        src: 'install.html',
        dest: '<%= param.pack %>/'
      }]
    }
  },
  zip: {
    pack: {
      cwd: '<%= param.dst %>/',
      src: '<%= param.dst %>/**',
      dest: '<%= param.pack %>/package.zip'
    }
  },
  clean: {
    pack: ['<%= param.dst %>/test']
  },
  fileExists: {
    pack: [
      '<%= param.dst %>/manifest.json',
      '<%= param.dst %>/manifest.webapp',
      '<%= param.dst %>/js/app.min.js',
      '<%= param.dst %>/js/body.min.js',
      '<%= param.dst %>/js/background.js',
      '<%= param.dst %>/style/app.min.css',
      '<%= param.dst %>/style/icons/icon128.png',
      '<%= param.dst %>/locales/manifest.json'
    ]
  }
};
