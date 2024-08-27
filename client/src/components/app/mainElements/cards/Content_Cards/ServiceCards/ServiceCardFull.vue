<template>
  <div class="service-card">
    <div class="service-header">
      <img class="service-image-full" :src="serviceImagePath" />
      <div style="margin-left: 2rem">
        <h3 class="service-name">{{ service.serviceName }}</h3>
        <p class="service-price">${{ service.price }}</p>
      </div>
    </div>
    <p class="service-description">{{ service.description }}</p>
    <p class="service-note">
      <sub
        >Price shown is an estimate and is subject to change depending on factors that may include
        distance and size.</sub
      >
    </p>
    <p class="service-note">
      <sub>A final quote will be agreed upon before any work is done.</sub>
    </p>
  </div>
</template>

<script>
import Service from '@/_models/app_models/service'

export default {
  name: 'ServiceCardFull',
  props: {
    service: {
      type: Service,
      required: true
    }
  },
  computed: {
    serviceImagePath() {
      let path = ''

      if (this.service.image) path = `/images/app/full/${this.service.image}`
      else path = '/images/app/full/default.jpg'
      return path
    }
  }
}
</script>
