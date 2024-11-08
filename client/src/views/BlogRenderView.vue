<template>
  <BaseView targetDestination="/thoughts">
    <div v-if="post">
      <h1 class="post-title">{{ post.title }}</h1>

      <div class="post-body" v-html="post.content"></div>
    </div>
  </BaseView>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router' // Import useRoute to access route params
import BaseView from './BaseView.vue'
import usePostStore from '@/stores/posts'

export default {
  name: 'BlogRenderView',
  setup() {
    const store = usePostStore()
    const route = useRoute() // Access the current route

    // Get the post from the store
    const post = computed(() => store?.getItemById(route.params.postId))

    // If the posts have not been fetched, fetch them
    onBeforeMount(() => {
      if (!store.getItems.length) {
        store.fetchAll()
      }
    })

    if (!post.value) {
      this.$router.push('/thoughts')
    }

    return {
      post
    }
  },
  components: {
    BaseView
  }
}
</script>
