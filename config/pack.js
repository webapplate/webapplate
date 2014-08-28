/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  zip: {
    pack: {
      cwd: '<%= config.dst %>/',
      src: '<%= config.dst %>/**',
      dest: '<%= config.pack %>/package.zip'
    }
  }
};
