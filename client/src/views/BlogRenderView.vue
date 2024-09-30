<template>
  <BaseView targetDestination="/thoughts">
    <h1 class="post-title">{{ post.title }}</h1>

    <div class="post-body" v-html="post.content"></div>
  </BaseView>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router' // Import useRoute to access route params
import BaseView from './BaseView.vue'
import usePostStore from '@/stores/posts'

export default {
  name: 'BlogRenderView',
  setup() {
    const store = usePostStore()
    const route = useRoute() // Access the current route

    // Get the post from the store
    const post = computed(() => store.getItemById(route.params.postId))

    // // Fetch the post by the route parameter (e.g., id)
    // onMounted(() => {
    //   const postId = route.params.id // Get the 'id' param from the route
    //   if (postId) {
    //     store.getItemById(postId) // Fetch the post by ID from the store
    //   }
    // })

    return {
      post
    }
  },
  components: {
    BaseView
  }
}
</script>
