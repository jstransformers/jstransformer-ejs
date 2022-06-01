'use strict'

const fs = require('fs')
const ejs = require('ejs')

const transformer = {
  name: 'ejs',
  outputFormat: 'html',
}

transformer.compile = function (source, options) {
  return ejs.compile(source, { ...options, async: false, client: false })
}

transformer.compileClient = function (source, options) {
  return ejs.compile(source, { ...options, async: false, client: true }).toString()
}

transformer.compileFile = function (path, options) {
  options = options || {}
  options.filename = options.filename || path
  return transformer.compile(fs.readFileSync(path, 'utf8'), options)
}

transformer.compileFileAsync = function (path, options) {
  options = options || {}
  options.filename = options.filename || path
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, source) => {
      if (error) {
        reject(error)
      }

      resolve(transformer.compile(source, options))
    })
  })
}

transformer.render = function (source, options, locals) {
  return ejs.render(source, locals, { ...options, async: false })
}

transformer.renderFile = function (path, options, locals = null) {
  options.filename = options.filename || path
  return ejs.render(fs.readFileSync(path, 'utf8'), locals, { ...options, async: false })
}

transformer.renderFileAsync = function (path, options, locals = null) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(path, locals, options, (error, result) => {
      if (error) {
        reject(error)
      }

      resolve(result)
    })
  })
}

module.exports = transformer
