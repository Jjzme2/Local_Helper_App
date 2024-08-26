<template>
  <section>
    <div class="grid-container">
      <contentCard>
        <h2>Services We Offer</h2>
        <serviceCard v-for="service in services" :key="service.id" :service="service"></serviceCard>
      </contentCard>
    </div>
  </section>
</template>

<script>
import contentCard from '@/components/app/mainElements/cards/Content_Cards/ContentCard.vue'
import serviceCard from '@/components/app/mainElements/cards/Content_Cards/ServiceCard.vue'

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
  components: {
    contentCard,
    serviceCard
  }
}
</script>
