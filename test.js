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

test('pass an invalid key (string) should return "undefined" object',
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

test('passing a value (not undefined) using the "strict"' +
' method should return with the new property', function(assert) {
  var nObj = {a: 1, b: 2}
  addKeyValue.strict(nObj, 'c', 0)
  assert.deepEqual(nObj.c, 0)
  assert.end()
})

test('passing a "undefined" value and using the "strict" method should' +
' ignore the new property', function(assert) {
  var nObj = {a: 1, b: 2}
  addKeyValue.strict(nObj, 'c')
  assert.deepEqual(nObj.c, undefined)
  assert.end()
})

test('passing a "null" value and using the "strict" method should' +
' return the new property', function(assert) {
  var nObj = {a: 1, b: 2}
  addKeyValue.strict(nObj, 'c', null)
  assert.deepEqual(nObj.c, null)
  assert.end()
})
