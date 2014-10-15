/**
 * build.config.stripmq
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-stripmq');

  // Config
  return {

    options: {
      width: 1000,
      type: 'screen'
    },

    serve: {
      src: '.tmp/styles/app.css',
      dest: '.tmp/styles/app.ie8.min.css'
    },

    dist: {
      src: config.distCSS + '/app.min.css',
      dest: config.distCSS + '/app.ie8.min.css'
    }

  };
};