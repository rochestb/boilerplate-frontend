define(function() {
  'use strict';

  /**
   * @function getBreakPoint
   * @returns {String} Returns the break point based on the css media queries
   *                    set in 00._globals.mq.scss
   * @example
   *    getBreakPoint();
   */
  return function getBreakPoint() {
    // When getComputedStyle isn't supported (IE8 and below)
    if (typeof window.getComputedStyle === 'function') {
      return window.getComputedStyle(document.body,':after')
      .getPropertyValue('content')
      // Remove quotes
      // IE11 and below return the string "s" instead of just s
      .replace(/\"/g,'');
    }
    // Always return 'm' as IE8 is using stripmq for the IE8+below css
    else {
      return 'm';
    }
  };
});
