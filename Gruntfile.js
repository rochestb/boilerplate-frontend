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
    function() {

    grunt.task.run([
      'clean:dev',
      'jquery',
      'bowercopy:dev',
      'compass:dev',
      'concurrent:dev',
      'lodash',
      'modernizr:dev',
      'stripmq:dev',
      'assemble:dev',
      'browserSync:dev',
      'watch'
    ]);
  });

  grunt.registerTask('dist', 'build all static files', [
    'clean:dist',
    'jquery',
    'bowercopy:dev',
    'compass:dist',
    'assemble:dist',
    'concurrent:dist',
    'lodash',
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

  /**
   * Custom build jQuery based on configs in Gruntconfig.js
   */
  grunt.registerTask(
    'jquery',
    'Build a custom jQuery',
    function() {
      grunt.log.writeln('Starting the jQuery Build Process');

      var done = this.async(),
          jquery = grunt.config.get('config').jquery,
          exec = require('child_process').exec,
          command = 'node node_modules/jquery-builder/bin/builder.js ' +
                    '-v ' + jquery.version + ' ' +
                    '--exclude ' + jquery.exclude +
                    ' > ' + jquery.dest,
          child;

      grunt.log.writeln('Execute the jQuery Build Process');

      child = exec(
        command,
        function (error) {
          if (error !== null) {
            grunt.log.error('exec error: ' + error);
          } else {
            grunt.log.writeln('jQuery Build Process was successful');
          }

          done();
        }
      );
    }
  );
};
