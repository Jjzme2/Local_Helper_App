<template>
  <div class="blog-cover" @click="emitThis">
    <img :src="blog.coverImage" alt="Cover Image" class="cover-image" />

    <div class="blog-details">
      <h1 class="blog-title">{{ blog.title }}</h1>
      <p class="blog-author">By {{ blog.author }}</p>
      <p class="blog-date">{{ blog.date }}</p>
    </div>

    <div class="blog-description">
      <p>{{ blog.description }}</p>
    </div>

    <div class="primary-button">
      <router-link :to="{ name: 'blog', params: { id: blog.id } }">Read More</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Blog from '@models/app_models/BlogModel'

export default defineComponent({
  name: 'BlogCover',
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  methods: {
    emitThis() {
      this.$emit('blog-clicked', this.blog)
    }
  }
})
</script>
