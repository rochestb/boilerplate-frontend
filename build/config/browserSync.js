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
        src: [
          '.tmp/**',
          config.js + '/**'
        ]
      },
      options: {
        server: {
          baseDir: '.tmp/',
          routes: {
            '/bower_components': 'bower_components',
            '/js': 'source/js'
          }
        },
        watchTask: true
      }
    },
    test: {
    }
  };
};
