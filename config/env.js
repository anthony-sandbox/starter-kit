/**
 * config/env
 * @module path
 * @module dotenv
 */

const path = require('path')
const dotenv = require('dotenv')

/**
 * Load enviornment variables
 */
dotenv.load()

dotenv.config({
  path: path.resolve('.env-' + process.env.NODE_ENV)
})

module.exports = dotenv
