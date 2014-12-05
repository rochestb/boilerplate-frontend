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

  grunt.registerTask(
    'serve',
    'start the server and preview your app, --allow-remote for remote access',
    function(target) {

    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:dev',
      'bowercopy:dev',
      'compass:dev',
      'concurrent:dev',
      'modernizr:dev',
      'stripmq:dev',
      'connect:dev',
      'watch'
    ]);
  });

  grunt.registerTask('dist', 'build all static files', [
    'clean:dist',
    'bowercopy:dev',
    'compass:dist',
    'concurrent:dist',
    'copy:dist',
    'modernizr:dist',
    'requirejs:dist',
    'string-replace:dist',
  ]);

  grunt.registerTask('test', 'run all the test', [
    'jshint',
    'jscs',
    'scsslint'
  ]);
};
