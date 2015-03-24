/* global require */
'use strict';
var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc');
// inherit center configs
var webapplateConfigs = require('./config');

var options = {
  param: { // Project settings
    debug: webapplateConfigs.debug,
    src: 'public',
    build: 'build',
    tmp: '.tmp',
    dst: 'dist',
    pack: 'pack',
    www: 'www'
  }
};

gulp.task('jsdoc', function() {
  return gulp.src(options.param.src + '/js/*.js')
    .pipe(jsdoc('./docs'));
});

gulp.task('docs', ['jsdoc']);
