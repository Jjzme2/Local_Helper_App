<template>
  <section>
    <h2>Our Products</h2>

    <hr class="divider" />

    <div class="container grid-container clear no-shadow">
      <div v-for="product in products" :key="product.id" class="product-card grid-item">
        <img class="product-icon" :src="product.linkToImage" :alt="product.name" />
        <div class="product-details">
          <p class="product-name">{{ product.name }}</p>
          <button class="primary-button" @click="sendToURL(product)">View Details</button>
        </div>
      </div>
    </div>
    <div class="container clear no-shadow">
      <a class="primary-button" :href="shopURL" target="_blank">View our store</a>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useProductStore } from '@/stores/products'

export default {
  name: 'ProductLibrary',
  setup() {
    const productStore = useProductStore()

    const products = computed(() => productStore.getItems)
    const shopURL = import.meta.env.VITE_PRODUCT_URL

    return {
      products,
      shopURL
    }
  },
  methods: {
    sendToURL(product) {
      const addressToNavigateTo = product.url
      console.log(product)
      window.open(addressToNavigateTo, '_blank')
    }
  }
}
</script>

<style scoped>
.product-card {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: center;
  padding: 20px;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-icon {
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
}

.product-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-description {
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.25rem;
  font-weight: bold;
  color: #28a745;
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-card {
    padding: 15px;
  }

  .product-icon {
    width: 80px;
    height: 80px;
  }

  .product-name {
    font-size: 1.25rem;
  }

  .product-description {
    font-size: 0.9rem;
  }

  .product-price {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .product-card {
    padding: 10px;
  }

  .product-icon {
    width: 60px;
    height: 60px;
  }

  .product-name {
    font-size: 1rem;
  }

  .product-description {
    font-size: 0.8rem;
  }

  .product-price {
    font-size: 1rem;
  }
}
</style>
