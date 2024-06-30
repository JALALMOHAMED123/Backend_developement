const express = require('express');

const router = express.Router();

const productsController=require('../controllers/contact');

router.get('/contactus', productsController.getcontacts);
  
router.post('/contactus', productsController.postcontacts);

module.exports = router;