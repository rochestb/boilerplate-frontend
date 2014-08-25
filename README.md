#### Initial Setup

* Update project name in /README.md
* Update project name in /package.json

***

Project Name
===================

## Quick Start

* run `npm install && bower install && grunt build`
* run `grunt watch` while developing


## Development Notes

A few quick reminders as you are developing.

* When deleting .scss files make sure to run `grunt cleanup` or remove the /css/generated/ version of the deleted file
* Boilerplate contains the Underscore build of Lodash, so all [Lodash methods](http://lodash.com/docs) are available when required.
* [Accessibility checklist](http://a11yproject.com/checklist.html).
* [HTML5 Elements](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list) on MDN

### Modernizr

Boilerplate has a custom builder of Modernizr that will allow you to add your own tests. Please update `build/config/modernizr.js` with tests that are needed instead of loading the whole development version.  See [https://github.com/Modernizr/grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) for more settings.

This approach will limit the Modernizr tests to only those needed for the project. As a benefit we prevent running every Modernizr test on every page load of the site.

### Grunt Tasks

* `grunt` or `grunt default` : builds only newer files with [grunt-newer](https://www.npmjs.org/package/grunt-newer)
* `grunt watch` : runs the default task above, run this task while developing
* `grunt build` : similar to the default task without limiting newer files
* `grunt cleanup` : removes all generated files, then runs the build task above


***

### License
[GNU General Public License Version 3](http://www.gnu.org/licenses/gpl.html)
