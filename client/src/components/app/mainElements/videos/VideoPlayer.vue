<template>
  <div class="video-player-container">
    <!-- Display Video Title -->
    <h4>{{ video.title }}</h4>

    <!-- Display YouTube video -->
    <div v-if="source === 'youtube'" class="video-wrapper">
      <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${video.embedCode}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Display TikTok video -->
    <!-- <div v-else-if="source === 'tiktok'" class="video-wrapper" v-html="video.embedCode"></div> -->

    <!-- Handle unsupported video sources -->
    <div v-else class="error-message">
      <p>Video source ({{ video.source }}) not supported.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  computed: {
    source() {
      // Ensure the source is converted to lowercase
      return this.video.src.toLowerCase()
    }
  }
}
</script>
