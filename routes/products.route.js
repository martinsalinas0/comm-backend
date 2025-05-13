const express = require('express'); 
const { getAllProducts } = require('../controllers/products.controllers');


const router = express.Router(); 

router.get('/products', getAllProducts)



module.exports = router; 