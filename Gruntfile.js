module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    mochacov: {
      test: {
        options: {
          reporter: 'spec'
        }
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          output: 'public/test/coverage.html'
        }
      },
      travis: {
        options: {
          coveralls: {
            serviceName: 'travis-ci',
            serviceJobId: process.env.TRAVIS_JOB_ID,
            repoToken: 'zbam4NOrmc9Wo8RkQXGfI9htPdlLRc2V6'
          }
        }
      },
      options: {
        files: ['public/test/unit/test.**'],
        ui: 'tdd'
      }
    },
    mocha_phantomjs: {
      all: ['public/test/index.html']
    },
    manifest: {
      generate: {
        options: {
          basePath: './public/',
          // cache: ['js/app.js', 'css/style.css'],
          // cachePrefix: '/',
          // network: ['http://*', 'https://*'],
          fallback: ['/ fallback.html'],
          // exclude: ['js/jquery.min.js'],
          preferOnline: true,
          verbose: false,
          timestamp: true
        },
        src: [
            '*.html',
            'js/*.js',
            'style/*.css',
            'style/images/*.png',
            'style/images/*.jpg',
            'style/icons/*.ico',
            'style/icons/*.png'
        ],
        dest: 'public/manifest.appcache'
      }
    },
    plato: {
      all: {
        files: {
          'public/test/reports': ['public/js/*.js']
        }
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
      },
      install_page: {
        files: [{
          expand: true,
          cwd: 'helper/',
          src: 'install.html',
          dest: 'dist/'
        }]
      }
    },
    rename: {
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
        cwd: 'public/',
        src: 'public/**',
        dest: 'dist/package.zip'
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
  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-manifest');
  grunt.loadNpmTasks('grunt-plato');

  // used to generate package app
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-zip');

  // Default task(s).
  grunt.registerTask('default', ['mochacov:test', 'manifest', 'plato', 'mochacov:coverage']);

  // generate static web
  grunt.registerTask('static', ['clean:dist', 'mocha_phantomjs', 'manifest',
          /*copy public folder*/'copy:static_web', 'clean:test', 'plato']);

  // generate package app
  grunt.registerTask('pack', ['clean:dist', 'mocha_phantomjs',
                /*copy files*/'copy:webapp', 'copy:install_page',
      /* not pack with test */'rename:backup', 'zip:dist', 'rename:restore', 'plato']);
};
