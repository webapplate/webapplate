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
    pack: ['<%= param.dst %>/test'],
    parts: ['<%= param.dst %>/parts']
  }
};
