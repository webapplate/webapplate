/* jshint node: true */
'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');
var del = require('del');
var jsonlint = require('gulp-jsonlint');
var csslint = require('gulp-csslint');
var sloc = require('gulp-sloc');
var eslint = require('gulp-eslint');

var babel = require('gulp-babel');
var cssNext = require('gulp-cssnext');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var zip = require('gulp-zip');
// inherit center configs
var webapplateConfigs = require('./config');
var karma = require('karma').server;
var ghPages = require('gulp-gh-pages');

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

gulp.task('jsdoc', shell.task([
  './node_modules/jsdoc/jsdoc.js -c jsdoc.json'
]));

var lintSources = ['*.js', 'routes/**/*.js', options.param.src + '/**/*.js'];

gulp.task('jsonlint', function() {
  return gulp.src([
      'package.json',
      'bower.json',
      options.param.src + '/manifest.webapp',
      options.param.src + '/manifest.json',
      options.param.src + '/**/*.json'
    ])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});

gulp.task('csslint', function() {
  return gulp.src(options.param.src + '/style/**/*.css')
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter());
});

gulp.task('sloc-client', function() {
  gulp.src([
      options.param.src + '/*.html',
      options.param.src + '/js/*.js',
      options.param.src + '/style/*.css',
      options.param.src + '/test/unit/*.js',
    ])
    .pipe(sloc());
});

gulp.task('sloc-server', function() {
  gulp.src([
      'server.js',
      'routes/**/*.js',
      'views/**/*.html'
    ])
    .pipe(sloc());
});

gulp.task('clean-dist', function(cb) {
  del([
    options.param.dst,
    options.param.tmp,
    options.param.build,
    options.param.pack,
    options.param.www,
    'docs'
  ], cb);
});

gulp.task('copy-static', function() {
  return gulp.src([
      options.param.src + '/manifest.*',
      options.param.src + '/style/icons/**/*',
      options.param.src + '/style/images/**/*',
      options.param.src + '/locales/**/*'],
      {'base' : options.param.src
    })
    .pipe(gulp.dest(options.param.dst));
});

gulp.task('copy-vendor', function() {
  return gulp.src([
      // bootstrap css
      options.param.src + '/vendor/bootstrap/dist/css/*.min.css',
      // bootstrap fonts
      options.param.src + '/vendor/bootstrap/dist/fonts/*',
      // bootstrap material design css
      options.param.src +
      '/vendor/bootstrap-material-design/dist/css/*.min.css',
      // bootstrap material design fonts, remove .woff to support < ie9
      options.param.src + '/vendor/bootstrap-material-design/dist/fonts/*.woff',
      // font awesome
      //options.param.src + '/vendor/font-awesome/css/font-awesome.min.css',
      //options.param.src + '/vendor/font-awesome/font/*.woff'
    ], {'base' : options.param.src})
  .pipe(gulp.dest(options.param.dst));
});

gulp.task('optimize', function() {
  var assets = useref.assets();
  var jsFilter = filter('**/*.js');
  var cssFilter = filter('**/*.css');
  var htmlFilter = filter('**/*.html');

  return gulp.src([
      options.param.src + '/{,*/}*.html',
      '!' + options.param.src + '/test/**.*'
    ])
    .pipe(assets)
    // js
    .pipe(jsFilter)
    .pipe(babel({compact: false}))
    .pipe(uglify())
    .pipe(jsFilter.restore())
    // css
    .pipe(cssFilter)
    .pipe(cssNext())
    .pipe(minifyCss())
    .pipe(cssFilter.restore())
    // html
    .pipe(htmlFilter)
    .pipe(minifyHtml({empty: true}))
    .pipe(htmlFilter.restore())
    .pipe(assets.restore())
    // inject
    .pipe(useref())
    .pipe(gulp.dest(options.param.dst));
});

// Runs ESLint on all javascript files found in the app dir.
gulp.task('lint', ['jsonlint', 'csslint', 'sloc-server', 'sloc-client'],
  function() {
    return gulp.src(lintSources)
      .pipe(eslint('.eslintrc'))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError()); // don't stop on error
  });

gulp.task('githooks', function() {
  return gulp.src(['pre-commit'])
    .pipe(gulp.dest('.git/hooks'));
});

gulp.task('docs', ['clean-dist', 'lint', 'jsdoc']);
gulp.task('static', ['optimize', 'copy-static', 'copy-vendor']);
gulp.task('pack', ['optimize', 'copy-static', 'copy-vendor'], function() {
  console.log('export packed web app is not supported yet');
  return gulp.src(options.param.dst + '/**/*', {'base' : options.param.dst})
    .pipe(zip('package.zip'))
    .pipe(gulp.dest(options.param.pack));
});

gulp.task('cordova', ['optimize', 'copy-static', 'copy-vendor'], function() {
  return gulp.src([options.param.dst + '/**/*'], {'base' : options.param.dst})
    .pipe(gulp.dest(options.param.www));
});

gulp.task('dynamic', function() {
  console.log('export dynamic web site is not supported yet');
});

gulp.task('github', ['static'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

// Run test once and exit
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});
