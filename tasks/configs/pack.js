/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  copy: {
    backgroundJs: {
      files: [{
        expand: true,
        cwd: '<%= config.src %>/',
        src: 'js/background.js',
        dest: '<%= config.dst %>/'
      }]
    },
    installPage: {
      files: [{
        expand: true,
        cwd: 'helper/',
        src: 'install.html',
        dest: '<%= config.pack %>/'
      }]
    }
  },
  zip: {
    pack: {
      cwd: '<%= config.dst %>/',
      src: '<%= config.dst %>/**',
      dest: '<%= config.pack %>/package.zip'
    }
  },
  clean: {
    pack: ['<%= config.dst %>/test'],
    parts: ['<%= config.dst %>/parts']
  }
};
