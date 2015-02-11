/**
 * build.config.githooks
 */
module.exports = function(grunt) {
  'use strict';

  // Load task
  grunt.loadNpmTasks('grunt-githooks');

  // Config
  return {
    options: { 
        hashbang: '#!/bin/sh',
        template: 'node_modules/grunt-githooks/templates/shell.hb',
        startMarker: '## GRUNT-GITHOOKS START',
        endMarker: '## GRUNT-GITHOOKS END',
        command: 'PATH='+process.env.PATH+' grunt',
        args: '--no-color'
    },

    all: {
      'pre-commit': 'test'
    }
  };
};
