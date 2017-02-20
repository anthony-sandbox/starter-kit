/**
 * routes/index.route
 * @module express
 * @module controller
 */

const express = require('express')
const controller = require('../controllers/index.controller')

/**
 * Express Router
 */

const router = express.Router()

/**
 * Create Route
 */

const route = router.route('/')

/**
 * GET Method
 */

route.get(controller.get)

/**
 * Export router
 */

module.exports = router
