/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  'gh-pages': {
    options: {
      base: '<%= param.dst %>'
    },
    src: ['**']
  }
};
