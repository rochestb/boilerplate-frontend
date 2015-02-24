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
        open: true,
        server: {
          baseDir: '.tmp/',
          routes: {
            '/bower_components': 'bower_components',
            '/js': 'source/js',
            '/images': 'source/images'
          }
        },
        watchTask: true
      }
    },
    dist: {
      files: {
        src: 'dist/**',
      },
      options: {
        open: false,
        server: {
          baseDir: 'dist/'
        }
      }
    },
    test: {
    }
  };
};
