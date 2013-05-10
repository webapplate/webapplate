module.exports = function(grunt) {

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
      dist: {
        files: [{
          expand: true,
          src: 'public/manifest.webapp',
          dest: 'dist'
        }]
      }
    },
    rename: {
      webapp: {
        src: 'dist/manifest.webapp',
        dest: 'dist/update.webapp'
      }
    },
    zip: {
      dist: {
        expand: true,
        src: "public/**",
        dest: "dist/application.zip"
      },
      {
        expand: true,
        src: 'public/manifest.appcache',
        dest: 'dist'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
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
  // generate package app
  grunt.registerTask('pack', ['mocha_phantomjs', 'manifest', 'copy:dist', 'rename:webapp', 'zip:dist']);

};