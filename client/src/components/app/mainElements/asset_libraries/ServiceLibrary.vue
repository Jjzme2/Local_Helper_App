<template>
  <section>
    <div class="grid-container">
      <contentCard>
        <h2>Services We Offer</h2>
        <serviceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          @service-clicked="goToServicePage"
        ></serviceCard>
      </contentCard>
    </div>
  </section>
</template>

<script>
import contentCard from '@/components/app/mainElements/cards/Content_Cards/ContentCard.vue'
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
    contentCard,
    serviceCard
  }
}
</script>
