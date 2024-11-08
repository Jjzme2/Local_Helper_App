<template>
  <a
    v-for="link in links"
    :key="link.network"
    :href="link.link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ link.displayText }}
    <br />
  </a>
</template>

<script>
export default {
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
          link: 'https://www.tiktok.com/@ilytat_designs',
          network: 'tiktok',
          displayText: 'TikTok'
        }
      ]
    }
  }
}
</script>
