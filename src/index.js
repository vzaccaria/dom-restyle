// var shelljs = require( 'shelljs' )
// var promise = require( 'bluebird' )


/**
 * The module exports just one function:
 *
 * ```js
 * var { restyle } = require('dom-restyle')
 * ```
 */


function getRepresentation(target) {
  // http://stackoverflow.com/questions/1763479/how-to-get-the-html-for-a-dom-element-in-javascript
  var wrap = document.createElement('div');
  wrap.appendChild(target.cloneNode(true));
  return wrap.innerHTML;
}

/**
 * Restyles all the elements ref'd by querySelector with the Css. Keep in
 * mind that this modifies the DOM by creating a Shadow host and it is not idempotent.
 *
 * @param  {string} querySelector Element to restyle
 * @param  {string} css Inlined Css style (<style>....</style>)
 */
function restyle(querySelector, css) {
  var nodesArray = [].slice.call(document.querySelectorAll(querySelector))
  nodesArray.map(function (wrapped) {
    var contents = getRepresentation(wrapped)
    var wrappedParent = wrapped.parentNode;
    var host = document.createElement("div");
    wrappedParent.replaceChild(host, wrapped);
    var root = host.createShadowRoot();
    var html = "\n      " + css + "\n      " + contents + "\n      ";
    root.innerHTML = html;
  });
}

module.exports = {
  restyle
}