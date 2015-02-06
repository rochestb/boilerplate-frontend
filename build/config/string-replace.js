/**
 * build.config.concat
 */
module.exports = function(grunt) {
  'use strict';

  // Load task
  grunt.loadNpmTasks('grunt-string-replace');

  // Config
  return {
    dev: {},
    dist: {
      // options: {
      //   replacements: [
      //     {
      //       pattern: 'app.css',
      //       replacement: 'app.min.css'
      //     }
      //   ]
      // },
      // files: {
      //   'dist/index.html': 'dist/index.html'
      // }
    }
  };
};
