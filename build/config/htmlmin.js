/**
 * build.config.concat
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Config
  return {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      files: {
        'dist/index.html': 'source/index.html'
      }
    }
  };
};
