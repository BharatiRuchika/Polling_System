const express = require("express");
const router = express.Router();
console.log("router loaded")
const homeController = require('../controllers/homeController')
router.use('/api',require('./api'))
router.use('/',homeController.renderHome)
module.exports = router