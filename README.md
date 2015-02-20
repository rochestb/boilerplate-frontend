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
* [ruby](https://www.ruby-lang.org/en/)
* [bundler](http://bundler.io/)
* [sass](http://sass-lang.com/)
* [compass](compass-style.org)
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
* [Custom Tiles in IE11](https://msdn.microsoft.com/en-us/library/ie/dn455106%28v=vs.85%29.aspx) on MSDN, covers the use of browserconfig.xml in customizing the display of a pinned site in IE11/Win8+

### Modernizr

Boilerplate has a custom builder of Modernizr that will allow you to add your own tests. Please update `Gruntconfig.js` with tests that are needed instead of loading the whole development version.  See [https://github.com/Modernizr/grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) for more settings.

This approach will limit the Modernizr tests to only those needed for the project. As a benefit we prevent running every Modernizr test on every page load of the site.

### BrowserSync

[BroswerSync.io](http://www.browsersync.io/) is included as a grunt task to serve up the site, update it when changes are made, and assist in testing. It includes an additional UI with different toggles for testing. The URL for the UI is printed with the development URL when grunt serve is initially run.

## Grunt Tasks
All `:dev` grunt tasks are for local development and all `:dist` are used for distribution builds.

* `grunt serve` -  Will set up everything for local development including live reload
* `grunt dist` - Will compile the entired codebase for dev, stg, prod, or deliverable
* `grunt bowercopy` - Moves files installed via `bower install` to their correct locations
  * `grunt bowercopy:dev`
  * `grunt bowercopy:dist`
* `grunt browserSync:dev` - Serves up static files and displays local and external address
* `grunt clean` - Cleans up the `.tmp` and `dist` folders
  * `grunt clean:dev`
  * `grunt clean:dist`
* `grunt compass` - Compiles Sass files tp `.tmp/cssgen`.  Sets import path to include `bower_components`
  * `grunt compass:dev`
  * `grunt compass:dist`
* `grunt concat`*
* `grunt concurrent` - Runs multiple grunt tasks at the same time to speed up builds
  * `grunt concurrent:dev` - Fires off nothing atm
  * `grunt concurrent:dist` - Fires off `imagemin:dist`, `svgmin:dist`, `cssmin:dist`, `htmlmin:dist`
* `grunt copy` - Copies all needed files to correct locations
  * `grunt copy:dev`
  * `grunt copy:dist` - copies over `robots.txt` and `favicon.ico` to the `dist` folder
* `grunt htmlmin:dist` - Minifies html files from `source` and saves to `dist`
* `grunt imagemin:dist` - Minifies gif, jpeg, jpg, and png from `source` and saves to `dist`
* `grunt jscs` - Checks all JavaScript to ensure it all matches standards set in the `.jscs.json` file
* `grunt jshint` - Checks all JavaScript to ensure code quality
* `grunt lodash` - Builds a custom lodash file based on 
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

