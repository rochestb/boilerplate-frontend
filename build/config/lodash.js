/**
 * build.config.lodash
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-lodash');

  // Config
  return {
    dev: {
      // output location
      'dest': config.js + '/lodash.js',
      'options': {
        // modifiers for prepared builds
        // modern, strict, compat
        // 'modifier': 'strict',
        category: [
          'collection',
          'array',
          'function'
        ],
        'shortFlags': [
          '-d'
        ]
      }
    }
  };
};
