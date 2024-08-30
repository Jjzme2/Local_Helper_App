<template>
  <div class="social-links grid-container-lg no-grid-gap">
    <div v-for="link in links" :key="link.network" class="grid-item no-padding no-shadow">
      <a :href="link.link" target="_blank" class="footer-text">
        <!-- <img :src="getImageUrl(link.network)" :alt="link.network" /> -->
        {{ link.displayText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [
        {
          link: '',
          network: '',
          displayText: ''
        }
      ]
    }
  },
  methods: {
    getImageUrl(iconName) {
      const images = import.meta.glob('/public/images/social/*.png', { eager: true })
      const imagePath = `/public/images/social/${iconName}.png`
      console.log(images)
      return images[imagePath]?.default || ''
    }
  }
}
</script>
