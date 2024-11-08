import express from 'express'
import VideoController from '../controllers/videoController.js'

const router = express.Router()

// GET request to fetch videos from the YouTube channel
router.get('/videos', VideoController.getChannelVideos.bind(VideoController))

// GET request to fetch a specific video by its ID
router.get('/videos/:id', VideoController.getVideoById.bind(VideoController))

export default router
