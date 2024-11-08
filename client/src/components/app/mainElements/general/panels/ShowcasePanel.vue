<template>
  <div>
    <h1>Showcase</h1>
    <div class="carousel" v-if="flattenedItems.length > 0">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(item, index) in flattenedItems" :key="index">
          <img :src="item.imagePath" :alt="item.title" />
        </div>
      </div>
      <button class="carousel-control prev" @click="prev">‹</button>
      <button class="carousel-control next" @click="next">›</button>
      <div class="carousel-indicators">
        <span
          v-for="(item, index) in flattenedItems"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>
    <div v-else>
      <p>No items to show</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowcasePanel',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    flattenedItems() {
      return this.items.flatMap((item) =>
        item.showcaseImages.flatMap((image) =>
          image.images.map((img) => ({
            title: image.title,
            author: image.author,
            imagePath: `${item.directory}${img}`
          }))
        )
      )
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.flattenedItems.length
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.flattenedItems.length) % this.flattenedItems.length
    },
    goTo(index) {
      this.currentIndex = index
    }
  }
}
</script>
