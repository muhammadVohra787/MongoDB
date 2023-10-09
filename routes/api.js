// routes/api.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/products', productController.find);

router.post('/products', productController.create);
router.delete('/products/:id', productController.delete.byId);
router.delete('/products', productController.delete.deleteMany);
router.put('/products/:id',productController.updateById)
router.get('/products/:id', productController.find.id);
module.exports = router;
 