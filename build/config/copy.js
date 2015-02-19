/**
 * build.config.copy
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Config
  return {
    styles: {
      expand: true,
      dot: true,
      cwd: config.css,
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    },

    dev: {},

    dist: {
      files: [
        {
          expand: true,
          cwd: config.root,
          src: [
            'robots.txt',
            'favicon.ico',
            'css/fonts/**/*',
            '/js/lodash.js',
            '/js/jquery.js',
            'browserconfig.xml'
          ],
          dest: config.dist
        }
      ]
    }
  };
};
