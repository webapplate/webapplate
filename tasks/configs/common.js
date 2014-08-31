/*jshint node: true */
/*global module, process */
'use strict';

module.exports.tasks = {
  // pkg: grunt.file.readJSON('package.json'),
  // Project settings
  config: {
    src: 'public',
    build: 'build',
    tmp: '.tmp',
    dst: 'dist',
    pack: 'pack'
  },
  karma: {
    unit: {
      configFile: 'karma.conf.js'
    }
  },
  mochacov: {
    options: {
      files: ['<%= config.src %>/test/unit/**_test.js'],
      ui: 'tdd'
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
    static: {
      files: [{ /* copy manifests */
        expand: false,
        src: '<%= config.src %>/manifest.webapp',
        dest: '<%= config.dst %>/manifest.webapp'
      },
      {
        expand: false,
        src: '<%= config.src %>/manifest.json',
        dest: '<%= config.dst %>/manifest.json'
      },
      { /* copy icons */
        expand: true,
        cwd: '<%= config.src %>/',
        src: 'style/icons/**/*',
        dest: '<%= config.dst %>/'
      },
      { /* copy images */
        expand: true,
        cwd: '<%= config.src %>/',
        src: 'style/images/**/*',
        dest: '<%= config.dst %>/'
      },
      { /* copy locales */
        expand: true,
        cwd: '<%= config.src %>/',
        src: 'locales/**/*',
        dest: '<%= config.dst %>/'
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
  clean: {
    dist: ['<%= config.dst %>/', '<%= config.tmp %>/',
    '<%= config.build %>/', '<%= config.pack %>/'],
    docs: ['docs/'],
    static: ['<%= config.dst %>/test']
  },
  jsdoc: {
    src: ['<%= config.src %>/js/*.js'],
    options: {
      destination: 'docs'
    }
  }
};
