<template>
  <div class="video-library" id="videoLibrary">
    <div v-if="videos && videos.length > 0">
      <h3>Videos</h3>
      <div class="container clear no-shadow">
        <div v-for="video in videos" :key="video.id">
          <VideoCover :video="video" />
        </div>
      </div>
    </div>

    <div v-else-if="videos && videos.length == 0" class="loading-message">
      <p>No Videos to Display.</p>
    </div>

    <div v-else class="loading-message">
      <LoadingIcon />
      <p>Loading videos...</p>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useVideoStore } from '@/stores/videos'
import LoadingIcon from '@/components/app/mainElements/general/display/LoadingIcon.vue'
import VideoCover from './VideoCover.vue'

export default {
  name: 'VideoLibrary',
  components: {
    LoadingIcon,
    VideoCover
  },
  setup() {
    const store = useVideoStore()
    const videos = computed(() => store.getItems)

    onBeforeMount(() => {
      if (videos.value.length == 0) {
        store.fetchAll()
      }
    })

    return {
      videos
    }
  }
}
</script>
