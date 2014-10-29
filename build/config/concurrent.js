/**
 * build.config.concurrent
 */
module.exports = function(grunt) {
  'use strict';

  // Load task
  grunt.loadNpmTasks('grunt-concurrent');

  // Config
  return {
    dev: [],

    dist: [
      'imagemin:dist',
      'svgmin:dist',
      'htmlmin:dist'
    ]
  };
};
