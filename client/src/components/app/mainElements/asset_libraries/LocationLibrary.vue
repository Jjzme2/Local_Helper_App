<template>
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
