<template>
  <div class="video-cover">
    <VideoPlayer :video="video" />
  </div>
</template>

<script>
import VideoPlayer from '@/components/app/mainElements/videos/VideoPlayer.vue'

export default {
  name: 'VideoCover',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  components: {
    VideoPlayer
  }
}
</script>
