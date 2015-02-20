/**
 * build.config.browserSync
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-browser-sync');

  // Config
  return {

    dev: {
      files: {
        src: '.tmp/*',
      },

      options: {
        watchTask: true,
        server: {
          baseDir: '.tmp/'
        }
      }
    },

    test: {
    }
  };
};
