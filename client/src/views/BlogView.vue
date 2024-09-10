<template>
  <BaseView>
    <template #default>
      <BlogCover :blog="blog" @blog-clicked="emitThis" />
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import BlogCover from '@/components/app/mainElements/cards/BlogCover.vue'
import useBlogStore from '@/stores/blogs'

export default {
  name: 'BlogView',
  setup() {
    const store = useBlogStore()

    const blogs = store.items
    console.log(blogs)

    return {
      blogs,
      emitThis(blog) {
        this.$router.push({ name: 'blog', params: { id: blog.id } })
      }
    }
  },
  components: {
    BaseView,
    BlogCover
  }
}
</script>
