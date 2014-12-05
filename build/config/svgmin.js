/**
 * build.config.svgmin
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-svgmin');

  // Config
  return {
    dev:{},
    dist: {
      files: [{
        expand: true,
        cwd: config.images,
        src: '{,*/}*.svg',
        dest: config.dist + '/images'
      }]
    }
  };
};
