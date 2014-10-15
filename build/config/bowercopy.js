/**
 * build.config.bowercopy
 */
module.exports = function(grunt) {
  /*jshint camelcase: false */
  'use strict';

  var config = grunt.config.get('config'),
      jslibs =  config.js + '/libs';

  // Load task
  grunt.loadNpmTasks('grunt-bowercopy');

  // Config
  return {
    dev: {
      options: {
        destPrefix: jslibs
      },
      files: {
        'jquery': 'jquery:main',
        'lodash': 'lodash:main',
        'requirejs/requirejs.js': 'requirejs:main'
      }
    },

    dist: {}
  };
};
