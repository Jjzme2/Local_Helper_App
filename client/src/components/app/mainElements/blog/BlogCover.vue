<template>
  <div class="card" @click="emitThis">
    <img :src="coverImage" alt="Cover Image" class="cover-image centered" />

    <div class="container no-border no-shadow">
      <h1 class="text-med">{{ post.title }}</h1>
    </div>

    <div class="text-sm">
      <p>{{ concatenatedDescription }}</p>
    </div>

    <div class="flex container no-border no-shadow width-full space-between">
      <div class="text-sm text-gray-med">
        <span>By {{ post.author }}</span>
      </div>
      <div class="text-sm text-gray-med">
        <span>{{ post.date }}</span>
      </div>
    </div>

    <div class="button primary centered">
      <router-link :to="{ name: 'post', params: { postId: post.id } }" class="text-sm"
        >Read More</router-link
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Post from '@models/app_models/post.js'
// MarkdownElement Components
// import MarkdownHeader from '@/components/app/subElements/markdownElements/MarkdownHeader.vue'
// import MarkdownLink from '@/components/app/subElements/markdownElements/MarkdownLink.vue'
// import MarkdownTable from '@/components/app/subElements/markdownElements/MarkdownTable.vue'
// import MarkdownList from '@/components/app/subElements/markdownElements/MarkdownList.vue'

export default defineComponent({
  name: 'BlogCover',
  components: {
    // MarkdownHeader,
    // MarkdownLink
    // MarkdownTable,
    // MarkdownList
  },
  props: {
    post: {
      type: Post,
      required: true
    }
  },
  computed: {
    concatenatedDescription() {
      return this.post.description.slice(0, 100) + '...'
    },
    coverImage() {
      return `/images/app/posts/${this.post.coverImage}`
    }
    // methods: {
    //   emitThis() {
    //     this.$emit('post-clicked', this.post)
    //   }
    // }
  }
})
</script>
