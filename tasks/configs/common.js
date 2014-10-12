/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  karma: {
    unit: {
      configFile: 'karma.conf.js'
    }
  },
  mochacov: {
    options: {
      files: ['<%= param.src %>/test/unit/**_test.js'],
      ui: 'tdd'
    }
  },
  htmlmin: {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= param.src %>',
        src: ['{,*/}*.html'],
        dest: '<%= param.dst %>'
      }]
    }
  },
  // Reads HTML for usemin blocks to enable smart builds
  // that automatically concat, minify and revision files.
  // Creates configurations in memory so additional tasks
  // can operate on them
  useminPrepare: {
    options: {
      dest: '<%= param.dst %>'
    },
    html: ['<%= param.build %>/index.html']
  },
  // Performs rewrites based on rev and the useminPrepare configuration
  usemin: {
    options: {
      assetsDirs: ['<%= param.dst %>'],
      debugInfo: true
    },
    html: ['<%= param.dst %>/{,*/}*.html'],
    css: ['<%= param.dst %>/styles/{,*/}*.css']
  },
  copy: {
    // Copies all files into build directory for vulcanization
    build: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= param.src %>',
        dest: '<%= param.build %>',
        src: ['**']
      }]
    },
    static: {
      files: [{ /* copy manifests */
        expand: false,
        src: '<%= param.src %>/manifest.webapp',
        dest: '<%= param.dst %>/manifest.webapp'
      },
      {
        expand: false,
        src: '<%= param.src %>/manifest.json',
        dest: '<%= param.dst %>/manifest.json'
      },
      { /* copy icons */
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'style/icons/**/*',
        dest: '<%= param.dst %>/'
      },
      { /* copy images */
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'style/images/**/*',
        dest: '<%= param.dst %>/'
      },
      { /* copy locales */
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'locales/**/*',
        dest: '<%= param.dst %>/'
      }]
    },
    backupFirefox: {
      files: [{
        expand: false,
        src: '<%= param.src %>/manifest.webapp',
        dest: '<%= param.src %>/manifest_webapp_backup'
      }]
    },
    firefox: {
      files: [{
        expand: false,
        src: '<%= param.src %>/manifest.webapp',
        dest: '<%= param.src %>/manifest.json'
      }]
    },
    backupChrome: {
      files: [{
        expand: false,
        src: '<%= param.src %>/manifest.json',
        dest: '<%= param.src %>/manifest_json_backup'
      }]
    },
    chrome: {
      files: [{
        expand: false,
        src: '<%= param.src %>/manifest.json',
        dest: '<%= param.src %>/manifest.webapp'
      }]
    }
  },
  clean: {
    dist: ['<%= param.dst %>/', '<%= param.tmp %>/',
    '<%= param.build %>/', '<%= param.pack %>/'],
    docs: ['docs/'],
    tests: ['<%= param.dst %>/test']
  },
  jsdoc: {
    src: ['<%= param.src %>/js/*.js'],
    options: {
      destination: 'docs'
    }
  }
};
