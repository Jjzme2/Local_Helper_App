<template>
  <div class="grid-container grid-3 footer">
    <div class="grid-item footer-element no-shadow">
      <router-link to="/contact" class="footer-text">Feedback</router-link>
      <socials :links="socials"></socials>
    </div>

    <div class="grid-item footer-element no-shadow">
      <strong>&copy; {{ yearTag }} &nbsp; ILYTAT.com &nbsp; All rights reserved.</strong>
    </div>

    <div class="grid-item footer-element no-shadow">
      <p>Application developed by Jj Zettler (ILYTAT)</p>
    </div>
  </div>
</template>

<script>
import socials from '@/components/app/mainElements/display/SocialLinks.vue'
export default {
  name: 'LayoutFooter',
  components: {
    socials
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startYear: 2024,
      socials: [
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
  computed: {
    yearTag() {
      return this.currentYear > this.startYear
        ? `${this.startYear} - ${this.currentYear}`
        : this.startYear
    }
  }
}
</script>
