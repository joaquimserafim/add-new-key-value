'use strict';

var test        = require('tape')
var addKeyValue = require('./')

test('add a new key "hello" with a value should be able to use the object' +
' directly or without returning or by return into a new variable',
function(assert) {
  var json0 = require('./package.json')
  var r = addKeyValue(json0, 'hello', 'world')
  assert.deepEqual(json0.hello, 'world')
  assert.deepEqual(r.hello, 'world')
  assert.end()
})

test('override the key "version" with a new value', function(assert) {
  var json1 = require('./package.json')
  addKeyValue(json1, 'version', 'test')
  assert.deepEqual(json1.version, 'test')
  assert.end()
})

test('don\'t pass a valid key (string) should return "undefined" object',
function(assert) {
  var json2 = require('./package.json')
  var r = addKeyValue(json2, null, 'test')
  assert.deepEqual(r, undefined)
  assert.end()
})

test('override the key "version" with a null/undefined/empty value the key' +
' should have an "undefined" value', function(assert) {
  var json3 = require('./package.json')
  addKeyValue(json3, 'version')
  assert.deepEqual(json3.version, undefined)
  assert.end()
})

test('passing a bad js object should return "undefined"', function(assert) {
  var r = addKeyValue(null, 'version', 'test')
  assert.deepEqual(r, undefined)
  assert.end()
})
