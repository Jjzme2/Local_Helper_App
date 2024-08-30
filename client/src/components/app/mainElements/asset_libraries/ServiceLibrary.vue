<template>
  <section>
    <h2>Services We Offer</h2>
    <hr class="divider" />

    <div class="container grid-container clear no-shadow">
      <serviceCard
        v-for="service in filteredServices"
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
  setup(props) {
    const serviceStore = useServiceStore()
    const services = computed(() => serviceStore.getItems)

    const filteredServices = computed(() => {
      if (props.idsToInclude.length === 0) {
        return services.value
      }
      return services.value.filter((service) => props.idsToInclude.includes(service.id))
    })

    return {
      services,
      filteredServices
    }
  },
  props: {
    idsToInclude: {
      type: Array,
      default: () => []
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
