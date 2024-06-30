const express = require('express');

const router = express.Router();

const productsController = require('../controllers/success');

router.get('/success', productsController.getsuccess);

module.exports = router;