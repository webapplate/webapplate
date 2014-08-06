module.exports = function(grunt) {
  'use strict';

  // measures the time each task takes
  require('time-grunt')(grunt);

  // Load the plugin that provides tasks.
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');

  // Configurable paths
  var config = {
    src: 'public',
    build: 'build',
    tmp: '.tmp',
    dst: 'dist',
    pack: 'pack'
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Project settings
    config: config,
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
        files: ['server.js', '<%= config.src %>/js/**/*.js', 'routes/**/*.js'],
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
          output: '<%= config.src %>/test/coverage.html'
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
        files: ['<%= config.src %>/test/unit/**_test.js'],
        ui: 'tdd'
      }
    },
    mocha_phantomjs: {
      all: ['<%= config.src %>/test/index.html']
    },
    vulcanize: {
      default: {
        options: {
          csp: true,
          inline: false,
          strip: false
        },
        files: {
          '<%= config.build %>/index-csp.html': '<%= config.build %>/index.html'
        }
      }
    },
    htmlmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['{,*/}*.html'],
          dest: '<%= config.dst %>'
        }]
      }
    },
    // Reads HTML for usemin blocks to enable smart builds
    // that automatically concat, minify and revision files.
    // Creates configurations in memory so additional tasks
    // can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dst %>'
      },
      html: ['<%= config.build %>/index.html']
    },
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.dst %>'],
        debugInfo: true
      },
      html: ['<%= config.dst %>/{,*/}*.html'],
      css: ['<%= config.dst %>/styles/{,*/}*.css']
    },
    manifest: {
      generate: {
        options: {
          basePath: './<%= config.dst %>/',
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
        dest: '<%= config.dst %>/manifest.appcache'
      }
    },
    copy: {
      // Copies all files into build directory for vulcanization
      build: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.src %>',
          dest: '<%= config.build %>',
          src: ['**']
        }]
      },
      vulcanized: {
        options: {
          // move the csp js file into usemin block
          process: function (content, srcpath) {
            var useminComment = 'build:js js/app.min.js';
            function moveToUsemin(script) {
              // extract the csp js script line
              var cspStart = content.indexOf(script);
              if (cspStart > -1) {
                var cspEnd   = cspStart + script.length;
                var cspJs = content.slice(cspStart, cspEnd); // CR

                // cut it out
                content = content.substring(0, cspStart - 1)
                  .concat(content.substring(cspEnd));

                // insert it into the usemin block
                var useminEnd = content.indexOf(useminComment) +
                  useminComment.length; // next line
                content = content
                  .substring(0, useminEnd) // end of useminComment
                  .concat('\n',
                    cspJs, // insert
                    '\n',
                    content.substring(useminEnd + 1) // after end of useminComment
                  );
              }
            }
            moveToUsemin('<script src="index-csp.js"></script>');
            moveToUsemin('<script src="vendor/polymer/polymer.js"></script>');
            moveToUsemin('<script src="vendor/platform/platform.js"></script>');
            return content;
          }
        },
        src: '<%= config.build %>/index-csp.html',
        dest: '<%= config.build %>/index.html'
      },
      static: {
        files: [{
          expand: false,
          src: '<%= config.build %>/manifest.webapp',
          dest: '<%= config.dst %>/manifest.webapp'
        },
        {
          expand: false,
          src: '<%= config.build %>/manifest.json',
          dest: '<%= config.dst %>/manifest.json'
        },
        {
          expand: true,
          cwd: '<%= config.build %>/',
          src: 'style/icons/**/*',
          dest: '<%= config.dst %>/'
        },
        {
          expand: true,
          cwd: '<%= config.build %>/',
          src: 'style/images/**/*',
          dest: '<%= config.dst %>/'
        },
        {
          expand: true,
          cwd: '<%= config.build %>/',
          src: 'locales/**/*',
          dest: '<%= config.dst %>/'
        }]
      },
      appcache: {
        files: [{
          expand: false,
          src: '<%= config.build %>/manifest.appcache',
          dest: 'dist/manifest.appcache'
        }]
      },
      installPage: {
        files: [{
          expand: true,
          cwd: 'helper/',
          src: 'install.html',
          dest: '<%= config.pack %>/'
        }]
      },
      backupFirefox: {
        files: [{
          expand: false,
          src: '<%= config.src %>/manifest.webapp',
          dest: '<%= config.src %>/manifest_webapp_backup'
        }]
      },
      firefox: {
        files: [{
          expand: false,
          src: '<%= config.src %>/manifest.webapp',
          dest: '<%= config.src %>/manifest.json'
        }]
      },
      backupChrome: {
        files: [{
          expand: false,
          src: '<%= config.src %>/manifest.json',
          dest: '<%= config.src %>/manifest_json_backup'
        }]
      },
      chrome: {
        files: [{
          expand: false,
          src: '<%= config.src %>/manifest.json',
          dest: '<%= config.src %>/manifest.webapp'
        }]
      }
    },
    zip: {
      pack: {
        cwd: '<%= config.dst %>/',
        src: '<%= config.dst %>/**',
        dest: '<%= config.pack %>/package.zip'
      }
    },
    clean: {
      dist: ['<%= config.dst %>/', '<%= config.tmp %>/',
        '<%= config.build %>/', '<%= config.pack %>/'],
      unvulcanized: ['<%= config.build %>/index.html'],
      vulcanized: ['<%= config.build %>/index-csp.html'],
      docs: ['docs/']
    },
    plato: {
      client: {
        files: {
          'docs/report': ['public/js/*.js']
        }
      }
    },
    jsdoc: {
      src: ['<%= config.src %>/js/*.js'],
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
          '<%= config.src %>/**/*.js'
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
          '<%= config.src %>/**/*.js'
        ]
      }
    },
    jsonlint: {
      files: {
        src: [
          '<%= config.src %>/manifest.webapp',
          '<%= config.src %>/manifest.json',
          '<%= config.src %>/**/*.json'
        ]
      }
    },
    sloc: {
      client: {
        files: {
          './': [
            '<%= config.src %>/*.html',
            '<%= config.src %>/js/*.js',
            '<%= config.src %>/style/*.css',
            '<%= config.src %>/parts/**/*.html',
            '<%= config.src %>/parts/**/*.js',
            '<%= config.src %>/parts/**/*.css',
            '<%= config.src %>/test/unit/*.js'
          ]
        }
      },
      server: {
        files: {
          './': [
            'server.js',
            'routes/**/*.js',
            'views/**/*.html'
          ]
        }
      }
    },
    'gh-pages': {
      options: {
        base: '<%= config.dst %>'
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
    'copy:build',
    'vulcanize', // index.html -> index-csp.html/index-csp.js
    'clean:unvulcanized', // rm index.html
    'copy:vulcanized', // index-csp.html -> index.html & move script element
    'clean:vulcanized', // rm index-csp.html
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
    'zip:pack'
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
