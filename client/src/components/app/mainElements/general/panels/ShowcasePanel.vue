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

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-item img {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  border-radius: 50%;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.carousel-indicators span {
  display: block;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators span.active {
  background: rgba(255, 255, 255, 1);
}

@media (max-width: 768px) {
  .carousel-caption {
    font-size: 14px;
    padding: 5px;
  }

  .carousel-control {
    padding: 5px;
  }
}
</style>
