/**
 * build.config.autoprefixer
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Config
  return {
    options: {
      browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    dev: {
      src: config.tmp + '/css/**/*.css'
    },

    dist: {}
  };
};
