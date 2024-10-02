<template>
  <BaseView targetDestination="/thoughts">
    <h1 class="post-title">{{ post.title }}</h1>

    <div class="post-body" v-html="post.content"></div>
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

    // !Router is not found on page refresh with post ID.
    // !t.push is not a function
    // !e.getPosts is undefined
    // !s.post is undefined

    // Get the post from the store
    const post = computed(() => store.getItemById(route.params.postId))

    // If the posts have not been fetched, fetch them
    onBeforeMount(() => {
      if (!store.getPosts.length) {
        store.fetchPosts()
      }
    })

    // If the post is not found still, go back to thoughts
    if (!post.value) {
      route.push('/thoughts')
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
