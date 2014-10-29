/**
 * build.config.clean
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-modernizr');

  // Config
  return {
    dev: {
      'outputFile': config.js + '/libs/modernizr.js',

      'extra': config.modernizr.extra,

      'extensibility': config.modernizr.extensibility,

      'uglify': false,

      'parseFiles': false,

      'tests': config.modernizr.tests
    },

    dist: {
      'devFile': 'bower_components/modernizr/modernizr.js',
      'outputFile': config.distJS + '/libs/modernizr.js',

      'extra': config.modernizr.extra,

      'extensibility': config.modernizr.extensibility,

      'uglify': true,

      'parseFiles': false,

      'tests': config.modernizr.tests
    }
  };
};
