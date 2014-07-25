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
        files: ['server.js', 'public/js/*.js'],
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
    dom_munger: {
      readcss: {
        options: {
          read: {
            selector: 'link',
            attribute: 'href',
            writeto: 'cssRefs',
            isPath: true
          }
        },
        src: 'public/index.html' //read from source index.html
      },
      readjs: {
        options: {
          read: {
            selector: 'script',
            attribute: 'src',
            writeto: 'jsRefs',
            isPath: true
          }
        },
        src: 'public/index.html'
      },
      cleancss: {
        options: {
          remove: 'link[href]'
        },
        src: 'dist/index.html' //read from source index.html
      },
      cleanjs: {
        options: {
          remove: 'script[src]'
        },
        src: 'dist/index.html'
      },
      updatecss: {
        options: {
          append: {
            selector: 'head',
            html: '<link rel="stylesheet" href="style/app.min.css">'
          }
        },
        src: 'dist/index.html' //update the dist/index.html
        // (the src index.html is copied there)
      },
      updatejs: {
        options: {
          append: {
            selector: 'body',
            html: '<script src="js/app.min.js"></script>'
          }
        },
        src: 'dist/index.html'
      }
    },
    cssmin: {
      main: {
        src: '<%= dom_munger.data.cssRefs %>',
        dest: 'dist/style/app.min.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      main: {
        src: '<%= dom_munger.data.jsRefs %>',
        dest: 'dist/js/app.min.js'
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
      all: {
        files: {
          'docs/report': ['public/js/*.js']
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
      staticWeb: {
        files: [{
          expand: true,
          cwd: 'public/',
          src: '**',
          dest: 'dist/'
        }]
      },
      installPage: {
        files: [{
          expand: true,
          cwd: 'helper/',
          src: 'install.html',
          dest: 'dist/'
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
      test: ['dist/test'],
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
          'server.js'
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
          'server.js'
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

  // generate static web
  grunt.registerTask('static', [
    'welcome', 'clean:dist', 'mocha_phantomjs', 'manifest',
    /*copy public folder*/
    'copy:staticWeb',
    /*parse css/js for minify*/
    'dom_munger:readcss', 'dom_munger:readjs',
    'dom_munger:cleancss', 'dom_munger:cleanjs',
    'cssmin:main', 'uglify:main',
    'dom_munger:updatecss', 'dom_munger:updatejs',
    /*append minified css/js*/
    'clean:test'
  ]);

  // generate package app
  grunt.registerTask('pack', [
    'welcome', 'clean:dist', 'mocha_phantomjs',
    /*copy files*/
    'copy:webapp', 'copy:installPage',
    /* not pack with test */
    'rename:backup', 'zip:dist',
    'rename:restore'
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
