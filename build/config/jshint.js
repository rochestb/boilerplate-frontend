/**
 * build.config.jshint
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Config
  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },

    all: {
      src: [
        'Gruntfile.js',         // Grunt config files
        'build/config/**/*.js', // Grunt config files
        config.js + '/**/*.js',
        '!' + config.js + '/libs/**/*.js',
        '!' + config.js + '/lodash.js',
        '!' + config.js + '/jquery.js'
      ]
    }
  };
};
