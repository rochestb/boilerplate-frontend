/**
 * build.config.connect
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Config
  return {
    options: {
      port: 9000,
      open: true,
//      keepalive: true,
      livereload: 35729,
      // Change this to '0.0.0.0' to access the server from outside
      hostname: 'localhost'
    },
    dev: {
      options: {
        middleware: function(connect) {
          return [
            connect.static('.tmp'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(config.root)
          ];
        }
      }
    },
    dist: {
      options: {
        base: config.dist,
        livereload: false
      }
    },
    test: {
      options: {
        open: false,
        port: 9001,
        middleware: function(connect) {
          return [
            connect.static('.tmp'),
            connect.static('test'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(config.root)
          ];
        }
      }
    }
  };
};
