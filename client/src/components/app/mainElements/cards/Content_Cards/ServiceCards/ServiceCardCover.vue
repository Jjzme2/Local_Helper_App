<template>
  <div class="small-card">
    <div>
      <h3>{{ service.serviceName }}</h3>
      <p>{{ service.category }}</p>
    </div>
    <p class="small-card-sub-info">${{ service.price }}</p>
    <button class="details-button" @click="handleClick">View Details</button>
  </div>
</template>

<script>
// import emitter from '@/_services/utilities/eventBus'

import Service from '@/_models/app_models/service'

export default {
  name: 'ServiceCardCover',
  props: {
    service: {
      type: Service,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('service-clicked', this.service)
    }
  }
}
</script>
