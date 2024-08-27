<template>
  <section>
    <h2>Services We Offer</h2>
    <hr class="divider" />

    <div class="container grid-container clear no-shadow">
      <serviceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
        @service-clicked="goToServicePage"
        class="grid-item"
      ></serviceCard>
    </div>
  </section>
</template>

<script>
import serviceCard from '@/components/app/mainElements/cards/Content_Cards/ServiceCards/ServiceCardCover.vue'

import useServiceStore from '@/stores/services'
import { computed } from 'vue'

export default {
  name: 'ServiceLibrary',
  setup() {
    const serviceStore = useServiceStore()
    const services = computed(() => serviceStore.getItems)

    return {
      services
    }
  },
  methods: {
    goToServicePage(service) {
      if (!service) {
        console.error('Service not found')
      } else if (!service.id) {
        console.error('Service ID not found in ' + service.serviceName, service)
      } else {
        this.$router.push({ name: 'service', params: { serviceId: service.id } })
      }
    }
  },
  components: {
    serviceCard
  }
}
</script>
