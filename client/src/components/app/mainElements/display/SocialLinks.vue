<template>
  <div v-for="link in links" :key="link.network" class="grid-item no-padding no-shadow">
    <a :href="link.link" target="_blank" class="footer-text">
      <!-- <img :src="getImageUrl(link.network)" :alt="link.network" /> -->
      {{ link.displayText }}
    </a>
  </div>
</template>

<script>
export default {
  //   props: {
  //     links: {
  //       type: Array,
  //       required: true,
  //       default: () => [
  //         {
  //           link: '',
  //           network: '',
  //           displayText: ''
  //         }
  //       ]
  //     }
  //   },
  data() {
    return {
      links: [
        {
          link: 'https://www.linkedin.com/in/jjilytatgames/',
          network: 'linkedin',
          displayText: 'LinkedIn'
        },
        {
          link: 'https://www.github.com/jjzme2',
          network: 'github',
          displayText: 'GitHub'
        },
        {
          link: 'https://www.tiktok.com/@positive_echoes?lang=en',
          network: 'tiktok',
          displayText: 'TikTok'
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
