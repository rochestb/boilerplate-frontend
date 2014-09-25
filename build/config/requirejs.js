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
    // TODO hook up this thing
    dist: {
      options: {
        baseUrl: "path/to/base",
        mainConfigFile: "path/to/config.js",
        done: function(done, output) {
          var duplicates = require('rjs-build-analysis').duplicates(output);

          if (duplicates.length > 0) {
            grunt.log.subhead('Duplicates found in requirejs build:');
            grunt.log.warn(duplicates);
            return done(new Error('r.js built duplicate modules, please check the excludes option.'));
          }

          done();
        }
      }
    }

  };
};
