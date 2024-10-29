<template>
  <BaseView>
    <template #default>
      <VideoLibrary />
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import VideoLibrary from '@/components/app/mainElements/videos/VideoLibrary.vue'

export default {
  name: 'VideoView',
  components: {
    BaseView,
    VideoLibrary
  }
}
</script>
