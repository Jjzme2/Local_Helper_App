<template>
  <footer class="footer">
    <div class="footer-section">
      <nav class="footer-nav">
        <router-link to="/contact" aria-label="Contact Us for Feedback">Got Feedback?</router-link>
        <a href="?cmpscreen" class="cmpfooterlink cmpfooterlinkcmp">Privacy</a>
        <socials aria-label="Follow us on Social Media"></socials>
      </nav>
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
