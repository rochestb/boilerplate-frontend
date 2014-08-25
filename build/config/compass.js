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
    options:{
      importPath: [
       'bower_components'
      ]
    },

    all: {
      options: {
        relativeAssets: true,
        sassDir: config.css + '/app',
        cssDir: config.cssgen
      }
    }
  };
};
