<template>
  <section>
    <h2>Currently Servicing</h2>
    <hr class="divider" />

    <div class="container grid-container clear no-border no-shadow">
      <div v-for="location in servicedLocations" :key="location.id" class="location-card grid-item">
        <p class="location-info">{{ location.townName }} {{ location.state }},</p>
        <p class="location-info">{{ location.zipCode }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import useLocationStore from '@/stores/servicedLocations'

export default {
  name: 'LocationLibrary',
  setup() {
    const locationStore = useLocationStore()

    const servicedLocations = computed(() => locationStore.getItems)

    return {
      servicedLocations
    }
  }
}
</script>
