/**
 * build.config.jscs
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-jscs');

  // Config
  return {
    all: {
      files: {
        src: [
          config.js + '/**/*.js',
          '!' + config.js + '/libs/**/*.js',
          '!' + config.js + '/lodash.js',
          '!' + config.js + '/jquery.js'
        ]
      },
      options: {
        config: '.jscs.json'
      }
    }
  };
};
