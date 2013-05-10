module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    mocha_phantomjs: {
      all: ['public/test/index.html']
    },
    manifest: {
      generate: {
        options: {
          basePath: "./public/",
          // cache: ["js/app.js", "css/style.css"],
          // cachePrefix: "/",
          // network: ["http://*", "https://*"],
          // fallback: ["/ /offline.html"],
          // exclude: ["js/jquery.min.js"],
          preferOnline: true,
          verbose: false,
          timestamp: true
        },
        src: [
            "*.html",
            "js/*.js",
            "style/*.css",
            "style/images/*.png",
            "style/images/*.jpg",
            "style/icons/*.ico",
            "style/icons/*.png"
        ],
        dest: "public/manifest.appcache"
      }
    },
    copy: {
      webapp: {
        files: [{
          expand: false,
          src: 'public/manifest.webapp',
          dest: 'dist/manifest.webapp'
        }]
      },
      static_web: {
        files: [{
          expand: true,
          cwd: 'public/',
          src: '**',
          dest: 'dist/'
        }]
      }
    },
    rename: {
      webapp: {
        src: 'dist/manifest.webapp',
        dest: 'dist/update.webapp'
      },
      backup: {
        src: 'public/test',
        dest: 'dist/test'
      },
      restore: {
        src: 'dist/test',
        dest: 'public/test'
      }
    },
    zip: {
      dist: {
        expand: true,
        src: "public/**",
        dest: "dist/application.zip"
      }
    },
    clean: {
      dist: ['dist/'],
      test: ['dist/test']
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // https://github.com/jdcataldo/grunt-mocha-phantomjs
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  // https://npmjs.org/package/grunt-manifest
  grunt.loadNpmTasks('grunt-manifest');

  // used to generate package app
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-zip');

  // Default task(s).
  grunt.registerTask('default', ['mocha_phantomjs', 'manifest']);

  // generate static web
  grunt.registerTask('static', ['clean:dist', 'mocha_phantomjs', 'manifest',
          /*copy public folder*/'copy:static_web', 'clean:test']);

  // generate package app
  grunt.registerTask('pack', ['clean:dist', 'mocha_phantomjs', 'manifest',
              /*copy .webapp*/'copy:webapp', 'rename:webapp',
      /* not pack with test */'rename:backup', 'zip:dist', 'rename:restore']);
};