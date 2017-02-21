/**
 * /app.js
 * @module path
 * @module env
 * @module express
 */

const path = require('path')
const env = require(path.resolve('./config/env'))
const express = require('express')

/**
 * Load Enviornments
 */
env

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

