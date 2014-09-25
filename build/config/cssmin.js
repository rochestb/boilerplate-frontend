/**
 * build.config.cssmin
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Config
  return {

    options: {
      report: 'min' // Report min by default
      //report: 'gzip' // Optionally report min and gzip'd
    },

    dist: {
      expand: true,
      cwd: '.tmp/styles/',
      src: ['**/*.css'],
      dest: './dist/styles/',
      ext: '.min.css'
    }

  };
};
