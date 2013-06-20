module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
            read: {selector: 'link', attribute: 'href', writeto: 'cssRefs', isPath: true},
        },
        src: 'public/index.html' //read from source index.html
      },
      readjs: {
        options: {
          read: {selector: 'script', attribute: 'src', writeto: 'jsRefs', isPath: true},
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
          append: {selector:'head',html:'<link rel="stylesheet" href="style/app.min.css">'}
        },
        src:'dist/index.html'  //update the dist/index.html (the src index.html is copied there)
      },
      updatejs: {
        options: {
          append: {selector:'body',html:'<script src="js/app.min.js"></script>'}
        },
        src: 'dist/index.html'
      }
    },
    cssmin: {
      main: {
        src:'<%= dom_munger.data.cssRefs %>',
        dest:'dist/style/app.min.css'
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

  // Load the plugin that provides tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-manifest');
  grunt.loadNpmTasks('grunt-dom-munger');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-plato');

  // used to generate package app
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-zip');

  // Default task(s).
  grunt.registerTask('default', ['mochacov:test', 'manifest', 'plato']);

  // generate static web
  grunt.registerTask('static', ['clean:dist', 'mocha_phantomjs', 'manifest',
          /*copy public folder*/'copy:static_web',
          /*parse css/js for minify*/
                                'dom_munger:readcss', 'dom_munger:readjs',
                                'dom_munger:cleancss', 'dom_munger:cleanjs',
                                'cssmin:main', 'uglify:main',
                                'dom_munger:updatecss', 'dom_munger:updatejs',
          /*append minified css/js*/
                                'clean:test', 'plato']);

  // generate package app
  grunt.registerTask('pack', ['clean:dist', 'mocha_phantomjs',
                /*copy files*/'copy:webapp', 'copy:install_page',
      /* not pack with test */'rename:backup', 'zip:dist', 'rename:restore', 'plato']);
};
