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
      files: [
        {
          expand: true,     // Enable dynamic expansion.
          cwd: config.dist,      // Src matches are relative to this path.
          src: ['*.html'], // Actual pattern(s) to match.
          dest: config.dist,   // Destination path prefix.
          ext: '.html',   // Dest filepaths will have this extension.
          extDot: 'first'   // Extensions in filenames begin after the first dot
        }
      ]
    }
  };
};
