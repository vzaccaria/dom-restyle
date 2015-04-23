What is it
==========

This module wraps all the elements specified by the query selector into
a shadow-dom, by applying the css style specified.

Example
-------

Suppose you want to restyle back to default all the `pre` elements in an
existing page and change the color to red, then:

``` js
var { restyle } = require('dom-restyle') /* Browserify */
restyle('pre', '<style>pre {color: red;}</style>')
```

done. easy.
