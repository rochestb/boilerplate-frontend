/**
 * build.config.scsslint
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-scss-lint');

  // Config
  return {
    allFiles: [
      config.css + '/**/*.scss',
      '!' + config.css + '/app/_vendor/*.scss'
    ]
  };
};
