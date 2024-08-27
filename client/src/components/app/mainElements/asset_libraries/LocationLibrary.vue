<template>
  <section>
    <contentCard>
      <h2>Currently Servicing</h2>
      <hr class="divider" />

      <div class="grid-container">
        <div
          v-for="location in servicedLocations"
          :key="location.id"
          class="location-card grid-item"
        >
          <p class="location-info">{{ location.townName }} {{ location.state }},</p>
          <p class="location-info">{{ location.zipCode }}</p>
        </div>
      </div>
    </contentCard>
  </section>
</template>

<script>
import contentCard from '../cards/Content_Cards/ContentCard.vue'
import { computed } from 'vue'
import useLocationStore from '@/stores/servicedLocations'

export default {
  name: 'LocationLibrary',
  components: {
    contentCard
  },
  setup() {
    const locationStore = useLocationStore()

    const servicedLocations = computed(() => locationStore.getItems)

    return {
      servicedLocations
    }
  }
}
</script>
