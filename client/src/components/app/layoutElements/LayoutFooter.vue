<template>
  <footer class="footer">
    <div class="footer-section">
      <div class="grid-container">
        <div
          class="grid-item"
          style="padding-left: 0px; padding-top: 0px; padding-bottom: 0px; padding-right: 0px"
        >
          <router-link to="/contact" aria-label="Contact Us for Feedback">Feedback</router-link>
          <br />
          <a href="?cky_preview=true">Privacy</a>
        </div>
        <div>
          <socials
            class="grid-item"
            style="padding-left: 0px; padding-top: 0px; padding-bottom: 0px; padding-right: 0px"
            aria-label="Follow us on Social Media"
          ></socials>
        </div>
      </div>
    </div>

    <div class="footer-section">
      <strong>&copy; {{ yearTag }} ILYTAT.com. All rights reserved.</strong>
    </div>

    <div class="footer-section footer-brand">
      <p aria-label="Company name">ILYTAT</p>
    </div>
  </footer>
</template>

<script>
import socials from '@/components/app/mainElements/general/display/SocialLinks.vue'

export default {
  data() {
    return {
      yearTag: new Date().getFullYear()
    }
  },
  components: {
    socials
  }
}
</script>
