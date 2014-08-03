module.exports = function(grunt) {
  'use strict';

  // measures the time each task takes
  require('time-grunt')(grunt);

  // Load the plugin that provides tasks.
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        port: 8000
      },
      dev: {
        options: {
          script: 'server.js'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },
    watch: {
      express: {
        files: ['server.js', 'public/js/*.js', 'routes/**/*.js'],
        tasks: ['express:dev'],
        options: {
          livereload: true, //reloads the browser
          spawn: false
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
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
            repoToken: '9Lqs288pJNb4aYw10BdWnjdJ5Vbx1zZM7'
          }
        }
      },
      options: {
        files: ['public/test/unit/**_test.js'],
        ui: 'tdd'
      }
    },
    mocha_phantomjs: {
      all: ['public/test/index.html']
    },
    htmlmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['*.html'],
          dest: 'dist'
        }]
      }
    },
    // Reads HTML for usemin blocks to enable smart builds
    // that automatically concat, minify and revision files.
    // Creates configurations in memory so additional tasks
    // can operate on them
    useminPrepare: {
      html: ['public/index.html'],
      options: {
        dest: 'dist'
      }
    },
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['dist/{,*/}*index.html'],
      options: {
        assetsDirs: ['dist'],
        debugInfo: true
      }
    },
    manifest: {
      generate: {
        options: {
          basePath: './public/',
          // cache: ['js/server.js', 'css/style.css'],
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
      client: {
        files: {
          'docs/report': ['public/js/*.js']
        }
      }
    },
    copy: {
      static: {
        files: [{
          expand: false,
          src: 'public/manifest.webapp',
          dest: 'dist/manifest.webapp'
        },
        {
          expand: false,
          src: 'public/manifest.json',
          dest: 'dist/manifest.json'
        },
        {
          expand: true,
          cwd: 'public/',
          src: 'style/icons/**/*',
          dest: 'dist/'
        },
        {
          expand: true,
          cwd: 'public/',
          src: 'style/images/**/*',
          dest: 'dist/'
        },
        {
          expand: true,
          cwd: 'public/',
          src: 'locales/**/*',
          dest: 'dist/'
        }]
      },
      appcache: {
        files: [{
          expand: false,
          src: 'public/manifest.appcache',
          dest: 'dist/manifest.appcache'
        }]
      },
      installPage: {
        files: [{
          expand: true,
          cwd: 'helper/',
          src: 'install.html',
          dest: 'pack/'
        }]
      },
      backupFirefox: {
        files: [{
          expand: false,
          src: 'public/manifest.webapp',
          dest: 'public/manifest_webapp_backup'
        }]
      },
      firefox: {
        files: [{
          expand: false,
          src: 'public/manifest.webapp',
          dest: 'public/manifest.json'
        }]
      },
      backupChrome: {
        files: [{
          expand: false,
          src: 'public/manifest.json',
          dest: 'public/manifest_json_backup'
        }]
      },
      chrome: {
        files: [{
          expand: false,
          src: 'public/manifest.json',
          dest: 'public/manifest.webapp'
        }]
      }
    },
    zip: {
      dist: {
        cwd: 'dist/',
        src: 'dist/**',
        dest: 'pack/package.zip'
      }
    },
    clean: {
      dist: ['dist/', 'pack/', '.tmp/'],
      docs: ['docs/']
    },
    jsdoc: {
      src: ['public/js/*.js'],
      options: {
        destination: 'docs'
      }
    },
    jshint: {
      utils: {
        jshintrc: true,
        src: [
          '*.js',
          'tasks/**/*.js'
        ]
      },
      server: {
        jshintrc: true,
        src: [
          'server.js',
          'routes/**/*.js'
        ]
      },
      client: {
        jshintrc: true,
        src: [
          'public/**/*.js'
        ]
      }
    },
    jscs: {
      options: {
        config: '.jscsrc'
      },
      utils: {
        src: [
          '*.js',
          'tasks/**/*.js'
        ]
      },
      server: {
        src: [
          'server.js',
          'routes/**/*.js'
        ]
      },
      client: {
        src: [
          'public/**/*.js'
        ]
      }
    },
    jsonlint: {
      files: {
        src: [
          'public/manifest.webapp',
          'public/manifest.json',
          'public/**..json'
        ]
      }
    },
    sloc: {
      client: {
        files: {
          './': [
            'public/*.html',
            'public/js/*.js',
            'public/style/*.css',
            'public/parts/*.html',
            'public/parts/*.js',
            'public/parts/*.css',
            'public/test/unit/*.js'
          ]
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['welcome', 'mochacov:test']);

  // Server
  grunt.registerTask('server', ['express:dev', 'watch']);

  grunt.registerTask('optimize', [
    'welcome', 'clean:dist', 'mocha_phantomjs',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'htmlmin',
    'usemin'
  ]);

  // generate static web to dist/
  grunt.registerTask('static', [
    'optimize',
    'manifest',
    'copy:appcache',
    'copy:static'
  ]);

  // generate package app to pack/
  grunt.registerTask('pack', [
    'optimize',
    'copy:installPage',
    'copy:static',
    'zip:dist'
  ]);

  // copy firefox webapp manifest to chrome webapp json
  grunt.registerTask('f2c', [
    'welcome', 'copy:backupChrome', 'copy:firefox'
  ]);
  // copy chrome webapp json to firefox webapp manifest
  grunt.registerTask('c2f', [
    'welcome', 'copy:backupFirefox', 'copy:chrome'
  ]);

  // generate docs
  grunt.registerTask('docs', [
    'welcome', 'clean:docs', 'jshint', 'jscs', 'sloc', 'jsdoc', 'plato'
  ]);
};
