/**
 * config
 */
module.exports = function() {
  'use strict';

  var config = { };

  config.root  = 'source';
  config.js    = config.root + '/js';
  config.jsmin = config.js   + '/min';
  config.tmpl  = config.root + '/templates'

  config.css    = config.root + '/css';
  config.cssgen = '.tmp/cssgen';
  config.cssmin = config.css  + '/min';

  config.images = config.root + '/images';

  config.dist = 'dist';
  config.distCSS = config.dist + '/css';
  config.distJS = config.dist + '/js';
  config.distImages = config.dist + '/images';

  config.jquery = {
    version: '1.11.1',
    exclude: 'ajax,effects',
    dest: config.js + '/jquery.js'
  };

  config.modernizr = {
    // https://github.com/Modernizr/modernizr.com/blob/gh-pages/i/js/modulizr.js#L15-157
    tests: [
      'svg',
      'inlinesvg'
    ],

    extra: {
      'shiv' : true,
      'printshiv' : false,
      'load' : true,
      'mq' : true,
      'cssclasses' : true
    },

    extensibility : {
      'addtest' : false,
      'prefixed' : false,
      'teststyles' : false,
      'testprops' : false,
      'testallprops' : false,
      'hasevents' : false,
      'prefixes' : false,
      'domprefixes' : false
    }
  };

  return config;
};
