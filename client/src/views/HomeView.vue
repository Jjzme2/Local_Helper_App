<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
      ></alertBox>

      <h1>Welcome to ILYTAT Services.</h1>

      <h1 class="home-message">Connecting you with reliable local services.</h1>
      <!-- <contentCard class="card"> -->
      <greeting></greeting>
      <!-- </contentCard> -->

      <!-- Button Group -->
      <!-- ! Make the buttons smaller so they fit horizontally. -->
      <div class="btn-group force-down">
        <div class="primary-button centered" style="margin-bottom: 1.25rem; width: 100px">
          <router-link to="/contact">Contact Us</router-link>
        </div>
        <div
          class="primary-button width-third centered"
          style="margin-bottom: 1.25rem; width: 100px"
        >
          <router-link to="/unlisted">Request new Service</router-link>
        </div>
      </div>
      <div class="grid-container-column">
        <contentCard class="card">
          <div>
            <!-- Service Table  -->
            <h2>Services we offer:</h2>

            <table class="services-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th>Price/Hr</th>
                  <th>Notes</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="service in services" :key="service.id">
                  <td>
                    <img
                      class="service-image"
                      v-if="service.image"
                      :src="getImageByImageName(service.image)"
                      :alt="`${service.serviceName} Image`"
                    />
                  </td>
                  <td>{{ service.serviceName }}</td>
                  <td>${{ service.price }}*</td>
                  <td>{{ service.notes }}</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colspan="4">
                    *All prices are provided as an estimate. A final quote will be provided before
                    any work is done.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <!-- Serviced Locations -->
          <div class="grid-container-row">
            <h2>Currently servicing:</h2>
            <div
              v-for="location in servicedLocations"
              :key="location.id"
              class="location-card centered"
            >
              <ul class="location-list">
                <li>{{ location.townName }} {{ location.state }}, {{ location.zipCode }}</li>
              </ul>
            </div>
          </div>
        </contentCard>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import alertBox from '@/components/app/mainElements/alerts/alertBox.vue'
import greeting from '@/components/app/mainElements/display/GreetingHome.vue'
import contentCard from '@/components/app/mainElements/cards/Content_Cards/ContentCard.vue'

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
    contentCard
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

.grid-container-column {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1000px, 1fr));
  gap: 2rem;
}

.grid-container-row {
  display: grid;
  grid-template-rows: auto;
  gap: 2rem;
}
</style>
