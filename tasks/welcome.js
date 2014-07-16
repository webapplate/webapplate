/**
 * Sample task to print welcome ASCII figure
 */
module.exports = function(grunt) {
  'use strict';
  grunt.registerTask('welcome', 'webapplate!', function () {
    grunt.log.writeln('                _            ' +
                      '           __      _.');
    grunt.log.writeln(' _      _______  / /_  __  __' +
                      '  __ ___  ____  / / _  _/ / _ _');
    grunt.log.writeln('| | /| / / _ \\/ _  \\/ _  `/' +
                      ' _  \\/ _  \\/ / _  `/ __/ _ \\');
    grunt.log.writeln('| |/ |/ /  __/ /_/ / /_/ / /_' +
                      '/ / /_/ / / /_/ / /_/  __/');
    grunt.log.writeln('|__/|__/\\___/_.___/\\__,_/ .' +
                      '___/ .___/_/\\__,_/\\__/\\___/');
    grunt.log.writeln('                       /_/   ' +
                      '/_/');
  });
};
