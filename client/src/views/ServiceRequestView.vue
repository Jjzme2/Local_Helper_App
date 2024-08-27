<template>
  <BaseView>
    <template #default>
      <div class="container">
        <h1>{{ serviceRequested.serviceName }} Service</h1>
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

          <!-- <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="form.phone" placeholder="Enter your phone number" />
          </div> -->

          <div class="form-group">
            <label for="datetime">Preferred Date & Time</label>
            <input type="datetime-local" id="datetime" v-model="form.time" />
          </div>

          <div class="form-group">
            <label for="location">Location</label>
            <select id="location" v-model="form.location" required>
              <option disabled>--- Select a location ---</option>
              <option
                v-for="location in servicedLocations"
                :key="location.zipCode"
                :value="location.townName + '_' + location.state + '_' + location.zipCode"
              >
                {{ location.townName }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="notes">Additional Notes</label>
            <textarea
              id="notes"
              v-model="form.notes"
              placeholder="Enter any additional notes or comments"
            ></textarea>
          </div>

          <!-- Attachment -->
          <!-- <div class="form-group">
            <label for="attachment">Attach a file (Optional)</label>
            <input type="file" id="attachment" @change="handleFileUpload" />
          </div>
		  -->

          <!-- Consent -->
          <!-- <div class="form-group">
            <input type="checkbox" id="consent" v-model="form.consent" required />
            <label for="consent">I agree to the terms and conditions</label>
          </div> -->

          <button type="submit" class="primary-button">Submit Request</button>
        </form>
      </div>
    </template>
  </BaseView>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseView from '@/views/BaseView.vue'

// Stores
import useLocationStore from '@/stores/servicedLocations'
import useServiceStore from '@/stores/services'

import { sendNewServiceEmail } from '@/_services/emailService'
import { checkApiRateLimit } from '@/_services/limiterService'

export default {
  name: 'UnlistedServiceView',
  components: {
    BaseView
  },
  setup() {
    const route = useRoute()
    const locationStore = useLocationStore()
    const serviceStore = useServiceStore()

    const categories = computed(() => serviceStore.getCategories)
    const servicedLocations = computed(() => locationStore.getItems)
    const serviceRequested = computed(() => serviceStore.getItemById(route.params.serviceId))

    return {
      servicedLocations,
      categories,
      serviceRequested
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        category: this.serviceRequested.category,
        description: this.serviceRequested.serviceName,
        notes: '',
        time: '',
        budget: this.serviceRequested.price,
        location: ''
        // attachment: null,
        // consent: false
      }
    }
  },
  methods: {
    // handleFileUpload(event) {
    // 	this.form.attachment = event.target.files[0]
    // },
    submitForm() {
      // Handle form submission
      //   Validate form data

      //   Add Limiter to prevent spamming
      if (checkApiRateLimit(5)) {
        try {
          sendNewServiceEmail(this.form, 'You have recieved a new request!')
          alert('Your message has been sent. We will get back to you as soon as possible.')
        } catch (error) {
          alert('An error occurred while sending your message. Please try again later.')
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
