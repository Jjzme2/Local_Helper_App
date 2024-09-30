<template>
  <BaseView>
    <template #default>
      <div v-for="post in posts" :key="post.id">
        <BlogCover :post="post" />
      </div>
    </template>
  </BaseView>
</template>

<script>
import { computed } from 'vue'
import BaseView from './BaseView.vue'
import BlogCover from '@/components/app/mainElements/cards/BlogCover.vue'
import usePostStore from '@/stores/posts'

export default {
  name: 'BlogView',
  setup() {
    const store = usePostStore()

    const posts = computed(() => store.getItems)

    if (posts.value.length === 0) {
      store.fetchAll()
    }

    return {
      posts,
      emitThis(post) {
        this.$router.push({ name: 'thoughts', params: { id: post.id } })
      }
    }
  },
  components: {
    BaseView,
    BlogCover
  }
}
</script>
