<template>
  <BaseView targetDestination="/thoughts">
    <div v-if="post">
      <h1 class="text-lg">{{ post.title }}</h1>
      <div class="container wide markdown" v-html="post.content"></div>
    </div>
  </BaseView>
</template>

<script>
import { computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router' // Import useRoute to access route params
import BaseView from './BaseView.vue'
import usePostStore from '@/stores/posts'

export default {
  name: 'BlogRenderView',
  setup() {
    const store = usePostStore()
    const route = useRoute() // Access the current route
    const router = useRouter() // Access the current router for navigation

    // Get the post from the store
    const post = computed(() => store?.getItemById(route.params.postId))

    // If the posts have not been fetched, fetch them
    onBeforeMount(() => {
      if (!store.getItems.length) {
        store.fetchAll()
      }
    })

    if (!post.value) {
      router.push('/thoughts')
      //   this.$router.push('/thoughts')
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
