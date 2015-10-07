/**
 * build.config.assemble
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config');

  // Load task
  grunt.loadNpmTasks('grunt-sass-globbing');

  var files = {};

  files[config.css + '/app/_functionsMap.scss'] = config.css + '/app/functions/**/*.scss';
  files[config.css + '/app/_mixinsMap.scss'] = config.css + '/app/mixins/**/*.scss';
  files[config.css + '/app/_fontsMap.scss'] = config.css + '/app/fonts/**/*.scss';
  files[config.css + '/app/_animationsMap.scss'] = config.css + '/app/animations/**/*.scss';
  files[config.css + '/app/_defaultsMap.scss'] = config.css + '/app/defaults/**/*.scss';
  files[config.css + '/app/_modulesMap.scss'] = config.css + '/app/modules/**/*.scss';
  files[config.css + '/app/_utilitiesMap.scss'] = config.css + '/app/utilities/**/*.scss';

  // Config
  return {
    dev: {
      files: files,
    },
    options: {
      useSingleQuotes: false
    }
  };
};