<template>
  <div class="small-card">
    <div class="small-card-header">
      <h3>{{ service.serviceName }}</h3>
      <p class="small-card-sub-info">${{ service.price }}</p>
    </div>

    <button class="primary-button no-padding" @click="handleClick">View Details</button>
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
