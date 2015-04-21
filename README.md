# add-new-key-value

add a new key/value to an JS Object

<a href="https://nodei.co/npm/add-new-key-value/"><img src="https://nodei.co/npm/add-new-key-value.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/add-new-key-value)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/add-new-key-value/blob/master/LICENSE)

## API
`var addKeyValue = require('add-new-key-value')`

**addKeyValue({JS Object}, {key:string}, {value})**
>the **JS Object** should valid as well the **key** or will return *undefined*

> note: will overwrite existing keys

**addKeyValue.strict({JS Object}, {key:string}, {value})**
>the same as the above method but if the **value** is ***undefined*** will 
>ignore the creation on the new property for the given object


## Usage

```js
var addKeyValue = require('add-new-key-value')

var pkg = require('./package.json')

// case 1
addKeyValue(pkg, 'version', '1.0.0')
console.log(pkg.version)// should return '1.0.0'

addKeyValue(pkg, 'version')
console.log(pkg.version)// property should exist and return undefined

// case 2
var newPkg = addKeyValue(pkg, 'version', '1.0.0')
console.log(newPkg.version)// should return '1.0.0'

// case 3 - with strict
var newPkg = addKeyValue.strict(pkg, 'version', null)
console.log(newPkg.version)// should return null

var newPkg = addKeyValue.strict(pkg, 'version', '1.0.0')
console.log(newPkg.version)// should return '1.0.0'

// case 4 - with strict
var newPkg = addKeyValue.strict(pkg, 'version')
console.log(newPkg.version)// property should not exist and return undefined

```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
