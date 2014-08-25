/**
 * build.config.requirejs
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Config
  return {

    build: {
      options: {
        name: 'apps/master/app',
        findNestedDependencies: true,
        baseUrl: config.js + '/',
        mainConfigFile: config.js + '/main.js',
        out: config.jsmin + '/app.min.js',
        paths: {
          'settings': 'empty:',
          'master': 'empty:'
        }
      }
    }

  };
};
