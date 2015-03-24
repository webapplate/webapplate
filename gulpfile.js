/* global require */
'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');
var jsdoc = require('gulp-jsdoc');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var noop = function() {};
var stylish = require('gulp-jscs-stylish');
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

var lintSources = ['*.js', 'routes/**/*.js', options.param.src + '/**/*.js'];
/**
 * Runs JSLint JSCS on all javascript files found in the app dir.
 */
gulp.task('lint', function() {
  return gulp.src(lintSources)
    .pipe(jshint('.jshintrc'))
    .pipe(jscs())
    .on('error', noop) // don't stop on error
    .pipe(stylish.combineWithHintResults())
    .pipe(jshint.reporter('default'));
});

gulp.task('docs', ['clean-jsdoc', 'lint', 'jsdoc']);
