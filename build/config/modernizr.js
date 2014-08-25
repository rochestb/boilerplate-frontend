/**
 * build.config.modernizr
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-modernizr');

  // Config
  return {
    dev: {
      //'devFile': 'bower_components/modernizr/modernizr.js',
      'outputFile': config.js + '/libs/modernizr.js',

      'extra': {
        'shiv' : true,
        'printshiv' : false,
        'load' : true,
        'mq' : true,
        'cssclasses' : true
      },

      'uglify': false,

      'parseFiles': false
    }
  };
};
