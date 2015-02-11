# Templates
[Assemble](http://assemble.io/) is being used for the templates.  Assemble uses [handlebarsjs](http://handlebarsjs.com/).

## Structure
The root folder for the templates is `source/templates/`.

* `_data` houses all the .json files.  How the json files work can be found [here](http://assemble.io/docs/Data.html).
* `_helpers` houses all the helper files.
* `_layouts` houses all the layout files.  Per assemble's documentation, *"Layouts are commonly used with client-side templates as a quick way to 'wrap' a number of pages with commonly used page 'sections', such as the head, footer or navigation"*
* `_pages` houses all the pages that will actually be built.  If you have an `index.hbs` file in there, an `index.html` page will be created based off the layout and modules used for that file.
* `_partials` houses all the small pieces of the site.
  * `_partials/_elements` houses all the "basic tags" such as labels, inputs, or buttons
  * `_partials/_modules` houses all modules.  A module is a group of elements that function as a unit.  For instance, a login form is a module that has labels, inputs, buttons, a heading, a link, and other markup to create a single unit.
  
## Helpers
Currently there are a few helpers being used:

* [handlebars-form-helpers](https://github.com/badsyntax/handlebars-form-helpers#common-form-helpers) (currently only have the need for {{label}}, as some point we'll bring in just that helper and remove the need for the entire library)
* [swag](http://elving.github.io/swag/)
* [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
