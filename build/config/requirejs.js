/**
 * build.config.requirejs
 */
module.exports = function(grunt) {
  'use strict';

  var config = grunt.config.get('config'),
      // list all your exludes
      exclude = [],
      // takes an array of modules you don't want excluded and removes
      // from the exclude list.  This is used in the excludeShallow param
      removeExcludes = function removeExcludes(excludesToRemove) {
        var localExcludes = exclude.slice(0),
            i = excludesToRemove.length;

        while (i--) {
          var index = localExcludes.indexOf(excludesToRemove[i]);
          if (index > -1) {
            localExcludes.splice(index, 1);
          }
        }

        return localExcludes;
      },
      //http://stackoverflow.com/questions/4994201/is-object-empty
      isEmpty = function isEmpty(obj) {
        // null and undefined are "empty"
        if (obj === null) {
          return true;
        }

        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length && obj.length > 0) {
          return false;
        }

        if (obj.length === 0) {
          return true;
        }

        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and toValue enumeration bugs in IE < 9
        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            return false;
          }
        }

        return true;
      };

  // Load task
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Config
  return {
    dist: {
      options: {
        baseUrl: config.js,
        mainConfigFile: config.js + '/main.js', // TODO change to match the
                                                // config for this project
        //*
        optimize: 'uglify2',
        /*/
        optimize: 'none',
        //*/
        dir: config.distJS,
        preserveLicenseComments: false,
        removeCombined: true,
        useStrict: true,
        wrapShim: true,
        paths: {
          settings: 'empty:'
        },
        modules: [
          {
            name: 'main',
            excludeShallow: removeExcludes([])
          }
        ],
        done: function(done, output) {
          var duplicates = require('rjs-build-analysis').duplicates(output),
              msg = 'r.js built duplicate modules, ' +
                    'please check the excludes option.';

          grunt.log.subhead('requirejs build:');
          grunt.log.write(output);

          if (!isEmpty(duplicates)) {
            grunt.log.subhead('Duplicates found in requirejs build:');
            grunt.log.warn(duplicates);
            return done(new Error(msg));
          }

          done();
        }
      }
    }
  };
};
