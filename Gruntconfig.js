/**
 * config
 */
module.exports = function() {
  'use strict';

  var config = { };

  config.root  = 'source';
  config.js    = config.root + '/js';
  config.jsmin = config.js   + '/min';

  config.css    = config.root + '/css';
  config.cssgen = '.tmp/cssgen';
  config.cssmin = config.css  + '/min';

  config.images = config.root + '/images';

  config.dist = 'dist';
  config.distCSS = config.dist + '/styles';
  config.distJS = config.dist + '/js';

  return config;
};
