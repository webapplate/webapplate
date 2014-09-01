/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  jshint: {
    utils: {
      jshintrc: true,
      src: [
        '*.js',
        'tasks/**/*.js',
        'config/**/*.js'
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
        'tasks/**/*.js',
        'config/**/*.js'
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
  csslint: {
    options: {
      csslintrc: '.csslintrc'
    },
    strict: {
      src: ['public/style/**/*.css']
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
  githooks: {
    all: {
      'pre-commit': 'lint'
    }
  }
};
