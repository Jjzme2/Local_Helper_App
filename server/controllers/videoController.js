import VideoService from '../_services/api/videoService.js'
import BaseController from './_baseController.js'

class YouTubeController extends BaseController {
  constructor() {
    super(VideoService) // Pass the YouTube service to the base class
  }

  // Fetch all videos from the channel
  async getChannelVideos(req, res) {
    const maxResults = req.query.maxResults || 10
    try {
      const videos = await this.service.getChannelVideos(maxResults)
      res.json(videos)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  // Fetch a specific video by its ID
  async getVideoById(req, res) {
    const videoId = req.params.id
    try {
      const video = await this.service.getVideoById(videoId)
      res.json(video)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

const youTubeController = new YouTubeController()
export default youTubeController
