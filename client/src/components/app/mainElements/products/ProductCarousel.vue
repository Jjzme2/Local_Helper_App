<template>
  <div class="product-carousel-wrapper">
    <carousel
      v-bind="config"
      :items-to-show="productsToShowPerCarouselView"
      class="custom-carousel"
    >
      <slide v-for="product in products" :key="product.id" class="custom-slide">
        <div class="card">
          <div class="product-icon-container">
            <img :src="getDefaultImage(product)" :alt="product.title" class="icon" />
          </div>
          <div class="product-details">
            <h3 class="text-lg">{{ product.title }}</h3>
            <p class="text-med">$ {{ priceMin(product) }}</p>
            <button class="button primary" @click="navigateToProduct(product)">Buy Now</button>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation class="custom-navigation" />
        <pagination class="custom-pagination" />
      </template>
    </carousel>
  </div>
</template>

<script>
// import DOMPurify from 'dompurify'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'ProductCarousel',
  components: { Carousel, Slide, Pagination, Navigation },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  setup() {
    const config = {
      autoplay: 1750,
      wrapAround: true,
      pauseAutoplayOnHover: true
    }

    const productsToShowPerCarouselView = 2.5

    const priceMin = (product) => {
      if (!product || !product.variants || product.variants.length === 0) return '0.00'

      const minPrice = Math.min(...product.variants.map((variant) => variant.price))
      return (minPrice / 100).toFixed(2)
    }

    const getDefaultImage = (product) => {
      const defaultImage = product.images.find((image) => image.is_default)
      return defaultImage ? defaultImage.src : ''
    }

    const navigateToProduct = (product) => {
      const url = product.external.handle
      window.open(url, '_blank') // Open in a new tab
    }

    return {
      config,
      productsToShowPerCarouselView,
      priceMin,
      getDefaultImage,
      navigateToProduct
    }
  }
}
</script>
