<template>
  <div class="service-card" @click="handleClick">
    <div class="service-info">
      <img class="service-icon" :src="imagePath" />
      <h2>{{ service.serviceName }}</h2>
      <p>{{ truncatedDescription }}</p>
      <p class="price">${{ service.price }}</p>
    </div>
    <div class="hover-info">
      <p>{{ service.description }}</p>
      <p v-if="service.notes">{{ service.notes }}</p>
    </div>
  </div>
</template>

<script>
import emitter from '@/_services/utilities/eventBus'

export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('service-clicked', this.service)
      emitter.emit('trigger-alert', {
        message: `You clicked on ${this.service.serviceName}`,
        type: 'info'
      })
    }
  },
  computed: {
    truncatedDescription() {
      const maxLength = 25 // Set the character limit for the description
      return this.service.description.length > maxLength
        ? this.service.description.substring(0, maxLength) + '...'
        : this.service.description
    },
    imagePath() {
      let path = ''

      if (this.service.image) path = `/images/app/full/${this.service.image}`
      else path = '/images/app/full/default.jpg'
      return path
    }
  }
}
</script>

<style scoped>
.service-card {
  position: relative;
  width: 300px;
  height: 400px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-info {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

.service-info h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.service-info p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffcc00;
}

.hover-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1rem;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.service-card:hover .hover-info {
  opacity: 1;
}

.service-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .service-card {
    max-width: 100%; /* Full width on small screens */
    margin: 1rem auto; /* Adjust margin for smaller screens */
  }
}

@media screen and (max-width: 480px) {
  .service-card {
    max-width: 200px; /* Full width on very small screens */
    margin: 0.5rem auto; /* Adjust margin for very small screens */
  }
}
</style>
