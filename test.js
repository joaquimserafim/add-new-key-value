'use strict';

var test        = require('tape')
var addKeyValue = require('./')

test('add a new key "version" with a value should be able to use directly' +
' without returning or by return into a new variable', function(assert) {
  var json0 = require('./package.json')
  var r = addKeyValue(json0, 'version', 'test')
  assert.deepEqual(json0.version, 'test')
  assert.deepEqual(r.version, 'test')
  assert.end()
})

test('don\'t pass a valid key (string) should return "undefined" object',
function(assert) {
  var json1 = require('./package.json')
  var r = addKeyValue(json1, null, 'test')
  assert.deepEqual(r, undefined)
  assert.end()
})

test('add a new key "version" with a null/undefined/empty value the key' +
' should have an "undefined" value', function(assert) {
  var json2 = require('./package.json')
  addKeyValue(json2, 'version')
  assert.deepEqual(json2.version, undefined)
  assert.end()
})

test('passing a bad js object should return "undefined"', function(assert) {
  var r = addKeyValue(null, 'version', 'test')
  assert.deepEqual(r, undefined)
  assert.end()
})
