/**
 * build.config.compass
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Config
  return {
    options: {
      relativeAssets: true,
      sassDir: config.css,
      cssDir: '.tmp/css',
      importPath: [
        './bower_components',
        config.css + '/app'
      ],
      debugInfo: true,
      force: true,
      require: 'sass-globbing',
      sourcemap: true
    },

    dev: {},

    dist: {
      options: {
        debugInfo: false,
        outputStyle: 'compressed',
        cssDir: config.distCSS
      }
    }
  };
};
