/**
 * build.config.imagemin
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Config
  return {

    dev: {
      expand: true,
      cwd: config.images,
      src: ['**/*.{png,jpg,gif}'],
      dest: config.images
    },

    dist: {
      files: [{
        expand: true,
        cwd: config.images,
        src: '{,*/}*.{gif,jpeg,jpg,png}',
        dest: config.distImages
      }]
    }
  };
};