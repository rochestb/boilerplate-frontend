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

    all: {
      files: [
        // Grunt config
        'Gruntfile.js',
        'build/config/**/*.js',

        // JS
        config.js + '/**/*.js',
        '!' + config.js + '/**/*min.js',

        // CSS
        config.css + '/app/**/*.scss',

        // Images
        config.images + '/**/*.{png,jpg,gif}'
      ],

      tasks: ['default']
    }

  };
};
