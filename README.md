[remove]

#### Initial Setup
This set up is for static sites and not initailly set up to handle dynamic sites.  It can be retro fitted to make that happen, but it is not the case now.

* Update project name in /README.md
* Update project name in /package.json

***
[/remove]

[Project Name]
===================

[ADD SHORT DISCRIPTION OF PROJECT]

## Requirements
* [node.js](http://nodejs.org/)
* [grunt](http://gruntjs.com)

## Quick Start

* run `npm install -g grunt grunt-cli` (can skip if you've already got them installed)
* run `npm install` (you may need to do `sudo npm install` due to the execSync module)
* run `grunt serve` while developing (see below for info on `grunt serve`)


## Development Notes

A few quick reminders as you are developing.

* Absolutely no compiled files should be committed to git.  If a compiled file is showing in `git status`, add it to the ignore file.
* Use bower for all libraries accessible via git.  Using `grunt bowercopy:dev` or `grunt bowercopy:dist` will move those libraries' assets to the correct location.
* `bower_components` is an import path for SASS/Compass.
* Boilerplate contains Lodash and not Underscore or Lodash version of Underscore, so all [Lodash methods](http://lodash.com/docs) are available when required.
* [Accessibility checklist](http://a11yproject.com/checklist.html).
* [HTML5 Elements](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list) on MDN

### Modernizr

Boilerplate has a custom builder of Modernizr that will allow you to add your own tests. Please update `Gruntconfig.js` with tests that are needed instead of loading the whole development version.  See [https://github.com/Modernizr/grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) for more settings.

This approach will limit the Modernizr tests to only those needed for the project. As a benefit we prevent running every Modernizr test on every page load of the site.

## Grunt Tasks
All `:dev` grunt tasks are for local development and all `:dist` are used for distribution builds.

* `grunt bowercopy` - Moves files installed via `bower install` to their correct locations
  * `grunt bowercopy:dev`
  * `grunt bowercopy:dist`
* `grunt clean` - Cleans up the `.tmp` and `dist` folders
  * `grunt clean:dev`
  * `grunt clean:dist`
* `grunt sass` - Compiles Sass files tp `.tmp/css`.  Sets import path to include `bower_components`
  * `grunt sass:dev`
  * `grunt sass:dist`
* `grunt concat`*
* `grunt concurrent` - Runs multiple grunt tasks at the same time to speed up builds
  * `grunt concurrent:dev` - Fires off nothing atm
  * `grunt concurrent:dist` - Fires off `imagemin:dist`, `svgmin:dist`, `cssmin:dist`, `htmlmin:dist`
* `grunt connect:dev` - Sets up a local server
* `grunt copy` - Copies all needed files to correct locations
  * `grunt copy:dev`
  * `grunt copy:dist` - copies over `robots.txt` and `favicon.ico` to the `dist` folder
* `grunt htmlmin:dist` - Minifies html files from `source` and saves to `dist`
* `grunt imagemin:dist` - Minifies gif, jpeg, jpg, and png from `source` and saves to `dist`
* `grunt jscs` - Checks all JavaScript to ensure it all matches standards set in the `.jscs.json` file
* `grunt jshint` - Checks all JavaScript to ensure code quality
* `grunt modernizr` - Builds out a lean version of Modernizr based on the settings found in `Gruntconfig.js`
  * `grunt modernizr:dev` - Compiles modernizr based on the `Gruntconfig.js`
  * `grunt modernizr:dist` - Compiles modernizr based on the `Gruntconfig.js` but uglified
* `grunt requirejs` - Runs through all JavaScript files and merges all dependencies to a single file.  *As the project grows, modules should be created to lesson the chances of have large JavaScript files*
* `grunt svgmin:dist` - Minifies svg from `source` and saves to `dist`
* `grunt usebanner` - adds a banner to the top of each file that is created*
  * `grunt usebanner:distjs` - adds a banner to JavaScript files
  * `grunt usebanner:distcss` - adds a banner to CSS files
  * `grunt usebanner:disthtml` - adds a banner to HTML files

\* Not implimented in `Gruntfile.js`
***

### License
[GNU General Public License Version 3](http://www.gnu.org/licenses/gpl.html)
