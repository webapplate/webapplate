/* global require */
'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');
var jsdoc = require('gulp-jsdoc');
var jshint = require('gulp-jshint');
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

gulp.task('clean-jsdoc', function() {
  return gulp.src('docs', {read: false})
    .pipe(clean());
});

gulp.task('jsdoc', function() {
  return gulp.src(options.param.src + '/js/*.js')
    .pipe(jsdoc('./docs'));
});

/**
 * Runs JSLint on all javascript files found in the app dir.
 */
gulp.task('lint', function() {
  return gulp.src(['*.js', 'routes/**/*.js', options.param.src + '/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('docs', ['clean-jsdoc', 'lint', 'jsdoc']);
