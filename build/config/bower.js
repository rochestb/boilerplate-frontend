/**
 * build.config.bower
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-bower');

  // Config
  return {

    dev: {
      dest: config.root,
      css_dest: config.css + '/libs',
      js_dest: config.js + '/libs',
      options: {
        ignorePackages: [
          'modernizr',
          'extra-strength-responsive-grids'
        ]/*,

        NOTE example on how to load package specific files
        packageSpecific: {
         'lodash': {
           files: [
            'dist/lodash.js'
           ]
         }
        }*/
      }
    }
  };
};
