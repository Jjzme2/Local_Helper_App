<template>
  <div class="post-cover" @click="emitThis">
    <img :src="coverImage" alt="Cover Image" class="cover-image" />

    <div class="post-details">
      <h1 class="post-title">{{ post.title }}</h1>

      <h3>Links</h3>
      <hr />
      <div class="post-elements">
        <!-- Links -->
        <span v-for="link in post.elements.links" :key="link">
          <span>Links</span>
          <MarkdownLink :href="link.href" :text="link.text" />
        </span>
      </div>
    </div>

    <h3>Description</h3>
    <hr />
    <div class="post-description">
      <p>{{ concatenatedDescription }}</p>
    </div>

    <div class="post-meta">
      <div class="post-author">
        <span>By {{ post.author }}</span>
      </div>
      <div class="post-date">
        <span>{{ post.date }}</span>
      </div>
    </div>

    <div class="primary-button">
      <router-link :to="{ name: 'post', params: { postId: post.id } }">Read More</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Post from '@models/app_models/post.js'
// MarkdownElement Components
// import MarkdownHeader from '@/components/app/subElements/markdownElements/MarkdownHeader.vue'
import MarkdownLink from '@/components/app/subElements/markdownElements/MarkdownLink.vue'
// import MarkdownTable from '@/components/app/subElements/markdownElements/MarkdownTable.vue'
// import MarkdownList from '@/components/app/subElements/markdownElements/MarkdownList.vue'

export default defineComponent({
  name: 'BlogCover',
  components: {
    // MarkdownHeader,
    MarkdownLink
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
    },
    methods: {
      emitThis() {
        this.$emit('post-clicked', this.post)
      }
    }
  }
})
</script>
