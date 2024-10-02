import express from 'express'
import postController from '../controllers/postController.js'

const router = express.Router()

// GET request for all products
router.get('/', postController.getAll.bind(postController)),
  // GET request for a product by ID
  router.get('/title/:slug', postController.getByFileName.bind(postController))

export default router
