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

    dev: {
      src: '.tmp/css/app/app.css',
      dest: '.tmp/css/app/app.ie8.css'
    },

    dist: {
      src: config.distCSS + '/app.css',
      dest: config.distCSS + '/app.ie8.css'
    }

  };
};
