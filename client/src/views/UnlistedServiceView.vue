<template>
  <BaseView>
    <template #default>
      <div class="container">
        <h1>Unlisted Service</h1>
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
            <label for="category">Service Category</label>
            <select id="category" v-model="form.category" required>
              <option disabled>--- Select a category ---</option>
              <option v-for="category in categories" :key="category.id" :value="category.value">
                {{ category.name }}
              </option>
            </select>
          </div>

          <!-- Set a max width for this -->
          <div class="form-group">
            <label for="description">Service Description</label>
            <textarea
              id="description"
              v-model="form.description"
              required
              placeholder="Describe the task or service you need"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="datetime">Preferred Date & Time</label>
            <input type="datetime-local" id="datetime" v-model="form.time" />
          </div>

          <div class="form-group">
            <label for="budget">Budget (Optional)</label>
            <input
              type="number"
              id="budget"
              v-model="form.budget"
              placeholder="Enter your budget (in USD)"
            />
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
import BaseView from '@/views/BaseView.vue'

// Stores
import useLocationStore from '@/stores/servicedLocations'
import useServiceStore from '@/stores/services'

// import { sendEmail } from '@/services/emailService'

export default {
  name: 'UnlistedServiceView',
  components: {
    BaseView
  },
  setup() {
    const locationStore = useLocationStore()
    const serviceStore = useServiceStore()

    const categories = computed(() => serviceStore.getCategories)
    const servicedLocations = computed(() => locationStore.getItems)

    return {
      servicedLocations,
      categories
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        category: '',
        description: '',
        notes: '',
        time: '',
        budget: '',
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
      alert('Form submission has not been implemented yet.')
      //   Validate form data
      //   Send Email with form data
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}
</style>
