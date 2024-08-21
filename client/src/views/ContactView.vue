<template>
  <BaseView>
    <template #default>
      <div class="container">
        <div>
          <h3>Happy to hear from you!</h3>
          <p>Feel free to reach out to us with any questions or concerns you may have.</p>
        </div>

        <form @submit.prevent="submitForm" class="form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder="Enter your email address"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit" class="primary-button">Submit</button>
        </form>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'

// import { sendEmail } from '@/services/emailService'

export default {
  name: 'ContactView',
  components: {
    BaseView
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
