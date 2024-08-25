<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <!-- Developer Message Alert -->
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
        class="alert-box"
      ></alertBox>

      <!-- Main Heading -->
      <h1 class="main-heading">Welcome to ILYTAT Services</h1>

      <!-- Subheading with Description -->
      <p class="subheading">Connecting you with reliable local services.</p>

      <!-- Greeting Component -->
      <greeting></greeting>
      <hr class="divider" />

      <!-- Services Section -->
      <section>
        <div class="grid-container">
          <contentCard>
            <h2>Services We Offer</h2>
            <serviceCard
              v-for="service in services"
              :key="service.id"
              :service="service"
            ></serviceCard>
          </contentCard>
        </div>
      </section>

      <hr class="divider" />

      <!-- Serviced Locations Section -->
      <section class="grid-container">
        <contentCard>
          <h2>Currently Servicing</h2>
          <div>
            <div v-for="location in servicedLocations" :key="location.id" class="location-card">
              <ul class="location-list">
                <li>{{ location.townName }} {{ location.state }}, {{ location.zipCode }}</li>
              </ul>
            </div>
          </div>
        </contentCard>
      </section>
    </template>
  </BaseView>
</template>
<script>
import BaseView from './BaseView.vue'
import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'
import greeting from '@/components/app/mainElements/display/GreetingHome.vue'
import contentCard from '@/components/app/mainElements/cards/Content_Cards/ContentCard.vue'

import serviceCard from '@/components/app/mainElements/cards/Content_Cards/ServiceCard.vue'

// Stores
import useLocationStore from '@/stores/servicedLocations'
import useServiceStore from '@/stores/services'

import { computed } from 'vue'

export default {
  setup() {
    const locationStore = useLocationStore()
    const serviceStore = useServiceStore()

    const servicedLocations = computed(() => locationStore.getItems)
    const services = computed(() => serviceStore.getItems)

    return {
      servicedLocations,
      services
    }
  },

  name: 'HomeView',
  components: {
    alertBox,
    BaseView,
    greeting,
    contentCard,
    serviceCard
  },
  data() {
    return {
      developerMessage: {
        show: 0,
        message: 'Welcome to the Home View',
        type: 'info'
      }
    }
  },
  methods: {
    getImageByImageName(imageName) {
      return '/images/app/icons/' + imageName
    }
  }
}
</script>

<style scoped>
.home-message {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: var(--primary-text-color);
}
</style>
