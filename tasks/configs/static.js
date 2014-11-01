/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  manifest: {
    generate: {
      options: {
        basePath: './<%= param.dst %>/',
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
      dest: '<%= param.dst %>/manifest.appcache'
    }
  },
  copy: {
    appcache: {
      files: [{
        expand: false,
        src: '<%= param.build %>/manifest.appcache',
        dest: '<%= param.dst %>/manifest.appcache'
      }]
    }
  },
  // client side test
  mocha_phantomjs: {
    all: ['<%= param.src %>/test/index.html']
  },
  fileExists: {
    static: [
      '<%= param.dst %>/manifest.json',
      '<%= param.dst %>/manifest.webapp',
      '<%= param.dst %>/js/app.min.js',
      '<%= param.dst %>/js/body.min.js',
      '<%= param.dst %>/style/app.min.css',
      '<%= param.dst %>/style/icons/icon128.png',
      '<%= param.dst %>/locales/manifest.json'
    ]
  }
};
