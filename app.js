/**
 * /app.js
 * @module path
 * @module dotenv
 * @module express
 */

const path = require('path')
const dotenv = require('dotenv')
const express = require('express')

/**
 * Load enviornment variables
 */
dotenv.load()

dotenv.config({'path': path.resolve('.env-' + process.env.NODE_ENV)})

/**
 * Initiate express
 */

const app = express()

/**
 * static files
 */

app.use('/public', express.static(path.resolve(process.env.PUBLIC)))

/**
 * Set view engine
 */

app.set('views', path.resolve('./views'))
app.set('view engine', process.env.VIEW_ENGINE)

/**
 * Routes
 */

const routes = require('./routes')(app)
routes

/**
 * Export App
 */

module.exports = app

