<template>
  <div class="product-card">
    <h2>{{ product.title }}</h2>

    <div class="product-image">
      <!-- Display the default image -->
      <img :src="getDefaultImage()" alt="Product Image" />
    </div>

    <div class="product-details">
      <!-- Product description (safely rendering HTML) -->
      <p v-html="product.description"></p>
    </div>

    <div class="product-price">From ${{ priceMin }}</div>

    <div class="cta-buttons">
      <button @click="navigateToProduct" class="primary-button">View Product</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Calculate the range of prices based on all variants
    priceMin() {
      const prices = this.product.variants.map((variant) => variant.price)
      return Math.min(...prices).toFixed(2) / 100
    }
  },
  methods: {
    getDefaultImage() {
      // Find the default image (the one marked as is_default)
      const defaultImage = this.product.images.find((image) => image.is_default)
      return defaultImage ? defaultImage.src : ''
    },
    generateProductLink(id, title) {
      // Create a URL similar to the format you mentioned
      const baseUrl = 'https://ilytat-design.printify.me/product'
      const formattedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') // Make the title URL-friendly
      return `${baseUrl}/${id}/${formattedTitle}`
    },
    navigateToProduct() {
      //   const url = this.generateProductLink(this.product.external.id, this.product.title)
      const url = this.product.external.handle
      console.log('URL: ', url)
      window.open(url, '_blank') // Open in a new tab
    }
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-details {
  margin-top: 12px;
}

.product-tags .tag {
  background-color: #f1f1f1;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 0.85rem;
}

.product-options {
  margin: 10px 0;
}

.product-variants {
  margin-top: 20px;
}

.variant-item {
  margin-bottom: 10px;
  border-top: 1px solid #ddd;
  padding-top: 5px;
}
</style>
