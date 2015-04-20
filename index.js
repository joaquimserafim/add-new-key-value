'use strict';

var isJsObject  = require('is-js-object')

module.exports = addKeyValue

function addKeyValue (obj, key, value) {
  if (isJsObject(obj) && typeof key === 'string') {
    obj[key] = value
    return obj
  }
}
