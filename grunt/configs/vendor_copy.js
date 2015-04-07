/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  copy: {
    vendor: {
      files: [{ // bootstrap css
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/bootstrap/dist/css/*.min.css',
        dest: '<%= param.dst %>/'
      },
      { // bootstrap fonts
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/bootstrap/dist/fonts/*',
        dest: '<%= param.dst %>/'
      },
      { // bootstrap material design css
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/bootstrap-material-design/dist/css/*.min.css',
        dest: '<%= param.dst %>/'
      },
      { // bootstrap material design fonts, remove .woff to support < ie9
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/bootstrap-material-design/dist/fonts/*.woff',
        dest: '<%= param.dst %>/'
      }
      /*,{ // font awesome
        expand: false,
        src: '<%= param.src %>/vendor/font-awesome/css/font-awesome.min.css',
        dest: '<%= param.dst %>/vendor/font-awesome/css/font-awesome.min.css'
      },
      {
        expand: false,
        src:
          '<%= param.src %>/vendor/font-awesome/font/fontawesome-webfont.woff',
        dest:
          '<%= param.dst %>/vendor/font-awesome/font/fontawesome-webfont.woff'
      }*/
      ]
    }
  }
};
