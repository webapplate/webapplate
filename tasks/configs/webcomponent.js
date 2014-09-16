/*jshint node: true */
/*global module */
'use strict';

module.exports.tasks = {
  vulcanize: {
    default: {
      options: {
        csp: true,
        inline: false,
        strip: false
      },
      files: {
        '<%= param.build %>/index-csp.html': '<%= param.build %>/index.html'
      }
    }
  },
  copy: {
    vulcanized: {
      options: {
        // move the csp js file into usemin block
        /*process: function (content, srcpath) {
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
              if (useminEnd > -1) {
                content = content
                  .substring(0, useminEnd) // end of useminComment
                  .concat('\n',
                    cspJs, // insert
                    '\n',
                    content.substring(useminEnd + 1) // after end of useminComment
                  );
              }
            }
          }
          moveToUsemin('<script src="index-csp.js"></script>');
          moveToUsemin('<script defer src="vendor/polymer/polymer.js"></script>');
          moveToUsemin('<script defer src="vendor/platform/platform.js"></script>');
          return content;
        }*/
      },
      src: '<%= param.build %>/index-csp.html',
      dest: '<%= param.build %>/index.html'
    },
    webComponent: {
      files: [{ /* copy vendor html and css */
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/**/*.html',
        dest: '<%= param.dst %>/'
      },
      {
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/**/*.css',
        dest: '<%= param.dst %>/'
      },
      { /* copy polymer and platform */
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/polymer/**/*',
        dest: '<%= param.dst %>/'
      },
      {
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'vendor/platform/**/*',
        dest: '<%= param.dst %>/'
      },
      {
        expand: true,
        cwd: '<%= param.src %>/',
        src: 'parts/**/*',
        dest: '<%= param.dst %>/'
      }]
    }
  },
  clean: {
    unvulcanized: ['<%= param.build %>/index.html'],
    vulcanized: ['<%= param.build %>/index-csp.html']
  }
};
