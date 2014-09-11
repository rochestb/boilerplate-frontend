/*jshint maxstatements:false */
/**
 * build.config
 */
module.exports = function(grunt) {
  'use strict';

  // Define grunt config option
  grunt.config.set('config', require('./Gruntconfig')());

  // Load project configuration
  require('grunt-config-dir')(grunt, {
    configDir: require('path').resolve('build/config')
  });

  // Measures the time each task takes
  require('time-grunt')(grunt);

  /**
   * Default task
   */
  grunt.registerTask('default', [
    // CSS
    'compass:all',      // run compass to process scss
    'concat:css',       // concatenate processed css
    'cssmin:css',       // minify concatenated css
    'clean:concatcss',  // delete the concatenated css directory/file

    // JS
    'newer:jshint:all', // run jshint to lint js
    'requirejs:build',  // run require to build and minify js

    // Images
    'newer:imagemin:images' // minify images
  ]);

  /**
   * Build task
   *
   * A full Grunt build of the project.
   * Same task as default without the 'newer' prefix so all files are processed
   */
  grunt.registerTask('build', [
    // CSS
    'compass:all',     // run compass to process scss
    'concat:css',      // concatenate processed css
    'cssmin:css',      // minify concatenated css
    'clean:concatcss', // delete the concatenated css directory/file

    // JS
    'jshint:all',      // run jshint to lint js
    'requirejs:build', // run require to build and minify js

    // Images
    'imagemin:images'  // minify images
  ]);

  /**
   * Cleanup tasks
   *
   * Remove the processed Sass CSS files and require minified js then run the
   * build task
   */
  grunt.registerTask('cleanup', ['clean:generated', 'build']);

};
