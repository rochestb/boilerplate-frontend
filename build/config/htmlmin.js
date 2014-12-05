/**
 * build.config.htmlmin
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Config
  return {
    dev: {},
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      files: {
        '<%= config.dist %>/index.html': config.root + '/index.html'
      }
    }
  };
};
