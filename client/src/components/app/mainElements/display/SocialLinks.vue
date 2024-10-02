<template>
  <div class="grid-container">
    <div
      v-for="link in links"
      :key="link.network"
      class="grid-item no-padding no-shadow"
    >
      <a :href="link.link" target="_blank" rel="noopener noreferrer" class="footer-text">
        {{ link.displayText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          link: 'https://www.linkedin.com/in/jjilytatgames/',
          network: 'linkedin',
          displayText: 'LinkedIn',
        },
        {
          link: 'https://www.github.com/jjzme2',
          network: 'github',
          displayText: 'GitHub',
        },
        {
          link: 'https://www.tiktok.com/@ilytat_designs',
          network: 'tiktok',
          displayText: 'TikTok',
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Responsive grid */
  gap: 1rem; /* Space between items */
}
</style>
