<template>
  <section class="newsletter-signup" id="newsletterSignup">
    <h2>Be the First to Know!</h2>
    <p>Sign up to get exclusive offers, product updates, and early access to new designs.</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <button type="submit" class="primary-button">Stay Updated</button>
      <div class="trust-indicator">
        <p>No spam, unsubscribe anytime.</p>
        <sub
          >We try to send an email update each Friday, regarding new products and promotions.</sub
        >
      </div>
    </form>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import useProductStore from '@/stores/products'

export default {
  name: 'NewsLetter',
  setup() {
    const store = useProductStore()

    const email = ref('')
    const categories = computed(() => store.getCategories)

    return {
      email,
      categories
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Email:', this.email)
      alert('Thank you for signing up!')
    }
  }
}
</script>
