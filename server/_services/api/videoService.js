import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCqc05XAQtUJJsTNe3PskbMQ' // Default to your primary channel
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3'

const youtubeService = {
  // Fetch videos from the specified YouTube channel
  async getChannelVideos(maxResults = 10) {
    const videoLink = `${YOUTUBE_API_URL}/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`

    try {
      const response = await axios.get(videoLink)
      return response.data.items // Return an array of video objects
    } catch (error) {
      console.error('Error fetching videos:', error)
      throw error
    }
  },

  // Fetch a specific video by its ID
  async getVideoById(videoId) {
    const videoLink = `${YOUTUBE_API_URL}/videos?key=${YOUTUBE_API_KEY}&id=${videoId}&part=snippet,contentDetails,statistics`
    try {
      const response = await axios.get(videoLink)
      return response.data.items[0] // Return the video object
    } catch (error) {
      console.error('Error fetching video:', error)
      throw error
    }
  }
}

export default youtubeService
