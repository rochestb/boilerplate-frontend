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

    // should not be needed, here as a placeholder.  The only scenario where we
    // will need to add files here is if, during the requirejs build, it is 
    // deleting files you need that is outside the main app.
    dist: {}
  };
};
