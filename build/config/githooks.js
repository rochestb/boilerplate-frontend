/**
 * build.config.githooks
 */
module.exports = function(grunt) {
  'use strict';

  // Load task
  grunt.loadNpmTasks('grunt-githooks');

  // Config
  return {
    all: {
      'pre-commit': 'test'
    }
  };
};
