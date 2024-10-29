class Video {
  constructor(videoData) {
    this.name = 'Video'
    this.id = videoData.id
    this.src = videoData.src
    this.embedCode = videoData.embedCode
    this.title = videoData.title
    this.active = videoData.active
  }
}

export default Video
