/**
 * routes/index.route
 * @module path
 * @module express
 * @module controller
 */

const path          = require('path');
const express       = require('express');
const controller    = require('../controllers/index.controller');

/**
 * Express Router 
 */

const router = express.Router();

/**
 * Create Route
 */

const route = router.route('/');

/**
 * GET Method
 */

route.get(controller.get);

/**
 * Export router
 */

module.exports = router;