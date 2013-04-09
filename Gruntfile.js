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
    }
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // https://npmjs.org/package/grunt-manifest
  grunt.loadNpmTasks('grunt-manifest');

  // Default task(s).
  grunt.registerTask('default', ['manifest']);

};