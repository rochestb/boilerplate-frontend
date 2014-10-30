/**
 * build.config.usebanner
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config'),
      pkg = grunt.file.readJSON('package.json'),
      banner;

  banner = pkg.name + ' - version ' + pkg.version +
           '<%= grunt.template.today("dd-mm-yyyy") %>\n';

  // Load task
  grunt.loadNpmTasks('grunt-banner');

  // Config
  return {
    distjs: {
      options: {
        position: 'top',
        banner: '/* <%= banner %> */\n'
      },
      files: {
        src: [
          config.distJS + '/main.js',
          config.distJS + '/apps/*.js',
          config.distJS + '/modules/*.js'
        ]
      }
    },
    distcss: {
      options: {
        position: 'top',
        banner: '/* <%= banner %> */\n'
      },
      files: {
        src: [
          config.distCSS + '/**/*.min.css'
        ]
      }
    },
    disthtml: {
      options: {
        position: 'top',
        banner: '<!-- <%= banner %> -->\n'
      },
      files: {
        src: [
          config.dist + '/*.html'
        ]
      }
    }
  };
};
