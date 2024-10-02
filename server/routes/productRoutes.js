import express from 'express'
import productController from '../controllers/productController.js'

const router = express.Router()

// GET request for all products
router.get('/', productController.getAll.bind(productController)),
  // GET request for products by visibility
  router.get('/visibility', productController.getByVisibility.bind(productController)),
  // GET request for a product by ID
  router.get('/:id', productController.getById.bind(productController))

export default router
