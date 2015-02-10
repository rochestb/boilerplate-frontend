module.exports.register = function (Handlebars, options)  {

  /* Markup helpers
  *****************************************/

  function openTag(type, closing, attr) {
    var html = ['<' + type];
    for (var prop in attr) {
      // A falsy value is used to remove the attribute.
      // EG: attr[false] to remove, attr['false'] to add
      if (attr[prop]) {
        html.push(prop + '="' + attr[prop] + '"');
      }
    }
    return html.join(' ') + (!closing ? ' /' : '') + '>';
  }

  function closeTag(type) {
    return '</' + type + '>';
  }

  function createElement(type, closing, attr, contents) {
    try{
      contents = (contents || '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    } catch(e){}

    return openTag(type, closing, attr) + (closing ? (contents || '') + closeTag(type) : '');
  }

  function extend(obj1, obj2) {
    for(var key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;
  }

  /**
   * {{link object}}
   * @param  {Object} object
   * @param  {Object} object.href
   * @param  {Object} object.text
   * @return {String}
   *
   * {{link this}}
   * {{#link href="x"}}
   *   Anything here
   * {{/link}}
   */
  Handlebars.registerHelper('link', function(input, body, options) {

    options = Array.prototype.pop.call(arguments);
    body = options.fn && options.fn(this) || body;
    
    var attr = {},
        element;

    if (!input.hash) {
      attr.href = input.href;
      attr.class = input.class;
      attr.target = input.target;

      body = input.text;
    }

    element = createElement('a', true, extend(attr, options.hash), body);

    return options.fn ? element : new Handlebars.SafeString(element);
  });
};