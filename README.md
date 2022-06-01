# jstransformer-ejs

[EJS](https://github.com/mde/ejs) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status][ci-badge]][ci-url]
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-ejs/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-ejs)
[![NPM version](https://img.shields.io/npm/v/jstransformer-ejs.svg)](https://www.npmjs.org/package/jstransformer-ejs)

## Installation

    npm install jstransformer-ejs

## API

```js
var ejs = require('jstransformer')(require('jstransformer-ejs'))

ejs.render('Hello <%= name %>!', {name: 'World'}).body
//=> 'Hello World!'
```

## License

MIT

[ci-badge]: https://github.com/jstransformers/jstransformer-ejs/actions/workflows/test.yml/badge.svg
[ci-url]: https://github.com/jstransformers/jstransformer-ejs/actions/workflows/test.yml