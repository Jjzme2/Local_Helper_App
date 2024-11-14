<template>
  <div class="card">
    <div>
      <img :src="getDefaultImage(product)" :alt="product.title" class="icon" />
    </div>
    <div class="product-details">
      <h3 class="text-lg">{{ product.title }}</h3>
      <p class="text-med">$ {{ priceMin(product) }}</p>
      <button class="button primary" @click="navigateToProduct(product)">Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSlide',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    const getDefaultImage = (product) => {
      const defaultImage = product.images.find((image) => image.is_default)
      return defaultImage ? defaultImage.src : ''
    }

    const priceMin = (product) => {
      if (!product || !product.variants || product.variants.length === 0) return '0.00'

      const minPrice = Math.min(...product.variants.map((variant) => variant.price))
      return (minPrice / 100).toFixed(2)
    }

    const navigateToProduct = (product) => {
      const url = product.external.handle
      window.open(url, '_blank') // Open in a new tab
    }
    return {
      getDefaultImage,
      navigateToProduct,
      priceMin
    }
  }
}
</script>
