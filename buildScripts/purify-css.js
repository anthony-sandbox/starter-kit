#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const purify = require('purify-css')
const env = require(path.resolve('bin/env'))

/**
 * Load Enviornments
 */
env

var content = fs.readFileSync(path.resolve('dist/index.html'), 'utf8')
var css = fs.readFileSync(path.resolve('dist/public/css/style.css'), 'utf8')

fs.writeFileSync(path.resolve('dist/public/css/style.css'), purify(content, css))
fs.writeFileSync(path.resolve('dist/public/css/style.min.css'), purify(content, css))
