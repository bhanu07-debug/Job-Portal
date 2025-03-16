const express = require('express');
const router = express.Router();

const homeController = require('../../controller/frontend/home_controller');

router.get('/', homeController.home);

module.exports = router