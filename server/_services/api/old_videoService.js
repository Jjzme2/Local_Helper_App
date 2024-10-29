import videoDirectory from '../../_assets/videos.js'

function CreateVideo({ id = null, src = 'TikTok', embedCode = null, title = 'Video', active = 0 }) {
  return {
    id,
    src,
    embedCode,
    title,
    active
  }
}

class VideoService {
  async getAll(asList = false, includeInactive = false) {
    try {
      const videos = videoDirectory.videos
      const filteredVideos = includeInactive ? videos : videos.filter((v) => v.active)

      if (asList) {
        return filteredVideos
      }

      const videoObjects = filteredVideos.map((video) => CreateVideo(video))
      return videoObjects
    } catch (error) {
      console.error('Error fetching videos:', error.message)
      throw error
    }
  }
}

export default new VideoService()
