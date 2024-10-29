<template>
  <div class="card centered no-background no-shadow space-between" id="newsletterSignup">
	<div class="card-inner">
    <h2>Stay Updated!</h2>
    <p>Sign up to get exclusive offers, product updates, and early access to new designs.</p>

	<form @submit.prevent="handleSubmit">

		<div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="email" required />
      </div>

	  <button type="submit" class="button primary" style="margin: 1rem auto;">Enroll</button>
	      </form>

      <div class="trust-indicator">
        <p>No spam, unsubscribe anytime.</p>
        <!-- <sub
          >We try to send an email update each Friday, regarding new products and promotions.</sub
        > -->
      </div>
  </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import useProductStore from '@/stores/products'

import { sendNewSubscriberEmail } from '@services/emailService'

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
      //   console.log('Email:', this.email)
      try {
        sendNewSubscriberEmail(this.email)
        alert('Thank you for signing up!')
      } catch (error) {
        console.error(error)
        alert('There was an error signing you up. Please try again later.')
      }
    }
  }
}
</script>
