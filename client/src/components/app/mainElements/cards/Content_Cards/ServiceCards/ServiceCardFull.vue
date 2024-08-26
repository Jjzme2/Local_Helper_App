<template>
  <div class="service-card">
    <h3 class="service-name">{{ service.serviceName }}</h3>
    <p class="service-description">{{ service.description }}</p>
    <p class="service-price">{{ service.price }}</p>
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
  }
}
</script>
