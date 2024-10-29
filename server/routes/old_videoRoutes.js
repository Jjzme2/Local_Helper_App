import express from 'express'
import VideoController from '../controllers/videoController.js'

const router = express.Router()

// GET request for all products
router.get('/', VideoController.getAll.bind(VideoController))

export default router
