
/**
 * build.config.sass
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config'),
      sourceSassFile = config.css + '/app/app.scss',
      distCssFile = config.distCSS + '/app/app.css';

  // Load task
  grunt.loadNpmTasks('grunt-sass');

  // Config
  var sassConfig = {
  	options: {
      sourceMap: true,
      outputStyle: 'expanded',
      includePaths: [
        './bower_components',
        './bower_components/compass-mixins/lib'
      ],
      force: true
    },

    dev: {
  		files: {
  			'.tmp/css/app/app.css': sourceSassFile
  		}
    },

    dist: {
			outputStyle: 'compressed',
			files: {}
    }
  };

  sassConfig.dist.files[distCssFile] = sourceSassFile;

  return sassConfig;
};