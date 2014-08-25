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
  config.cssgen = config.css  + '/generated';
  config.cssmin = config.css  + '/min';

  config.images = config.root + '/images';

  return config;
};
