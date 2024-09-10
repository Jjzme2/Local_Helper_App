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
import { checkApiRateLimit } from '@services/limiterService'
import BaseView from './BaseView.vue'
import { sendContactEmail } from '@services/emailService'

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
      if (checkApiRateLimit(5)) {
        try {
          sendContactEmail(this.form)
          alert('Your message has been sent. We will get back to you as soon as possible.')
        } catch (error) {
          alert('There was an error sending your message. Please try again later.')
          console.error(error)
        }
      } else {
        alert(
          'You have reached the limit of requests you can make within an hour. Please try again later.'
        )
      }
    }
  }
}
</script>
