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

    css: {
      expand: true,
      cwd: config.css + '/concat/',
      src: ['**/*.css'],
      dest: config.cssmin + '/',
      ext: '.min.css'
    }

  };
};
