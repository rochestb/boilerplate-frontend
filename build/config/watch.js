/**
 * build.config.watch
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Config
  return {
    options: {
      livereload: true
    },

    rebuild: {
      tasks: [],
      files: [
        'Gruntfile.js',
        'Gruntconfig.js',
        'build/config/**/*.js'
      ]
    },

    js: {
      files: [
        'Gruntfile.js',
        'Gruntconfig.js',
        'build/config/**/*.js',
        config.js + '/**/*.js',
        '!' + config.js + '/libs/*.js'
      ],
      tasks: [
        'jshint',
        'jscs'
      ]
    },

    css: {
     files: [
       config.css + '/**/*'
     ],
      tasks: [
        'compass:dev',
        'stripmq:dev'
      ]
    },

    assemble: {
      files: [
        config.tmpl + '/**/*'
      ],
      tasks: [
        'assemble:dev'
      ]
    }
  };
};
