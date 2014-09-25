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
      'devFile': 'bower_components/modernizr/modernizr.js',
      'outputFile': config.js + '/libs/modernizr.js',

      'extra': {
        'shiv' : true,
        'printshiv' : false,
        'load' : true,
        'mq' : false,
        'cssclasses' : true
      },

      'uglify': false,

      'parseFiles': false
    },
    dist: {
      'devFile': 'bower_components/modernizr/modernizr.js',
      'outputFile': config.distJS + '/libs/modernizr.js',

      'extra': {
        'shiv' : true,
        'printshiv' : false,
        'load' : true,
        'mq' : false,
        'cssclasses' : true
      },

      'uglify': true,

      'parseFiles': false
    }
  };
};
