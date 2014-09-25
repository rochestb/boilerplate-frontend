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
          'extra-strength-responsive-grids',
          'normalize.scss'
        ],

        packageSpecific: {
         'lodash': {
            files: [
              'dist/lodash.js'
            ]
          }
        }
      }
    },

    dist: {
      dest: config.dist,
      css_dest: config.distCSS + '/libs',
      js_dest: config.distJS + '/libs',
      options: {
        ignorePackages: [
          'modernizr',
          'extra-strength-responsive-grids',
        ],

        packageSpecific: {
          'lodash': {
            files: [
              'dist/lodash.js'
            ]
          }
        }
      }
    }
  };
};
