/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
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
    appcache: {
      files: [{
        expand: false,
        src: '<%= config.build %>/manifest.appcache',
        dest: '<%= config.dst %>/manifest.appcache'
      }]
    }
  },
  // client side test
  mocha_phantomjs: {
    all: ['<%= config.src %>/test/index.html']
  }
};
